import React from "react";
import { useStore } from "react-redux";
import { Table } from "../Table/index.js";
import { Button, Card, Image, Grid, Modal } from "semantic-ui-react";
import { NewTable } from "./NewTable.js";
import { InternalNotifications } from '../Notifications';
export const Home = function (props) {
  const store = useStore();
  return (
    <div>
      {" "}
      <NewTable />
      <InternalNotifications />
    </div>
  );
};
