import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import axios from "axios";

export const AddData = () => {
  const [datas, setData] = useState({
    companyname: "",
  });

  const [name, setName] = useState("");
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    console.log(datas);

    if (datas.companyname !== "") {
      async function fetchData() {
        await axios.post("http://localhost:5000", datas).then((res) => {
          console.log(res.data.Message);
        });
      }

      fetchData();
    }
  }, [datas]);

  const handleSubmit = (event) => {
    console.log(event.target[0].value);
    setData({
      companyname: name,
      xValue: x,
      yValue: y,
      sizeValue: size,
    });
    // console.log(data);
    setName("");
    setx(0);
    sety(0);
    setSize(0);
    // event.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <TextField
          variant="filled"
          color="secondary"
          type="Name"
          label="Company Name"
          onChange={(text) => {
            setName(text.target.value);
          }}
          value={name}
          name="Name"
          placeholder="name"
        />

        <TextField
          variant="filled"
          color="secondary"
          label="X"
          onChange={(text) => {
            setx(text.target.value);
          }}
          value={x}
          name="x"
          placeholder="x"
        />
        <TextField
          variant="filled"
          color="secondary"
          label="Y"
          value={y}
          onChange={(text) => {
            sety(text.target.value);
          }}
          name="y"
          placeholder="y"
        />
        <TextField
          variant="filled"
          color="secondary"
          label="Size"
          value={size}
          onChange={(text) => {
            setSize(text.target.value);
          }}
          name="size"
          placeholder="size"
        />

        <Button
          className="sub-btn"
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddData;
