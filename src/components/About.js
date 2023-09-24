import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div>
            
            <h1>About Page</h1>
            <User name={"props from functional"}/>
            <UserClass name={"Akshay sahni (class based)"}/>

            
        </div>
    )
}

export default About;