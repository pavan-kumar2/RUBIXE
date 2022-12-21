import React from 'react'
import './body.css'

export const Body = () => {
    return (
        <div className='body'>
            <div>
                <div className='body-img-1'>
                    <img src='https://rubixe.com/img/rubixe-home-banner.jpg' alt='body-img-1' />
                </div>
                <div className='body-text-1'>
                    <h1>TECH FOR TEENS</h1>
                    <h5>CARVING FUTURE <br /> TECHNOLOGY PROFESSIONALS <br /> OUT OF YOUNG MINDS</h5>
                </div>
            </div>
            <div className='body-2'>
                <div className='body-text-2'>
                    <h2>WHO WE ARE</h2>
                    <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
                    <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>
                </div>
                <div className='body-img-2'>
                    <img src='https://rubixe.com/assets/img/home/consulting.jpg' alt='body-img-2' />
                </div>
            </div>

            <div className='body-3'>
                <div className='body-text-3'>
                    <h2>WHERE WE ARE STARTED</h2>
                    <p>Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.</p>

                </div>
            </div>

            <div className='body-4'>
                <div className='body-text-4'>
                    <h2 style={{ 'margin': "0px 0px 10px" }}>TECH FOR TEENS - A RUBIXE &#174; INITIATIVE</h2>
                    <img src="https://rubixe.com/assets/img/home/main.jpg" alt='img-4' />
                </div>
            </div>

            <div className='form-body'>
                <div className='left'>
                    <h2>GET IN TOUCH</h2>
                    <p>Please complete the form and we will <br /> get back to you.</p>
                </div>

                <div className='right'>
                    <form>
                        <label for='name'>Name*</label>
                        <input type="text" id='name' placeholder='Enter Your Name'></input>

                        <label for='email'>Email*</label>
                        <input type="email" id='email' placeholder='Enter Your Email'></input>

                        <label for='phone'>Mobile Number*</label>
                        <input type="number" id='phone' placeholder='Enter Your Mobile Number'></input>

                        <button type="submit" className='reg-btn'>Register Now</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
