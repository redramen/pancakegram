import React from "react";

const Navbar = () => {
  return (
    <div style={styles.navBar}>
      <span style={styles.logo}>Pancakegram</span>
    </div>
  );
};

export default Navbar;

const styles = {
  navBar: {
    width: "100%",
    height: "80px",
    borderBottom: "1px solid #dbdbdb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    fontFamily: "Grand Hotel, cursive",
    fontSize: "32px"
  }
};
