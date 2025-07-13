// const heading = React.createElement("h1", {xyz:"test", id: "welcome"}, "Hello world from react")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
import React from 'react'
import ReactDOM from 'react-dom/client'

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", { id: "heading_1" }, "Heading 1"),
//         React.createElement("h2", { id: "heading_2" }, "Heading 2"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", { id: "heading_1" }, "Heading 1"),
//         React.createElement("h2", { id: "heading_2" }, "Heading 2"),
//     ])
// ])

// const Title = () => (
//     <h1 className='heading1' tabIndex="5">Welcome to React</h1>
// )

// const HeadingComponent = () => (
//     <div id="container">
//         <Title />
//     </div>
// )

// const heading = React.createElement("h1", { id: "heading" }, "heading 3 Updated")

// const jsxHeading = <h1 id="heading"> Heading is Updated to JSX</h1>

const Header = () =>{
    return()
}


const AppLayout = () => {
return (
    <div id="root">

    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent />)



