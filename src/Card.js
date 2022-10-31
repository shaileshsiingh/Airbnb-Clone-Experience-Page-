import React, { Component } from "react";
import Slider from "react-slick";



export default class Card extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
      <div className="mr-24 ml-24">

        <h2 className="font-bold text-xl mb-4 ml-12"> Top Sellers </h2>
        <Slider {...settings}>
            
          <div className="px-2 py-2">
            <img className="object-cover  " src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=240" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2422459-media_library/original/8262d6c7-f0dc-45f0-9610-53f6577cc380.jpeg?im_w=320" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1692296-media_library/original/052772ea-d821-4d3b-891c-35bef67ede0c.jpeg?im_w=240" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/ca228931-6da0-4f13-96ec-a4079eaeb6c1.jpg?im_w=720" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1674019-poster/original/661972cb-2d95-4614-a6e8-a5099ff390db.jpeg?im_w=720" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1891122-media_library/original/2dc36d8d-cb1e-4817-ac1c-a5382981fc8a.jpeg?im_w=320" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2533946-media_library/original/752efa36-eced-4845-83d8-734887ee5b66.jpeg?im_w=320" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-3022220-media_library/original/e7bd26ca-bf79-401d-acc7-ad40633b4c29.jpeg?im_w=320" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1672940-media_library/original/abcf8a18-f675-472e-b50c-82672ff20187.jpg?im_w=320" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1661135-poster/original/027394e3-d502-4cb8-9f7f-9a88f41551ba.jpeg?im_w=320" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1610894-poster/original/437c46e2-33d8-4b5c-a6a4-84d6642b2fcc.jpg?im_w=320" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          <div className="px-2 py-2">
            <img className="object-cover mr-2" src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-1658926-poster/original/57e5f8dc-f0fa-4028-89d9-ed9d0e7a92b7.jpeg?im_w=320" alt="" />
            <h3>Murder Mystery Escape Room Game-Perfect</h3>
            <h3 className="font-bold">From Rs1,304/person</h3>
          </div>
          
          
        </Slider>
      </div>
      </div>
    );
  }
}