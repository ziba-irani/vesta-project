import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

function DarkMode() {
  const [isDark, setIsDark] = useState(false);
  const darkMode = localStorage.getItem("darkMode");
  const changeDarkMode = () => {
    if (darkMode == "true") {
      localStorage.setItem("darkMode", "false");
      document.documentElement.setAttribute("data-theme", "light");
      setIsDark(false)
    } else {
      localStorage.setItem("darkMode", "true");
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    }
  };
  useEffect(() => {}, [isDark]);
  return (
    <div>
      <div onClick={changeDarkMode} className="cursor-pointer">
        {darkMode == "true" ? <FaMoon size={25} className="th-textBlack"/> : <IoSunny size={25} className="th-textBlack" />}
      </div>
    </div>
  );
}

export default DarkMode;
