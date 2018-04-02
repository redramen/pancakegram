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
    height: "60px",
    borderBottom: "1px solid #dbdbdb",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: "2",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    fontFamily: "Grand Hotel, cursive",
    fontSize: "32px"
  }
};
