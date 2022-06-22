import { useEffect, useState } from "react";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import EntryList from "./components/EntryList/EntryList";
import { fetchCategoryFeeds } from "./lib";
import feeds from "./assets/feeds";
import './App.css';

const categoryList = Object.keys(feeds);
const App = () => {
  const [categories, setCategories] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    setCategories(categoryList);
  }, []);

  const handleSelect = (selectedCategory) => {
    setEntries([]);
    fetchCategoryFeeds(selectedCategory, handleEntriesMerge);
  }

  const handleEntriesMerge = (data) => {
    setEntries((prev) => {
      return prev.concat(data).sort((a, b) => {
        const dateA = new Date(a.publishDate);
        const dateB = new Date(b.publishDate);
        return dateA > dateB ? -1 : 1;
      });
    });
  };

  return (
    <div className="App">
      <header>
        <h3>{`rss feed`}</h3>
      </header>
      <CategorySelector categories={categories} onSelect={handleSelect} />
      <EntryList entries={entries} />
    </div>
  );
}

export default App;
