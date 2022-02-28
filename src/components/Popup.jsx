import React from "react";
const Popup = (props) => {
  return props.trigger ? (
    <div className="w-full bg-blue-color-250 fixed text-white bg-opacity-20 h-full absoulte top-0">
      {props.children}
    </div>
  ) : (
    ""
  );
};
export default Popup;
