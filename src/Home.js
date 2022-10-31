import React from 'react'
import './Home.css'
import Card from './Card'
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

// import { LeftArrow, RightArrow } from "./arrows";
//ES7 snippets to do 'rfce'

function Home() {
    return (
        <div class="text-center sm:text-left">
        <div className='home'>


            <div className='flex ml-16 mt-4 font-bold text-3xl'>
                <h1>New this Week</h1>
            </div>
            <div className='home__section ml-8 '>
                {/* Picture1 */}
                <p className='absolute text-white mt-6 ml-4 text-xs' >Collections</p>
                <p className='absolute text-white mt-10 ml-4 text-2xl ' >Most people around <br /> the world</p>
                <button className='absolute px-5 text-sm py-2 m-4 mt-64 bg-white border border-gray-100 rounded-lg	'>Show all</button>

                <img className='mr-4 cursor-pointer'
                    src="https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=2560"
                />

                {/* Picture2 */}
                <div> <p className='absolute text-white mt-6 ml-4 text-xs' >Collections</p>
                    <p className='absolute text-white mt-10 ml-4 text-2xl ' >Great for team <br /> bulding</p>
                    <button className='absolute px-5 text-sm py-2 m-4 mt-64 bg-white border border-gray-100 rounded-lg	'>Show all</button>

                </div>
                <img className='mr-4 cursor-pointer'
                    src="https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=2560"
                />

                {/* Picture3 */}
                <div className='inline'> <p className='absolute text-white mt-6 ml-4 text-xs' >Collections</p>
                    <p className=' absolute text-white mt-10 ml-4 text-2xl ' >Fun for the family</p>
                    <button className='absolute px-5 text-sm py-2 m-4 mt-64 bg-white border border-gray-100 rounded-lg	'>Show all</button>

                </div>
                <img className='mr-4 cursor-pointer'
                    src="https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=2560"

                />

            </div>
<div className='home__section ml-24 mr-24'>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Dates</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Group Size</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>More Filter</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Great for groups</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Family-friendly</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Animals</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Arts&writing</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Baking</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Cooking</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Dance</button>
    <button className='px-3 py-1 m-2 rounded-2xl bg-gray-100 items-center '>Drinks</button>
    
   

    
     
</div>
<div>
    <Card/>
</div>

 



        </div>
        </div>
    )
}

export default Home
