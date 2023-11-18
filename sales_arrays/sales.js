"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

//Variables for Region sales are assigned here
var Region1_Sales = 0,Region2_Sales = 0,Region3_Sales = 0,Region4_Sales = 0,Region5_Sales = 0;

//Using for loop, calculating each region sales value
for (var i=0;i<region1.length;i++)
{
    Region1_Sales+=region1[i];
    Region2_Sales+=region2[i];
    Region3_Sales+=region3[i];
    Region4_Sales+=region4[i];
    Region5_Sales+=region5[i];

}

//Displaying the sales of Each Quarter, Each Region and Total Sales
let html =
`<h2> Sales by Quarter</h2>
Q1: $${region1[0]+region2[0]+region3[0]+region4[0]+region5[0]}<br>
Q2: $${region1[1]+region2[1]+region3[1]+region4[1]+region5[1]}<br>
Q3: $${region1[2]+region2[2]+region3[2]+region4[2]+region5[2]}<br>
Q4: $${region1[3]+region2[3]+region3[3]+region4[3]+region5[3]}<br>


<h2> Sales by Region</h2>
Region 1 : $${Region1_Sales}<br>
Region 2 : $${Region2_Sales}<br>
Region 3 : $${Region3_Sales}<br>
Region 4 : $${Region4_Sales}<br>
Region 5 : $${Region5_Sales}<br>

<h2>Total Sales</h2>
$${Region1_Sales+Region2_Sales+Region3_Sales+Region4_Sales+Region5_Sales}`

document.write(html);
