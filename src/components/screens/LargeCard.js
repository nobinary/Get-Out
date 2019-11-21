import React from 'react'
import data from './../../mockdata.json'
import './LargeCard.css'


const LargeCard = (props) => {
    const post = data.filter((post, index) => (
        post.RecAreaID === props.match.params.card_id
    ))
    // console.log(data)
    // console.log(props.match.params.card_id)
    
    // const getActivities = () => {
    //     for (let i=0; post[0]['ACTIVITY'].lenght; i++) {

    //     }
    // }

    return (
        <div className="LargeCard_container">
            {console.log(post)}
            <img className="card_photo" src={post[0]['MEDIA'][0] ? post[0]['MEDIA'][0].URL : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg/660px-Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg"} 
            alt="adventure" />
            <p>{post[0].RecAreaName}</p>
            <p>{post[0]['ACTIVITY'][0].ActivityName ? post[0]['ACTIVITY'][0].ActivityName : ''} </p>
        </div>
    )
}

export default LargeCard

            // idee={item.RecAreaID}
            // name={item.RecAreaName}
            // imgUrl={item['MEDIA'][0] ? item['MEDIA'][0].URL : "#"}
            // history={history}