import { describe, expect, it } from "vitest"
import { render, screen, userEvent } from "../test-utils";
import App from "./App";
import Header from "./components/Header/Header";
import SchedualCard from "./components/SchedualCards/SchedualCard";
import SchedualCardLog from "./components/SchedualCards/SchedualCardLog";
import ToggleTheme from "./components/DarkTheme/ToggleTheme";
import Footer from "./components/Footer/Footer";

 

describe('App', () =>{
it("should render all interface UI components to App ", () =>{
  render(  <Header />,<Footer />, <SchedualCardLog />, <SchedualCard />);

  expect();
})


 
 
}); 

