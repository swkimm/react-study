import React from "react";

const styles = {
  wrapper: {
    margin: 8,
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};

const Notification = () => {
  return (
    <div style={styles.wrapper}>
      <span style={styles.messageText}>{this.props.messageText}</span>
    </div>
  );
};

export default Notification;
