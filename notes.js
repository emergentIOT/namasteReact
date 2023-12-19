/**
 * MORE LEARNING CONTENT FOR THIS REPO : 
 * 
 *  ref: https://github.com/chetannada/Namaste-React
 *  ref: https://github.com/acdlite/react-fiber-architecture
 * 
 * Browser dont understand React
 * 
 * What is CDN ?
 * 
 * 
 * 
 * 
 */


/**
 * 
 * *********************************REACT SUPER POWER****************************
 *  
 * 1. Diff algorithm
 * 2. useState() Hook 
 * 3. Using JSX
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
 *              this process is done by PARCEL which gives further responsibility to babel.js (powerful js compiler)
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
 * 
 * ************************FINISHING EPISODE 3 : LAYING THE FOUNDATION**************************
 * 
 * ************************EPISODE 4 : TALK IS CHEAP / SHOW ME THE CODE*************************
 * 
 * 1. props
 *     
 * const RestaurantCard = (props) => {
    return(
        <div className="res-card">
            <img 
            className="resImg"
            alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegpy22n7W_ZWsaXcganhGlyP-VXB_riD1FOFCOxxvlA&s" />
            <h3>{props.resName}</h3>
            <p>{props.cuisine}</p>
            <p>4.3 STARS</p>
            <p>30 mins</p>
        </div>
    )
} 


            <div className="res-container">
                <RestaurantCard resName="Desi dhaba" cuisine="chinese"/>
                <RestaurantCard resName="Tandoori den" cuisine="Indian"/>
            </div>
 * 
 * 
 * 
 * 2. config or server driven UI ?
 * - website driven by data. 
 * 
 * 3. ref api data : https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING
 * 
 * 4. OPTIONAL CHAINING : 
 * Optional chaining is a feature introduced in JavaScript that provides a 
 * concise way to access properties or call functions on an object that
 *  might be null or undefined without causing an error. 
 * It allows you to avoid lengthy and repetitive null checks 
 * before accessing nested properties or calling nested functions.
     resList?.data
 * 
 * 
 *  5. WITHOUT OPTIONAL CHAINING
    const city = user.address && user.address.city;
    console.log(city); // Output: New York

    // With optional chaining
    const city = user.address?.city;
    console.log(city); // Output: New York

    // Accessing a non-existing property
    const country = user.address?.country;
    console.log(country); // Output: undefined
 * 
   5. resList.map((restaurant) => <RestaurantCard key={restaurant.data.id} resList={restaurant}/>)
 *  not recommended to use >>>>>>index as key<<<<<<<< using uniqueId is best practice. 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ***********************FINISHING EPISODE 4 : TALK IS CHEAP / SHOW ME THE CODE***************
 * 
 * ************************EPISODE 5 : LETS GET HOOKED ****************************************
 * 
 * 
 * 
 * 1. REACT HOOK
 * 
 * 2. Two types of exports/ imports:
 *      -- default export/import 
 *              --import list from "list"
 *              --export default functionName;
 *      -- named export/import   
 *              --import { list } from "list"
 *              --export const name = "value";
 * 
 * 
 * 
 * 3. REACT HOOKS - hook is nothing but a normal js function, it has its own specific use case.
 *      - They are normal JS functions
 *      - React super power or utility functions
 *      - use to ccreate state variable
 *      
 *      3.1 useState() - superpowerful state variables in React
 *          It is used to create stateVariable, to maintain the state of your component.
 *          - we use named import to get this in .js file 
 *              eg: import { useState } from 'React'
 *      const[variableName, setVariableName] = useState("aman");
 *              - now we cannot directly modify variableName instead --> setVariableName("giveUpdatedName"), it will 
 *                  set the value of variableName.
 *              - As when setVariableName got updated it will re render the WHOLE component
 *              - How can const update the variable ? 
 *                  Answer: bascially when we setVariable("new value"), it will re redner the component with the new variable.
 * 
 *          
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * *********************************FINISHING EPISODE 5 : LETS GET HOOKED ****************************************
 * 
 * 
 * 
 * *********************************EPISODE 6 : EXPLORING THE WORLD ****************************************
 * 
 * 1. useEffect(callback, dependency array) hook
 *      - callback is called once component is rendered.
 *      - dependency array
 *      useEffect(()=> {console.log("useeffec called")}, [])
 * 
 *      - This state will only called once component is rendered completely.
 *              useEffect(()=>{
 *                  getData()
 *              }, []);
 * 
 *          const getData = async() => {
 *              const apiData = await fetch("api link");
 *              const jsonData = await apiData.json();
 *            }
 * 
 * 2. Shimmer UI
 * 
 * 3.  
 *  Conditional rendering
    if(list.length === 0) {
        return <Shimmer />;
    }
 * 
    4. Why do we need state variable?
    Ans: To make component dynamic    
 * ************************FINISHING EPISODE 6 : EXPLORING THE WORLD ****************************************
 
************************ EPISODE 7 : FINDING THE PATH ****************************************
 




************************FINISHING EPISODE 7 : FINDING THE PATH ****************************************
 1. Setting up react Router 
    import { createBrowserRouter, RouterProvider }

    const appRouter = createBrowserRouter([
        {
            path: ,
            element
        }
    ]);

    root.render(<RouterProvider router={appRouter} />);


 2. Hook provided by React router
 
    { useRouteError }

    const err = useReactError();
    console.log(err);

3. Link component for navigation





************************ EPISODE 9 : OPTIMISING OUR APP ****************************************
 

1. SINGLE RESPONSIBILITY 

Custom hook 
 - Its a normal utility function
 - makes your code readable, reusable and modular 
 - Rule to create hook useThenAnyNameYouWantToGiveHook()

2.  ********** IMPORTANT CONCEPT ************
 - Dynamic bundling
 - Code splitting
 - chunking
 - lazy loading

 Applying lazy loading 
 e.g.
    -- const About = lazy(() => import('location to component'));
    we need to wrap it in suspense: 
    element: (<Suspense fallback={ <Shimmer/> }> <About /> </Suspense);

 ** File of size increase alot, while it bundle it , it loads single .js file by 
    brining code all together 

    How this can be optimised? 

    Ans: we can bundle it into multiple file, 
        eg. all components related to product will under index.js
        eg. all components related to payment will under another bundle payment.js
            - 

        The above process known as code splitting, dyanamic bundling, lazy loading

* Benefits of lazy loading include:

1. Faster initial load times: 
    Lazy loading reduces the amount of data that needs to be loaded when a page is first accessed, which can lead to faster page rendering and a better user experience.

2. Reduced bandwidth usage: 
    By only loading resources when they are needed, lazy loading can help conserve bandwidth, particularly on mobile devices and slower connections.

3. Improved perceived performance: 
    Users see content more quickly because the critical resources are loaded first, giving the impression of a faster application.

4. Optimized resource usage: 
    Resources that are not immediately needed are not loaded, which can save server resources and reduce hosting costs.


************************FINISHING EPISODE 9 : OPTIMISING OUR APP ****************************************
    */




