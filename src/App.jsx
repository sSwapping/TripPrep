import { useState } from "react";
import "./App.css";
import { BackgroundHeader } from "./components/BackgroundHeader";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { ItemList } from "./components/ItemList";
import { Sidebar } from "./components/Sidebar";
import { initialItems } from "./lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);
  return (
    <>
      <BackgroundHeader />
      <main>
        <Header />
        <ItemList items={items} />
        <Sidebar handleAddItems={setItems} />
      </main>
      <Footer />
    </>
  );
}

export default App;
