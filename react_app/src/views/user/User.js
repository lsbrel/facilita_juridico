import axios from "axios";
import React, { useLayoutEffect } from "react";
import UserTable from "./widgets/UserTable";
import UserCard from "./widgets/UserCard";
import toast, { Toaster } from "react-hot-toast";

export default function () {
  const [data, setDataUser] = React.useState([]);

  const getData = async () => {
    let data = [];
    await axios
      .get("http://localhost:3010/user")
      .then((res) => {
        if (res.data.status) {
          data = res.data.content;
        }
      })
      .catch((err) => {
        return console.log("error on fetching data => " + err);
      });

    if (data.length > 0) {
      return setDataUser(data);
    }
  };

  const deleteData = async (id) => {
    await axios
      .delete(`http://localhost:3010/user/${id}`)
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.messageCode);
        } else {
          toast.error(res.data.messageCode);
        }
      })
      .catch((err) => {
        console.log("error on deleting data => " + err);
      });
  };

  useLayoutEffect(() => {
    getData();
  });

  return (
    <div className="w-full p-2 pl-4 pr-4">
      <h1 className="text-2xl mb-5">Listar usuarios</h1>
      {data.map((item) => (
        <UserCard key={item.id} data={item} callbackFunction={deleteData} />
      ))}
      <Toaster />
    </div>
  );
}
