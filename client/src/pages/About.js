import { Link } from 'react-router-dom';
import Header from "../components/Header";

const About = () => {
    return (
        <>
            <Header title="About" />
            <div>
                <h4>Version 1.0.0</h4>
                <Link to='/'>Go back</Link>
            </div>
        </>
    )
}

export default About
