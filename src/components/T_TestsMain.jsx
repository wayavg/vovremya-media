import React, { useEffect, useState } from "react";
import { getData } from "../javascripts/airtable.js";

import O_Testcard from "./O_Testcard.jsx";

export default function T_TestsMain() {

    const [dataPosts, setDataPosts] = useState([])

    useEffect(() => {
        getData('test').then(setDataPosts)
    }, [])

    console.log(dataPosts)

    return (
        <section className='tests-cards'>
            <O_Testcard/>
        </section>
    )
}



// export default function T_TestsMain () {

//     const [dataPosts, setDataPosts] = useState([])

//     //Данные получили
//     useEffect(() => {
//         getData().then(setDataPosts)
//     }, [])

//     //Данные отсортировали по дате
//     dataPosts.sort((a,b) => new Date(b.date) - new Date(a.date));

//     function postPreview () {
//         const postPublic = []
//         dataPosts.forEach((post) => {
//             if (post.type == 'Article' && postPublic.length < 2) {
//                 postPublic.push(post);
//             }
//         })

//         if (postPublic.length > 0) {
//             return postPublic.map((post) => (
//                 <a key={post.id} href={post.link} className="article-card-link">
//                     <article className="article-card">
//                         <div className="article-image">
//                             {Array.isArray(post.image) ? (<img src={post.image[0].url} />) : null}
//                             <div className="article-tags">
//                                 {
//                                     Array.isArray(post.tags) && post.tags.length > 0 ? post.tags.map((tag, index) => (
//                                         <A_Text key={index} text={tag} type={'span'} classprop={'article-tag'} />
//                                     )) : null
//                                 }
//                             </div>
//                         </div>
//                         <div className="article-body">
//                             <A_Text text={post.title} type={'h3'} classprop={'article-title'} />
//                             <A_Text text={post.daterus} type={'div'} classprop={'article-date'} />
//                         </div>
//                     </article>
//                 </a>
//             ))
//         }
//     }

//     return (
//         <section className="section-articles" id="статьи">
//             <div className="articles-inner">
//                 <h2 className="articles-heading">читай наши статьи о чае</h2>
//                 <div className="articles-link-wrapper">
//                     <a href="articles.html" className="articles-link-all">читать все →</a>
//                 </div>
//                 <div className="articles-grid">
//                     { postPreview() }
//                 </div>
//             </div>
//         </section>
//     )
// }