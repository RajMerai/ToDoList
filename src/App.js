import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

const App = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  // Function to handle adding a new item
  const addItem = () => {
    if (userInput.trim() !== "") {
      setList([...list, { id: Math.random(), value: userInput }]);
      setUserInput(""); // Reset input after adding
    }
  };

  // Function to delete an item by its id
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  // Function to edit an item
  const editItem = (index) => {
    const editedValue = prompt("Edit your task:", list[index].value);
    if (editedValue !== null && editedValue.trim() !== "") {
      let updatedList = [...list];
      updatedList[index].value = editedValue;
      setList(updatedList);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="text-center mb-4">
        <h1>React To-Do List</h1>
      </Row>

      {/* Input Section */}
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Add a new task..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              aria-label="Task"
              aria-describedby="basic-addon2"
            />
            <Button variant="dark" onClick={addItem}>
              Add
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {/* List Section */}
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <ListGroup>
            {list.map((item, index) => (
              <ListGroup.Item
                key={item.id}
                className="d-flex justify-content-between align-items-center"
              >
                {item.value}
                <div>
                  <Button
                    variant="warning"
                    size="sm"
                    style={{ marginRight: "10px" }} // Add custom spacing
                    onClick={() => editItem(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteItem(item.id)}
                  >
                    Delete
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
