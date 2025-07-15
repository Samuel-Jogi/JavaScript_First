const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
       [ React.createElement("h2",{key:1},"Iam a h2 tag"), React.createElement("h1",{key:2},"Iam h1 tag")
        ,
        React.createElement("h1",{key:2},"Iam h1 tag"),
        React.createElement("h1",{key:2},"Iam h1 tag"),
        React.createElement("h1",{key:2},"Iam h1 tag"),
        React.createElement("h1",{key:2},"Iam h1 tag")
       ]
    )
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent)