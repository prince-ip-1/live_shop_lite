import React from 'react'
import TitleLayout1 from './InnerComponent/TitleLayout1'
import Post from './InnerComponent/Post';
import product from '../../assests/img/banner/cam.png'

function LatestPost() {
    return (
        <div className='latest_posts mb-[140px]'>
            <div className='container mx-auto'>

                <TitleLayout1 title="Latest Posts" />

                <div className='flex gap-[1rem] mt-[60px]'>

                    <Post
                        postTitle="5 Must-Have Gadgets for the Modern Home"
                        postExcerpt="Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadgets"
                        postImg={product}
                        postCategory={['Gadgets', 'Tech']}
                    />
                    <Post
                        postTitle="Eco-Friendly Innovations Making a Difference"
                        postExcerpt="Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative eco-friendly technologies revolutionizing various industries, from renewable energy solutions to recyclable electronics. Discover how these advancements are paving the way for a more sustainable future."
                        postImg={product}
                        postCategory={['Phone']}
                    />
                    <Post
                        postTitle="The Future of Wearable Tech: Trends to Watch"
                        postExcerpt="Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology. Explore the latest trends, from health monitoring devices to fashion-forward wearables, and learn how these advancements are shaping the future of personal technology"
                        postImg={product}
                        postCategory={['Digital Watch', 'Tech']}
                    />

                </div>

            </div>
        </div>
    )
}

export default LatestPost