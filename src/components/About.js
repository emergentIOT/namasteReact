import React from "react";
import User from "./User";
import UserClass from "./UserClass";
// const About = () => {
//     return(
//         <div>
            
//             <h1>About Page</h1>
//             <User name={"props from functional"}/>
//             <UserClass name={"Akshay sahni (class based)"}/>

            
//         </div>
//     )
// }

class About extends React.Component {
    constructor(props){
        console.log("Parent constructor");
        super(props);

        //set some random state varibales
        this.state = {
            username: 'aman',
            address: 'wz-121'
        }

    }

    componentDidMount() {
        console.log("Parent component did mount")
    }

    render() {
        console.log("Parent render");
        const { name, address } = this.props;
        return(
            <div>
            
            We are loaded from class based about component
            <h1>About Page</h1>
             <User name={"props from functional"}/>
             <UserClass name={"Akshay sahni (class based)"}/>
             <UserClass name={"elon musk"}/>

            
            </div>
        )
    }
}

export default About;