import { useState } from "react";

const Sidebar = ({ linkedListInstance, onListUpdate }) => {
    const [value, setValue] = useState('');
    const [removeValue, setRemoveValue] = useState('')
    const [atAtStartValue, setAtStartValue] = useState('')
    const [insertAtValue, setInsertAtValue] = useState('')
    const [insertValue, setInsertValue] = useState('')


    const callAdd = () => {
        if (!value) return;
        linkedListInstance.add(value)
        setValue('');

        if (onListUpdate) {
            onListUpdate();
        }
    }

    const callRemove = () => {
        if (!removeValue) return;
        linkedListInstance.remove(removeValue)
        setRemoveValue('');

        if (onListUpdate) {
            onListUpdate();
        }
    }

    const addAtStart = () => {
        if (!atAtStartValue) return;
        linkedListInstance.addAtStart(atAtStartValue)
        setAtStartValue('')
        if (onListUpdate) {
            onListUpdate();
        }
    }

    const insertAt = () => {

        if (!insertAtValue) return;
        console.log("this is insert value", insertAtValue, insertValue)
        linkedListInstance.insertAt(insertAtValue, insertValue)
        setInsertAtValue('')
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

            {/* ADD NODE */}

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
                <button
                    onClick={callAdd}
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#4A90E2",
                        color: "white",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        marginTop: "4px",
                        transition: "background-color 0.2s"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#357ABD"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#4A90E2"}
                >
                    Add Node
                </button>
            </div>

            {/* REMOVE NODE */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                <label htmlFor="nodeValue" style={{ fontSize: "0.9rem", color: "#bbb", fontWeight: "500" }}>
                    Remove Node
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
                    value={removeValue}
                    onChange={(e) => setRemoveValue(e.target.value)}
                />
                <button
                    onClick={callRemove}
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E24A4A",
                        color: "white",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        marginTop: "4px",
                        transition: "background-color 0.2s"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#C93030"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#E24A4A"}
                >
                    Remove Node
                </button>
            </div>

            {/* ADD AT START NODE */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                <label htmlFor="nodeValue" style={{ fontSize: "0.9rem", color: "#bbb", fontWeight: "500" }}>
                    ADD At Start Node
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
                    value={atAtStartValue}
                    onChange={(e) => setAtStartValue(e.target.value)}
                />
                <button
                    onClick={addAtStart}
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E24A4A",
                        color: "white",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        marginTop: "4px",
                        transition: "background-color 0.2s"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#C93030"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#E24A4A"}
                >
                    Add At start Node
                </button>
            </div>

            {/* ADD AT Index NODE */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
                <label htmlFor="nodeValue" style={{ fontSize: "0.9rem", color: "#bbb", fontWeight: "500" }}>
                    ADD At Index Node
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
                    value={insertAtValue}
                    onChange={(e) => setInsertAtValue(e.target.value)}
                />
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
                    value={insertValue}
                    onChange={(e) => setInsertValue(e.target.value)}
                />
                <button
                    onClick={insertAt}
                    style={{
                        padding: "10px",
                        borderRadius: "8px",
                        border: "none",
                        backgroundColor: "#E24A4A",
                        color: "white",
                        fontSize: "0.95rem",
                        fontWeight: "600",
                        cursor: "pointer",
                        marginTop: "4px",
                        transition: "background-color 0.2s"
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#C93030"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#E24A4A"}
                >
                    Add At Index Node
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
