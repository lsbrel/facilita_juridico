import axios from "axios";
import React, { useLayoutEffect } from "react";
import UserTable from "./widgets/UserTable";

export default function () {
  var data = [];

  const getData = async () => {
    await axios
      .get("http://localhost:3010/user")
      .then((res) => {
        if (res.data.status) {
          Object.keys(res.data.content).map((x) => {
            data.push(res.data.content[x]);
          });
        }
      })
      .catch((err) => {
        console.log("error on fetching data => " + err);
      });
  };

  useLayoutEffect(() => {
    getData();
  });

  return (
    <div className="w-full p-2 pl-4 pr-4">
      <h1 className="text-2xl mb-5">Listar usuarios</h1>
      <UserTable data={data} />
    </div>
  );
}
