
const parent = React.createElement("div",{ id: "parent"}, 
React.createElement("div",{id:"child"}, 
[React.createElement("h1", {}, "I am h1 bro"), React.createElement("h2", {}, "I am h1 bro")]
))




const heading = React.createElement("h1",{ id : "heading"},"Hello World of React!!!")
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(parent)
        console.log(parent)