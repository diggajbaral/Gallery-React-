import React from 'react'

function Photo(props) {
    return (
        <div className="Photo">
            <img src={props.imgpath.path} alt="" />
        </div>
    )
}

function Gallery() {

    const gallery = [{
        id: 1,
        path: "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/402927707_122111467508102296_5606763697524310195_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AznE-JCS9joQ7kNvgH5nZYI&_nc_ht=scontent.fktm1-1.fna&oh=00_AYBo1g7lOmL80bPOvYvg0NmO67djqb08_04c4vVm7DPTAA&oe=668982E4"
    },
    {
        id: 2,
        path: "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
    },
    {
        id: 3,
        path: "https://scontent.fktm1-1.fna.fbcdn.net/v/t39.30808-6/402927707_122111467508102296_5606763697524310195_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=AznE-JCS9joQ7kNvgH5nZYI&_nc_ht=scontent.fktm1-1.fna&oh=00_AYBo1g7lOmL80bPOvYvg0NmO67djqb08_04c4vVm7DPTAA&oe=668982E4"
    },
    {
        id: 4,
        path: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
    },
    {
        id: 5,
        path: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
    },
    {
        id: 5,
        path: "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU"
    }

    ]

    return (
        <div className="Gallery Main-Margin /// container">
            {
                gallery.map((item) => (
                    <Photo imgpath={item} />
                ))
            }
        </div>
    )
}

export default Gallery