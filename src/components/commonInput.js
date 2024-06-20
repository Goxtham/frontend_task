// src/components/commonInput.js

import React, { useState, useEffect } from "react";
import { Input, Button, Row, Col, message } from "antd";

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const InputHandler = ({ onSubmit, editMode = false, initialData = {} }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editMode && initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
    }
  }, [editMode, initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      message.error("Both name and email are required.");
      return;
    }
    if (!isValidEmail(email)) {
      message.error("Please enter a valid email address.");
      return;
    }
    onSubmit({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <Row justify="center" style={{ marginBottom: 16 }}>
      <Col xs={20} sm={16} md={12} lg={8}>
        <div style={{ marginBottom: 8 }}>
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 8 }}>
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <Button
            type="primary"
            onClick={handleSubmit}
            style={{ width: "50%" }}
          >
            {editMode ? "Edit user" : "Add user"}
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default InputHandler;
