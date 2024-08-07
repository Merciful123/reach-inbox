import NoMessage from "../../assets/NoMessage.svg";
import Switcher from "../../utils/Themeswitcher";
import gmailIcon from "../../assets/gmail.svg";
import home from "../../assets/Home.svg";
import user from "../../assets/User.svg";
import mailIcon from "../../assets/mail.svg";
import message from "../../assets/messageIcon.svg";
import list from "../../assets/List.svg";
import notify from "../../assets/Notify.svg";
import bar from "../../assets/bar_chart.svg";
import { Badge, Button } from "@nextui-org/react";
import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

const Onebox = () => {
  const [isMessage, setIsMessage] = useState(false);
  return (
    // main
    <div className="grid grid-cols-[auto_1fr]  min-h-[100dvh]  bg-[rgba(0,0,0,1)] ">
      {/* left start */}
      <div className=" p-[.5rem] bg-[rgba(16,17,19,1)] grid grid-rows-[auto_1fr_auto]  min-h-[100dvh] ">
        <div className="h-[100px] justify-center items-center place-self-center mt-2">
          <img src={gmailIcon} alt="" />
        </div>
        <div className="flex flex-col justify-start items-center gap-8 ">
          <img src={home} alt="" />
          <img src={user} alt="" />
          <img src={mailIcon} alt="" />
          <img src={message} alt="" />
          <img src={list} alt="" />
          {/* <div> */}
          <Badge
            className="w-6 h-6 text-white text-clip text-[.7rem] rounded-full bg-red-500 border-red-500"
            content="99+"
            shape="circle"
            color="danger"
          >
            <Button
              radius="full"
              isIconOnly
              aria-label="more than 99 notifications"
              variant="light"
            >
              <img src={notify} alt="" />
            </Button>
          </Badge>
          {/* </div> */}
          <img src={bar} alt="" />
        </div>
        <div className=" text-white flex justify-center items-center w-8 h-8 place-self-center rounded-full bg-green-800 text-[.8rem]">
          AB
        </div>
        {/* left end */}
      </div>
      {/* right start */}
      <div className="grid-rows-[auto_1fr]">
        {/* navbar start*/}
        <div className="h-[64px] bg-[rgba(37,38,43,1)] flex justify-between items-center p-[1rem]">
          <div className="text-white    font-[Open Sans] font-[700] text-[1rem]">
            Onebox
          </div>
          <div className="flex justify-center items-center gap-2 text-gray-400    font-[Open Sans] font-[600] text-[.8rem]">
            <Switcher />
            <div>
              <Dropdown>
                <DropdownTrigger>
                  <div className="flex justify-center items-center text-gray-400 gap-1 cursor-pointer">
                    Profile
                    <MdOutlineKeyboardArrowDown size={20}/>
                  </div>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem key="new">Profile</DropdownItem>
                  <DropdownItem key="copy">Log out</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        </div>
        {/* navbar end*/}
        {/* No message ui start */}
        {isMessage && (
          <div className="  h-[calc(100dvh-64px)] ">
            <div className="flex flex-col justify-center items-center gap-4 h-full">
              <img src={NoMessage} alt="" />
              <h2 className="text-white   font-[Open Sans] font-[700] text-[1.5rem]">
                It’s the beginning of a legendary sales pipeline{" "}
              </h2>
              <p className="text-gray-500   font-[Open Sans] font-[500] text-[1.125rem]">
                When you have inbound E-mails you’ll see them here
              </p>
            </div>
          </div>
        )}
        {/* No message ui end */}
      </div>
      {/* right end */}
    </div>
  );
};

export default Onebox;
