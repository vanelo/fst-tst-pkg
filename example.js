const getContests = require("./index");

// Get your api_key in https://clist.by/api/v2/doc/
const username= "your username";
const api_key="your api_key";

(async () => {
    const res = await getContests(username,api_key);
    console.log(res);
  })();
  