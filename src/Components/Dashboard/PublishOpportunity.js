import React from "react";
import { useOutletContext } from "react-router";

export default function PublishOpportunity() {
  const navToggleHandler = useOutletContext();

  return (
    <>
      <div className="main-header">
        <ion-icon
          id="menu-bar"
          name="menu-outline"
          onClick={navToggleHandler}
        ></ion-icon>
      </div>
    </>
  );
}
