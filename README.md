
 # Order Matching System
This is an order matching system web application that allows users to place orders, view pending orders, and see completed orders with matched prices. The application also includes dynamic line charts that display the matching order price over time.




<table>
  <tr>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970518/desktop-1_valny0.png"/></td>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970516/mobile_13_ixhesh.png"/></td>
  </tr>
</table>








<p align="center" width="100%">
<table>
  <tr>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970518/mobile_10_xkgsec.png"/></td>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970516/mobile_16_ee5vjk.png"/></td>
  </tr>
</table>
</p>




<table>
  <tr>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970518/mobile_11_cfx7fa.png"/></td>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970516/mobile_17_b1xiu0.png"/></td>
  </tr>
</table>



<table>
  <tr>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970518/mobile_12_wdaki4.png"/></td>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970516/mobile_18_kp2k31.png"/></td>
  </tr>
</table>


<table>
  <tr>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970516/mobile_18_kp2k31.png"/></td>
    <td valign="top"><img src="https://res.cloudinary.com/dq674z2lp/image/upload/v1682970516/mobile_15_u9so1h.png"/></td>
  </tr>
</table>


# Tech Stack
 1.React 
 2.Redux
 3.MongoDb
 4.Express
 5.Mongoose
 6.Chart.js
 7.Chakra-UI
 8.Node.js

 # Getting Started

 # Deployed Link :https://order-matching-system-omega.vercel.app
 OR

 1. Frontend End
 To use the application, you can follow these steps:

 Clone the repository to your local machine.
 Change dir to frontend by command "cd frontend"
 Install any necessary dependencies using npm install.
 Start the application using npm start.
 Access the application at http://localhost:8080 .

 2.Backend 
  Change dir to backend by command "cd backend"
  create a .env file with key "MONGO_URL" which contains your MongoDB Atlas URL and another key "PORT" of your choice.
   Install any necessary dependencies using npm install.
   And run "npm run server" to start the server


# Features
Pending Order Table: Displays a list of pending orders with order ID, buyer, seller, quantity, price, and status columns.
Completed Order Table: Displays a list of completed orders with order ID, buyer, seller, quantity, price, and date completed columns.
New Order Form: Allows users to place a new order by selecting a buyer and seller, entering the quantity and price, and submitting the form.
Dynamic Line Charts: Displays a line chart that shows the matching order price over time. The earliest matched order will have the last point in the chart.
Dark Mode 
Responsive Design: Implement a responsive design that adjusts to different screen sizes and devices.
Loader Icon: Display a loader icon while placing an order to indicate that the application is processing the request.
Order Matching System: Take out all the possible cases in order matching system and create back-end functions accordingly.

