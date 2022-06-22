import { useEffect, useState } from "react";
import CategorySelector from "./components/CategorySelector/CategorySelector";
import EntryList from "./components/EntryList/EntryList";
import { fetchFeed } from "./lib";
import './App.css';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    // TODO generate category list from static data
    setCategories([]);
    fetchFeed();
  }, []);

  const handleSelect = (_selectedCategory) => {
    // TODO pull ress feed entries based on selectedCategory
    setEntries([]);
  }
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
