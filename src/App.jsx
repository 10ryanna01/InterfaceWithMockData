import React from "react";
import { useState, useEffect, useRef, useContext } from "react"; 
import SchedualCard from "./components/SchedualCards/SchedualCard";
import ApiRequest from "./api/ApiRequest";
 
import SchedualCardLog from "./components/SchedualCards/SchedualCardLog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"; 
import ToggleTheme from "./components/DarkTheme/ToggleTheme"; 
import { DarkModeContext } from "./context/DarkModeContext";

function App() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const API_URL = "http://localhost:3000/schedules";
  const API_URLLogs = "http://localhost:3000/scheduleLogs";
  const [items, setItems] = useState([]);
  const [itemsLogs, setItemsLogs] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isArchived, setIsArchived] = useState("");
  const [reword, setReword] = useState();

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URL);
      const responseTwo = await fetch(API_URLLogs);

      const listItemsTwo = await responseTwo.json();
      const listItems = await response.json();
      // potential to add loading/failed screen state/UI later
      setItems(listItems);
      setItemsLogs(listItemsTwo);
      console.log(listItems, listItemsTwo);
    } catch (err) {
      console.log(err.stack);
    }
  };

  const handleCheckRetire = async (id) => {
    const listItems = items.map((dataItem) =>
      dataItem.id === id
        ? { ...dataItem, isRetired: !dataItem.isRetired }
        : dataItem
    );

    setItems(listItems);

    const myItem = listItems.filter((dataItem) => dataItem.id === id);

    // using css class switch method for archive togglings for now
    const moi = setReword(
      listItems.filter((dataItem) => dataItem.isRetired === reword)
    );

    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isRetired: myItem[0].isRetired }),
    };
    const reqUrl = `${API_URL}/${id}`;
    const result = await ApiRequest(reqUrl, updateOptions);
    // limited errror and load time out
  
    if (result) setFetchError(result);
  };

  useEffect(() => {
    // wait for an update then load items/data
    (async () => await fetchItems())();
    console.log(items, itemsLogs);

    // push theme wrapper to body
    document.body.classList.add('Project__UI');
   
  }, []);

  return (
  <>
      <div
        className={` ${darkMode ? " Project__UI__toggle-theme__dark": " Project__UI__toggle-theme__light"}   `}
      ><ToggleTheme    />
        <div className="Project__UI__grid">
          
          <Header />
          <main className="Project__UI__utility__d-content"   data-testid="testMain">
            <SchedualCardLog itemsLogs={itemsLogs} />
            <SchedualCard
              items={items}
              handleCheckRetire={handleCheckRetire}
              isArchived={isArchived}
              setIsArchived={setIsArchived}
              reword={reword}
              setReword={setReword}
            />
          </main>

          <Footer />
          {/* <nav>nav section build</nav> */}
        </div>
      </div>
      </>
  
  );
}

export default App;
