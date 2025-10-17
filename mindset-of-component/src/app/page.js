import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <main>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Todo List App</h1>

        <div style={{ margin: "20px 0" }}>
          <input
            type="text"
            placeholder="Enter a new task.."
            style={{
              padding: "8px",
              fontSize: "16px",
              border: "1px solid black",
              borderRight: "none",
              outline: "none",
            }}
          />
          <button
            style={{
              padding: "8px 16px",
              fontSize: "16px",
              border: "1px solid black",
              backgroundColor: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyleType: "disc", display: "inline-block", textAlign: "left" }}>
          <li>
            <input type="checkbox" /> <span style={{ fontSize: "20px" }}>Sleep</span>
          </li>
          <li>
            <input type="checkbox" checked readOnly />{" "}
            <span style={{ textDecoration: "line-through", fontSize: "20px" }}>
              Join React class
            </span>
          </li>
          <li>
            <input type="checkbox" />{" "}
            <span style={{ fontSize: "20px" }}>Do react homework</span>
          </li>
        </ul>
      </main>
    </div>
  );
}

