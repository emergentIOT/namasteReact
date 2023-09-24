/**
 * Class based component.
 * 
 */
import React from "react"
class UserClass extends React.Component {

    //props
    constructor(props) {
        super(props);

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
    //Inbuilt render() function
    render() {
      const { name } = this.props;
      const { count2 } = this.state;
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