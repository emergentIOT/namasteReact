const heading = React.createElement("h1", {
    id:"testing"
}, "Hello from React");
/**
 * Updating the DOM is the expensive operation to add or remove an element. 
 * And thats one of the reason React was created
 * ReactElement(object) => which converts it into HTML(Browser understand)
 */

//  const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {
//     id:"child"}, 
//     React.createElement("h1", {}, "Hello I am H1")
//     )
// );
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);