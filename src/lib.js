const corsProxy = "https://cors.eu.org/";
const fetchFeed = () => {
  const url = "https://www.youtube.com/feeds/videos.xml?channel_id=UCrTNhL_yO3tPTdQ5XgmmWjA";
  fetch(corsProxy + url)
    .then((res) => res.text()
      .then((data) => console.info("data", data))
      .catch((err) => console.warn("data err", err))
      .finally(() => console.info("data complete")))
    .catch((err) => console.warn("res err", err))
    .finally(() => console.info("res complete"));
};
export { fetchFeed };
