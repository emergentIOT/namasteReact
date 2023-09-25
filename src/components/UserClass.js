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
            count: 0,
            //another state variable
            count2: 4
        }
        console.log(this.state);
    }

    /**
     * this is called after render, or component already mounted on DOM or webpage.
     * 
     * Usage: It is used to make API calls
     * similar to useEffect(()=>{}, []) in functional component
     */
    componentDidMount() {

        console.log(this.props.name + "Children component did mount");
        // Api calls


    }


    //Inbuilt render() function
    render() {
      
      const { name } = this.props;
      const { count2 } = this.state;
      console.log(name + "Children render");
       return(
          <div>
            <h1>{name}</h1>
            <p>Way to use state variables: {this.state.count} - {count2}</p>
            <button onClick={() => { 
                //Way to update state variable
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 2
                })
            }}>+</button>

            <button onClick={() => {
                this.setState({
                    count: this.state.count - 1
                })
            }}>-</button>
            <h1>Class based component</h1>
          </div>
       )
    }
}

export default UserClass;