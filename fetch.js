fs = require("fs");
const https = require("https");
process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "Github Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

// function writeGithubFallback() {
//   if (fs.existsSync("./public/profile.json")) {
//     console.log("using existing file at public/profile.json as fallback");
//     return;
//   }

//   const emptyGithubProfile = JSON.stringify({
//     data: {
//       user: {
//         id: GITHUB_USERNAME || "fallback-user",
//         name: GITHUB_USERNAME || "",
//         bio: "",
//         avatarUrl: "",
//         location: "",
//         pinnedItems: {
//           totalCount: 0,
//           edges: []
//         }
//       }
//     }
//   });

//   fs.writeFile("./public/profile.json", emptyGithubProfile, function (err) {
//     if (err) return console.log(err);
//     console.log("saved fallback file to public/profile.json");
//   });
// }

function writeMediumFallback() {
  const emptyMediumFeed = JSON.stringify({items: []});
  fs.writeFile("./public/blogs.json", emptyMediumFeed, function (err) {
    if (err) return console.log(err);
    console.log("saved fallback file to public/blogs.json");
  });
}

if (USE_GITHUB_DATA === "true") {
  if (GITHUB_USERNAME === undefined) {
    throw new Error(ERR.noUserName);
  }

  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
  var data = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
  });
  const default_options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      "User-Agent": "Node"
    }
  };

  if (GITHUB_TOKEN) {
    default_options.headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
  }

  const req = https.request(default_options, res => {
    let data = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn(ERR.requestFailed);
      writeGithubFallback();
      return;
    }

    res.on("data", d => {
      data += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", data, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/profile.json");
      });
    });
  });

  req.on("error", error => {
    console.warn(`${ERR.requestFailed} Falling back to profile.json fallback.`);
    console.warn(error);
    writeGithubFallback();
  });

  req.write(data);
  req.end();
}

if (MEDIUM_USERNAME !== undefined) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.warn(ERR.requestFailedMedium);
      writeMediumFallback();
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.log(err);
        console.log("saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    console.warn(
      `${ERR.requestFailedMedium} Falling back to an empty blogs feed.`
    );
    console.warn(error);
    writeMediumFallback();
  });

  req.end();
}
