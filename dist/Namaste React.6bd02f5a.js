// const heading = React.createElement("h1", {xyz:"test", id: "welcome"}, "Hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "heading_1"
        }, "Heading 1"),
        React.createElement("h2", {
            id: "heading_2"
        }, "Heading 2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {
            id: "heading_1"
        }, "Heading 1"),
        React.createElement("h2", {
            id: "heading_2"
        }, "Heading 2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=Namaste React.6bd02f5a.js.map
