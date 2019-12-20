import React from "react";
import { Link } from "react-router-dom";
import {
  SprkMasthead,
} from "@sparkdesignsystem/spark-react";

function SiteNav() {
  const links = [
    {
      element: Link,
      text: "Accordion",
      to: "/accordion"
    },
    {
      element: Link,
      text: "Alert",
      to: "/alert"
    },
    {
      element: Link,
      text: "Award",
      to: "/award"
    },
    {
      element: Link,
      text: "Button",
      to: "/button"
    },
    {
      element: Link,
      text: "Card",
      to: "/card"
    },
    {
      element: Link,
      text: "Dictionary",
      to: "/dictionary"
    },
    {
      element: Link,
      text: "Dividers",
      to: "/dividers"
    },
    {
      element: Link,
      text: "Dropdown",
      to: "/dropdown"
    },
    {
      element: Link,
      text: "Footer",
      to: "/footer"
    },
    {
      element: Link,
      text: "Highlight Board",
      to: "/highlightboard"
    },
    {
      element: Link,
      text: "Icon",
      to: "/icon"
    },
    {
      element: Link,
      text: "Input",
      to: "/input"
    },
    {
      element: Link,
      text: "Link",
      to: "/link"
    },
    {
      element: Link,
      text: "List",
      to: "/list"
    },
    {
      element: Link,
      text: "Masthead (Default)",
      to: "/masthead-default"
    },
    {
      element: Link,
      text: "Masthead (Extended)",
      to: "/masthead-extended"
    },
    {
      element: Link,
      text: "Modal",
      to: "/modal"
    },
    {
      element: Link,
      text: "Pagination",
      to: "/pagination"
    },
    {
      element: Link,
      text: "Promo",
      to: "/promos"
    },
    {
      element: Link,
      text: "Stack",
      to: "/stack"
    },
        {
      element: Link,
      text: "Stepper",
      to: "/stepper"
    },
    {
      element: Link,
      text: "Table",
      to: "/table"
    },
    {
      element: Link,
      text: "Tabs",
      to: "/tabs"
    },
    {
      element: Link,
      text: "Toggle",
      to: "/toggle"
    },
  ];

  return (
    <SprkMasthead
      bigNavLinks={links}
    />
  );
}

export default SiteNav;
