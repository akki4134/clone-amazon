import { useState, useEffect } from 'react'



import './Home.css'
import HomeContent from './HomeContent'
import Product from './Product'

import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

import Alert from 'react-bootstrap/Alert'

const Home = () => {

    function AlertDismissibleExample() {

        useEffect(() => {
            setTimeout(() => { setShow(false) }, 10000);
        }, [])

        const [show, setShow] = useState(true);

        if (show) {
            return (
                <Alert className="alert_text" variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading >Oh snap!! Site Under Maintainace WorK!</Alert.Heading>
                    <p>
                        we are working on admin portal and backend work. we will be back as soon as possiable.
                    </p>
                </Alert>
            )
        }
    }

    return (
        <div>
            {AlertDismissibleExample()}
            <Navbar />
            <div>
                <div className="home__image">
                    <Slider />
                </div>
                <div >
                    <HomeContent />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home