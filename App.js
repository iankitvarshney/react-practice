import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw"
    />
  </a>
);

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "546799",
        "name": "Wat-a-Burger! - India ka Burger",
        "uuid": "f5cdaf1d-8527-4cad-a996-1690cefc4b34",
        "city": "22",
        "area": "Rajpur",
        "totalRatingsString": "",
        "cloudinaryImageId": "mvl9tkihegusushbs1gl",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Continental",
          "American",
          "Beverages",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 84,
        "minDeliveryTime": 84,
        "maxDeliveryTime": 84,
        "slaString": "84 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "wat-a-burger!-india-ka-burger-hathibarkala-hathibarkala",
          "city": "Dehradun"
        },
        "cityState": "22",
        "address": "",
        "locality": "Rajpur Road",
        "parentId": 384458,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5200,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7871045~p=1~eid=00000189-ef0d-b60e-34c7-6bd4000b0151~srvts=1691932800526~83637",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "8 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=546799&source=collection&query=Burger",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 84,
          "minDeliveryTime": 84,
          "maxDeliveryTime": 84,
          "lastMileTravel": 0,
          "lastMileDistance": 8,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.9",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "408505",
        "name": "KFC",
        "uuid": "0dd1e681-54d2-458e-8b24-52cc995ce165",
        "city": "22",
        "area": "Morowala",
        "totalRatingsString": "",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "kfc-khasara-patel-nagar",
          "city": "Dehradun"
        },
        "cityState": "22",
        "address": "",
        "locality": "Sewla Kalan",
        "parentId": 547,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=408505&source=collection&query=Burger",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 0,
          "lastMileDistance": 1,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "86369",
        "name": "Burger Singh (Big Punjabi Burgers)",
        "uuid": "d56f3958-265c-4a3d-abf2-5ebf09957ff4",
        "city": "22",
        "area": "Balliwala",
        "totalRatingsString": "",
        "cloudinaryImageId": "abr0wblbm1le41tdsz3n",
        "cuisines": [
          "Snacks",
          "Indian",
          "American",
          "Beverages",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "burger-singh-vikas-mall-ballupur",
          "city": "Dehradun"
        },
        "cityState": "22",
        "address": "",
        "locality": "Vikas Cine Mall",
        "parentId": 375065,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=86369&source=collection&query=Burger",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 0,
          "lastMileDistance": 4,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "519289",
        "name": "Burgrill - The Win Win Burger",
        "uuid": "9e93e87d-d5ab-4b3a-8291-641aa9fdcea5",
        "city": "22",
        "area": "Vikas nagar",
        "totalRatingsString": "",
        "cloudinaryImageId": "vpv61td83olftdc8g1ym",
        "cuisines": [
          "Burgers",
          "Healthy Food",
          "American",
          "Salads",
          "Beverages",
          "Desserts",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "slaString": "39 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "burgrill---the-win-win-burger-ballupur-ballupur",
          "city": "Dehradun"
        },
        "cityState": "22",
        "address": "",
        "locality": "Vikas nagar",
        "parentId": 302366,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=519289&source=collection&query=Burger",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 39,
          "minDeliveryTime": 39,
          "maxDeliveryTime": 39,
          "lastMileTravel": 0,
          "lastMileDistance": 4,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "311806",
        "name": "Burger King",
        "uuid": "0d042d3b-e5d8-4179-893f-061f08e4d478",
        "city": "22",
        "area": "Ballupur",
        "totalRatingsString": "",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 71,
        "minDeliveryTime": 71,
        "maxDeliveryTime": 71,
        "slaString": "71 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "burger-king-chakrata-road-ballupur",
          "city": "Dehradun"
        },
        "cityState": "22",
        "address": "",
        "locality": "Chakrata Road",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            
          ],
          "descriptionList": [
            
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 4200,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.3 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=311806&source=collection&query=Burger",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 71,
          "minDeliveryTime": 71,
          "maxDeliveryTime": 71,
          "lastMileTravel": 0,
          "lastMileDistance": 6.3,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
  {
    "cardType": "restaurant",
    "layoutAlignmentType": "VERTICAL",
    "data": {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "230090",
        "name": "Special Stuff Patties",
        "uuid": "f75cbba0-c8a1-4f35-be1b-691bf8460ca6",
        "city": "22",
        "area": "Prem Nagar",
        "totalRatingsString": "",
        "cloudinaryImageId": "pafjybenmgs8ozbt6mdr",
        "cuisines": [
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 54,
        "minDeliveryTime": 54,
        "maxDeliveryTime": 54,
        "slaString": "54 MINS",
        "lastMileTravel": 0,
        "slugs": {
          "restaurant": "special-stuff-patties-patel-nagar-patel-nagar",
          "city": "Dehradun"
        },
        "cityState": "22",
        "address": "",
        "locality": "Chakrata Road",
        "parentId": 191893,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 5200,
              "message": ""
            },
            {
              "name": "BASE_TIME",
              "fee": 0,
              "message": ""
            },
            {
              "name": "ANCILLARY_SURGE_FEE",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5200,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5200",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "9.9 kms",
        "hasSurge": false,
        "cta": {
          "link": "swiggy://menu?restaurant_id=230090&source=collection&query=Burger",
          "type": "DEEPLINK",
          "text": "RESTAURANT_MENU"
        },
        "sla": {
          "restaurantId": "",
          "deliveryTime": 54,
          "minDeliveryTime": 54,
          "maxDeliveryTime": 54,
          "lastMileTravel": 0,
          "lastMileDistance": 9.9,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 0,
        "new": false
      },
      "subtype": "basic"
    },
    "parentWidget": false
  },
];

const RestaurantCard = ({name, cuisines, avgRating, cloudinaryImageId}) => {
  return (
    <div className="card">
      <img 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restaurant-list">
      {
        restaurantList.map(restaurant => {
          return (
            <RestaurantCard key={restaurant.data.data.id} {...restaurant.data.data}/>
          );
        })
      }
    </div>
  );
};

const Footer = () => {
  return (
    <h4>Footer</h4>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);