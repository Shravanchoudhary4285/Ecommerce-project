import React, {useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Product() {
  const Navigate = useNavigate();

  const [data, setdata] = useState([]);
  const [search, setsearch] = useState("");

  const GetData = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `http://localhost:3005/product/getproduct`,
      { headers: { Authorization: `bearer ${token}` } }
    );
    if (response.data.status === 401) {
      toast.info(response.data.message);
      localStorage.clear();
      Navigate("/");
    } else {
      setdata(response.data.getdata);
    }
  };

  useEffect(() => {
    GetData();

    // for secure route
    const auth = localStorage.getItem("email");
    if (!auth) {
      Navigate("/");
    }
  },[]);

  const HandleDelete = async (id) => {
    await axios.delete(`http://localhost:3005/product/delete/${id}`);
    GetData();
  };

  return (
    <>
      <Header></Header>

      <h1 style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
        Product List
      </h1>
      <div>
        <input
          type="text"
          placeholder="Search items"
          onChange={(e) => setsearch(e.target.value)}
          style={{
            width: 300,
            marginBottom: 15,
            outline: "none",
            marginLeft: 15,
          }}
        />
      </div>

      {data ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S NO.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Company</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((value) =>
                value.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((value, index) => (
                <tr key={value._id}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.price}</td>
                  <td>{value.category}</td>
                  <td>{value.company}</td>
                  <td>
                    <Link to={`/updateproduct/${value._id}`}>
                      <Button variant="primary" type="submit">
                        Update
                      </Button>
                    </Link>

                    <Button
                      variant="danger"
                      type="submit"
                      className="mx-2"
                      onClick={() => HandleDelete(value._id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "15%",
          }}
        >
          <h1>No Record Found</h1>
        </div>
      )}

      <Footer></Footer>
    </>
  );
}

export default Product;
