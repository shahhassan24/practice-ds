import { useState } from "react";

const Sidebar = ({ linkedListInstance, onListUpdate }) => {
    const [value, setValue] = useState('');

    const callAdd = () => {
        if (!value) return;

        console.log("this is call add", value)
        linkedListInstance.add(value)
        setValue('');

        if (onListUpdate) {
            onListUpdate();
        }
    }

    return (
        <div style={{
            width: "300px",
            backgroundColor: "#1e1e1e",
            color: "white",
            padding: "24px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            borderRight: "1px solid #333",
            boxShadow: "2px 0 10px rgba(0,0,0,0.5)",
            zIndex: 10
        }}>
            <div>
                <h2 style={{ margin: "0 0 8px 0", fontSize: "1.4rem", fontWeight: "600", color: "#E0E0E0" }}>
                    Linked List
                </h2>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#888", lineHeight: "1.4" }}>
                    Visualize and interact with the data structure in 3D.
                </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                <label htmlFor="nodeValue" style={{ fontSize: "0.9rem", color: "#bbb", fontWeight: "500" }}>
                    Add Node
                </label>
                <input
                    id="nodeValue"
                    type="text"
                    placeholder="Type value here..."
                    style={{
                        padding: "12px",
                        borderRadius: "8px",
                        border: "1px solid #444",
                        backgroundColor: "#2a2a2a",
                        color: "white",
                        fontSize: "1rem",
                        outline: "none",
                        transition: "border-color 0.2s"
                    }}
                    onFocus={(e) => e.target.style.borderColor = "#4A90E2"}
                    onBlur={(e) => e.target.style.borderColor = "#444"}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button onClick={callAdd}>add</button>
            </div>
        </div>
    );
};

export default Sidebar;
