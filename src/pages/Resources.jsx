import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate, Link } from "react-router-dom";
import ResBanner from "../components/ResBanner";
import axios from "axios";
import { urlRes } from "../endpoints";
import SchoolLI from "../components/SchoolLI";
const Resources = (props) => {
  const [schools, setSchools] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${urlRes}/Schools`);
      setSchools(response.data);
    };
    getData();
  }, []);

  const handleChange = (e) => {
    setSearchStr(e.target.value);
    console.log(searchStr);
    const newFilter = schools.filter((value) => {
      return value.name.toLowerCase().includes(searchStr.toLowerCase());
    });
    setFilteredData(newFilter);
  };

  const handleSchoolSearch = async (e) => {
    e.preventDefault();
    await axios
      .get(`${urlRes}/SID/${searchStr}`)
      .then((response) => {
        console.log(response);
        navigate(`/resources/schools/${response.data}`);
      })
      .catch((error) => navigate("/schoolNotFound"));
  };

  const clearFilter = () => {
    setSearchStr("");
    setFilteredData([]);
  };

  return (
    <div>
      <Navbar data={props.data}/>
      <ResBanner />
      <div className="container text-center my-5">
        <h1 className="fw-bold">Find resources by school</h1>
        <h5>
          Enter the name of your school to find the courses and available
          resources
        </h5>
        <form className="my-4">
          <div className="d-flex justify-content-center">
            <input
              className="form-control me-3 w-40"
              placeholder="American Univeristy of Ubiland"
              onChange={handleChange}
              id="input"
            />
            <button
              className="btn-burnt-umber my-2 my-sm-0 px-3 py-2"
              type="button"
              onClick={handleSchoolSearch}
              id="search-button"
            >
              Search
            </button>
          </div>

          {filteredData.length !== 0 && (
            <div className="bg-light border border-muted w-50 mx-auto my-2">
              <div className="text-end">
                <button
                  type="button"
                  className="px-2"
                  onClick={clearFilter}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>
              {filteredData.map((s, i) => {
                return (
                  <div className="bg-white m-2 p-2 text-start" key={i}>
                    <Link
                      className="wibix-link p-2"
                      to={`/resources/schools/${s.id}`}
                    >
                      {s.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </form>
        <p className="my-3 fw-bold text-muted">or</p>
        <h5 className="mb-5">Post your documents <Link to="/postRes" className="btn-burnt-umber px-3 py-2">here</Link></h5>

        <hr />
        <h4 className="fw-bold my-5">
          Schools on <span className="logo-font">wibix</span>
        </h4>

        <div className="d-flex flex-wrap">
          {schools.map((s, i) => {
            return (
              <>
                <SchoolLI
                  key={i}
                  id={s.id}
                  name={s.name}
                  numberOfRes={s.numberOfRes}
                />
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
