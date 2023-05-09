import { useContext, useState } from "react";

import { DarkModeContext } from "../../context/DarkModeContext";
import { IconLightMode, IconDarkMode } from "../Icons/Index";

export default function ToggleTheme() {
  const [darkMode, setDarkMode] = useContext(DarkModeContext);

  const [altMode, setAltMode] = useState(false);
  const handletoggleThemeDark = () => {
    setDarkMode(true);
    setAltMode(true);
  };

  const handletoggleThemeLight = () => {
    setDarkMode(false);
  };

  return (
    <>
      <div className="Project__UI__header__theme">
        {darkMode ? (
          <button
            aria-label="enable light mode theme"
            onClick={handletoggleThemeLight}
            className="Project__UI__utility__reset"
            role="button"
          >
            <IconLightMode className="Project__UI__utility__icon--theme" />
          </button>
        ) : (
          <button
            aria-label="enable dark mode theme"
            onClick={handletoggleThemeDark}
            className="Project__UI__utility__reset"
            role="button"
          >
            <IconDarkMode className="Project__UI__utility__icon--theme" />
          </button>
        )}
      </div>
    </>
  );
}
