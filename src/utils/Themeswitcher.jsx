import  { useState } from "react";
import useDarkSide from "../utils/useDarkSide";
import { Switch } from "@nextui-org/react";
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div>
        <Switch
          isSelected={darkSide}
          onValueChange={toggleDarkMode}
          defaultSelected
          size="lg"
          // back
          color="secondary"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <IoSunny className={className} />
            ) : (
              <IoIosMoon className={className} />
            )
          }
        >
        </Switch>
      </div>
    </>
  );
}
