/**
 * Browser dont understand React
 * 
 * What is CDN ?
 * 
 * 
 * 
 * 
 */

/**
 * Updating the DOM is the expensive operation to add or remove an element. 
 * And thats one of the reason React was created
 * ReactElement(object) => which converts it into HTML(Browser understand)
 */
const heading = React.createElement("h1", {
    id:"testing"
}, "Hello from React");


/**
 * <div id="parent">
        <div id="child">
            <h1>Hello I am H1</h1>
            <h2>Hello I am H2</h2>
        </div>
    </div>
 */
const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {
    id:"child"}, 
    [React.createElement("h1", {}, "Hello I am H1"), React.createElement("h2", {}, "Hello I am H2")]
    )
);


/**
 * The above way of writing code will become mess and thats why we have  *** JSX ***
 */

