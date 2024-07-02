import React from 'react'

function CarPic(props) {
    return (
        <div className="CarPic">
            <img src={props.imgpath.carpath} alt="" />
        </div>
    )
}

function SuperCar() {

    const car = [{
        id: 1,
        carpath: "https://img.freepik.com/free-photo/sports-car-driving-asphalt-road-night-generative-ai_188544-8052.jpg?ga=GA1.1.500695584.1719586740&semt=ais_user"
    },
    {
        id: 2,
        carpath: "https://img.freepik.com/free-photo/mini-coupe-high-speed-drive-road-with-front-lights_114579-5040.jpg?t=st=1719906667~exp=1719910267~hmac=96e24aa15b76482308d94ce961cc4f451d9efe7a088071ab002289e3dedfdfb5&w=1060"
    }]

    return (
        <div className="SuperCar Main-Margin /// container">
            {
                car.map((item) => {
                    return <CarPic imgpath = {item} />
                })
            }
        </div>
    )
}

export default SuperCar