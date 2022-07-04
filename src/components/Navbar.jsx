import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div
            style={{
                height: "80px",
                display: "flex",
                justifyContent: "center",
                gap: "150px",
                backgroundColor: "gray",
                alignItems: "center",
                marginBottom: "40px",
            }}
        >
            <Link
                style={{
                    textDecoration: "none",
                    color: "Black",
                    fontWeight: "bold",
                    fontSize: "25px",
                }}
                to={"/"}
            >
                Home
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    color: "Black",
                    fontWeight: "bold",
                    fontSize: "25px",
                }}
                to={"/add-city"}
            >
                Add City
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    color: "Black",
                    fontWeight: "bold",
                    fontSize: "25 vb px",
                }}
                to={"/add-country"}
            >
                Add Country
            </Link>
        </div>
    );
};

export default Navbar;