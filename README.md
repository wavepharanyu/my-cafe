# My Cafe Website
เป็น website จำลองการสั่งซื้อสินค้า และมีระบบจัดการสินค้า และรายการสั่งซื้อเบื้องต้น

## Getting Started ##
หลังจากทำการ git clone มาเรียบร้อยแล้ว จะทำการใช้ 2 terminal สำหรับรันในส่วนของ Frontend และ Backend 
โดยจะเปลี่ยน Directory ไปยังโฟลเดอร์ client 
```
cd client
```
และอีก terminal จะเปลี่ยน Directory ไปยังโฟลเดอร์ server
```
cd server
```

ทำการดาวน์โหลดและติดตั้งแพ็กเกจทั้งหมดของ client และ server
```
npm install
```

ทำการรัน client และ server
```
npm start
```
## Built With ##
* ![React][React.js]
* ![MongoDB][MongoDB]
* ![NodeJS][NodeJS]
* ![Express.js][Express.js]
* ![Bootstrap][Bootstrap.com]
* ![jsonwebtoken][jsonwebtoken]
* ![sweetalert2][sweetalert2]

## Home Page (/) ##
เป็นหน้าที่แสดงเมนูอาหาร สามารถกดเพิ่มเข้าตะกร้า และกดยืนยัน order ได้
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/wavezzz/my-cafe/assets/30255415/55c98678-e4d1-4ea6-95ef-349bfe02e0a8)

## Login Page (/login) ##
หน้า Login เพื่อทำการเข้าสู่ระบบ สำหรับจัดการสินค้า และคำสั่งซื้อ เมื่อ login สำเร็จจะได้ token ที่เอาไว้เพื่อทำการเรียกใช้งาน API จัดการสินค้า
<br/>
**(username อะไรก็ได้ / password: admin)
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
![image](https://github.com/wavezzz/my-cafe/assets/30255415/a20e2cfc-37d1-4612-9c67-aa13a0345742)

## Products Page (/products) ##
หน้า Products สำหรับจัดการสินค้า โดยจะสามารถเพิ่ม ลบ และแก้ไขรายละเอียดสินค้าต่างๆได้
<br/>
&nbsp;&nbsp;
<br/>

![image](https://github.com/wavezzz/my-cafe/assets/30255415/e861f8f5-611e-4886-975d-4866fec20db3)

## Orders Page (/orders) ##
หน้า Orders สำหรับจัดการคำสั่งซื้อ โดยจะสามารถลบ คำสั่งซื้อต่างๆได้
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/wavezzz/my-cafe/assets/30255415/3d4ce543-401e-4829-8350-b96bdfc06bbd)



[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[NodeJS]: https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&logo=node.js&logoColor=white
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[jsonwebtoken]: https://img.shields.io/badge/jsonwebtoken-007acc?style=for-the-badge
[sweetalert2]: https://img.shields.io/badge/sweetalert2-CC6699?style=for-the-badge&logoColor=white
