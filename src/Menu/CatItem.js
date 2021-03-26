import React from "react";

function CatItem(props) {
    const { item, setMenuItem } = props;
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
            <button onClick={() => setMenuItem(item)}>{item.name}</button>
        </div>
    );
}

export default CatItem;
