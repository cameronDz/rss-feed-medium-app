import { parseString } from "xml2js"
import feeds from "./assets/feeds";

const corsProxy = "https://cors.eu.org/";

const fetchCategoryFeeds = (category, callback) => {
  const { length } = feeds[category];
  for (let idx = 0; idx < length; idx++) {
    fetchFeed(feeds[category][idx], callback);
  }
};

const fetchFeed = (url, callback) => {
  fetch(corsProxy + url)
    .then((res) => res.text()
      .then((data) => parseString(data, (err, res) => parseStringCallback(err, res, callback)))
      .catch((err) => console.warn("data err", err))
      .finally(() => console.info("data complete")))
    .catch((err) => console.warn("res err", err))
    .finally(() => console.info("res complete"));
};

const parseStringCallback = (err, res, callback) => {
  if (err) {
    console.warn("err", err);
  } else {
    const entries = res.feed.entry.map((item) => {
      return cleanParsedXMLEntry(item);
    });
    console.info("entries", entries);
    callback(entries);
  }
};

const cleanParsedXMLEntry = (entry) => {
  const media = entry["media:group"][0];
  return {
    author: entry.author[0].name[0],
    id: entry["yt:videoId"][0],
    link: entry.link[0].$.href,
    name: entry.title[0],
    publishDate: entry.published[0],
    thumbnailUrl: media["media:thumbnail"][0].$.url,
  };
};

export { fetchCategoryFeeds };
