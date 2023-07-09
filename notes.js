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

/**
 * 
 * COMMANDS USED 
 * 
 * - npm init
 * Parcel: 
 * - npx parcel index.html
 */


/**
 * GOOD THINGS TO DO IN REACT
 */

/**
 * BAD THINGS TO DO IN REACH 
 * 
 * 1. to bring React in project using cdn is not a good way , use package.json instead  
 *  <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
 */


/**
 * ************************EPISODE 3 : LAYING THE FOUNDATION**************************
 * 
 * 
 * 1. React element:
 *      It is a object which will render onto the screen and return or become HTML
 *      React.createElement("h1", {"id":"this_is_heading_id"}, "This is what you want to write inside heading tag");
 * 
 * 2. JSX - It is not HTML and JS
 *      It is a powerful way to wrte html like syntax in React 
 *      It is also used to create React.element
 * 
 *      - JSX transcompile before it reached JS compiler, 
 *          makes the JSX code readable for browser search engine, 
 *              this process is done by APRCEL which gives further responsibility to babel.js (powerful js compiler)
 * 
 *      JSX(returns object) --> babel(convert the JSX code to make it readable) --> React element(returns object) --> render on broser as HTML
 *              
 *         - {writing JS inside of JSX using this expression}
 *         - { console.log("this will also work") }
 * 
 *      **** Two ways to call FunctionalComponent ****
 *          const heading = "I am being called in functional component and can be render tw ways as shown below";
 *          const FunctionalCompoent = () => {
 *              return ({heading});
 *             }
 *         - {FunctionalComponent()}
 *         - <FunctionalComponent />
 *      
 * 
 * 
 * 3. REACT component
 *      3.1 class based - old way 
 *      3.2 functional based - new way 
 *          - it is a simple JS function which returns any peice of JSX
 *          const Functional
 * 
 *      way to render component
 * 
 * 4. React Fragment
 *      to wrap two divs around parent div , also act as empty tag
 *      <React.Fragment> OR <>
             <div id='container_1'>
                        <h1>I am here</h1>
             </div>
             <div id='container_2'></div>
         </React.Fragment> OR </>
 * 
 * 
 * 
 * ************************FINISHING EPISODE 3 : LAYING THE FOUNDATION**************************
 * 
 * 
 */
