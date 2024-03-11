import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import ButtonUser from "./widgets/ButtonUser";
import InputUser from "./widgets/InputUser";

export default function () {
  const [empty, setEmpty] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const postData = async () => {
    if (__isEmpty()) {
      setEmpty(true);
      return;
    }
    await axios
      .post("http://127.0.0.1:3010/user", {
        name: name,
        email: email,
        phone: phone,
      })
      .then((res) => {
        if (res.data.status) {
          toast.success(res.data.messageCode);
        }
      })
      .catch((err) => {
        console.log("error on fetch data => " + err);
      })
      .finally(() => {
        __clearData();
        setEmpty(false);
      });
  };

  const __isEmpty = () => {
    if (email == "" || phone == "" || name == "") {
      return true;
    } else {
      return false;
    }
  };

  const __clearData = () => {
    setEmail("");
    setName("");
    setName("");
  };

  return (
    <div className="w-full p-2 pl-4 pr-4">
      <h1 className="text-2xl mb-5">Cadastrar usuario</h1>
      <div className="p-4">
        <InputUser
          label="Nome"
          placeholder="Lucas Gabriel"
          value={name}
          callbackFunction={(value) => setName(value)}
        />
        <InputUser
          label="E-mail"
          placeholder="lucas.81.gabriel@gmail.com"
          value={email}
          callbackFunction={(value) => setEmail(value)}
        />
        <InputUser
          label="Telefone"
          placeholder="4499322191"
          value={phone}
          callbackFunction={(value) => setPhone(value)}
        />
        <p className="text-red-600 text-sm mt-0 mb-5">
          {empty ? "Campos nao podem estar vazios" : ""}
        </p>
        <ButtonUser label="Cadastrar" callbackFunction={postData} />
      </div>
      <Toaster />
    </div>
  );
}
