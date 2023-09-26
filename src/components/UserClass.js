/**
 * Class based component.
 * 
 * How component is loaded or mounted?
 *  - First of all constructor() is called.
 *  - Secondly render() method is called.
 * 
 */

/**
 *          COMPONENT LIFE CYCLE
 * Consider About.js - Parent 
 *          UserClass.js - child
 * 
 * Parent constructor() 
 * Parent render()
 *  
 *  - First constructor()
 *  - First render()
 * 
 *  - Second constructor()
 *  - second render()
 *  DIff has calculated reconcileation happen
 *  <DOM UPDATES in a single batch>
 * 
 *  - First componentDidMount()
 *  - Second componentDidMount()
 * 
 * ParentComponentDidMount()
 */
import React from "react"
class UserClass extends React.Component {

    //props
    constructor(props) {
        
        /**
         * super(props): Inside the constructor, you often see a call to super(props). 
         * In the context of a React component, this is necessary because a React component is 
         * typically a subclass of React.Component or a similar class. 
         * super(props) calls the constructor of the parent class (React.Component) and 
         * passes the props parameter to it. 
         * This is required to ensure that the component is properly initialized and 
         * can access its props.
         */
        super(props);
        console.log(this.props.name + "Children constructor");
        //state variables for class based components.
        // Their were no hooks earlier
        //Creating multiple state variables under this.state variable only
        this.state = {
            api_user: {
                name: "Dummy name",
                location: "Default"
            }
            //another state variable
            //count2: 4
        }
        console.log(this.state);
    }

    /**
     * this is called after render, or component already mounted on DOM or webpage.
     * 
     * Usage: It is used to make API calls
     * similar to useEffect(()=>{}, []) in functional component
     */
    async componentDidMount() {
        // Api calls
        const api_call = await fetch("https://api.github.com/users/akshaymarch7");
        const github_user = await api_call.json();
        console.log("Github user", github_user);

        /**
         * When this is called , updating cycle begins.
         * Link: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
         * 
         * Below code will run and update the state variable, whenever state variables changes 
         *  it will re render the component.
         * 
         *  So, firstly constructor will call which will set dummy values, 
         *  as api call didnt happend, then render will do a first call which will 
         *  show the dummy data and after that componentDidMount() will call and api call 
         *   will also be included and set the state variable, which will cause to re render the 
         *    component and update the data based in API result, and after this it will call 
         *    componentDidUpdate()
         */
        this.setState({
            api_user: github_user
        })

    }

    componentDidUpdate() {
        /**
         * This will be called once componentDidMount has been called.
         */
    }

    /**
     * When this component disappear from UI html
     */
    componentWillUnmount() {

    }

    //Inbuilt render() function
    render() {
      //const { name } = this.props;
      const { name, location } = this.state.api_user;
     
      console.log(name + "Children render");
       return(
          <div>
            <h1>{name}</h1>
            <p>Location : {location} </p>
            {/* <button onClick={() => { 
                //Way to update state variable
                this.setState({
                    count: this.state.count + 1,
                    //count2: this.state.count2 + 2
                })
            }}>+</button>

            <button onClick={() => {
                this.setState({
                    count: this.state.count - 1
                })
            }}>-</button> */}
            <h1>Class based component</h1>
          </div>
       )
    }
}

export default UserClass;