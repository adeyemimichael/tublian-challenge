import React from 'react';

function Nav() {
  return (
   // this is the starting of the website so help me God and i want to finish tonight Aall things being equAl
<div className="w-auto h-auto bg-gray-400 font-serif font-medium m-0  z-40 relative">
{/* nav div */}
<div className="w-screen h-auto md:w-[15%] md:h-screen flex flex-col float-start border-r-4 shadow-sm ">
  {/* logo div */}
<div className="  flex-col md:flex-col md:flex  md:items-center justify-center items-center md:justify-center w-100% h-auto p-2">
<svg width="55" height="21" viewBox="0 0 55 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="   size-10 md:size-16">
<path d="M2 1V18.5H18.9014" stroke="#0FA44A" stroke-width="4"/>
<path d="M14.8311 2.25L23.2818 8.91667M23.2818 8.91667L32.155 2.25M23.2818 8.91667V19.75" stroke="#0FA44A" stroke-width="4"/>
<path d="M36.3801 2.875H45.2534M54.1266 2.875H45.2534M45.2534 2.875V20.375" stroke="#0FA44A" stroke-width="4"/>
</svg>

</div>
{/* dashboard section the green part */}
<div className="div-dash top-[120px] w-auto cursor-pointer hover:bg-[#36955c] sm:w-[206px] h-[45px] bg-[#0FA44A] text-white font-extralight flex md:flex-row p-2 
" >
<div className=" flex md:flex-row  items-center justify-center  cursor-pointer hover:bg-[#36955c]">
  <div className="pr-2 pl-4">
<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
<path d="M3.5 13H11.5V3H3.5V13ZM3.5 21H11.5V15H3.5V21ZM13.5 21H21.5V11H13.5V21ZM13.5 3V9H21.5V3H13.5Z" fill="white"/>
</svg>
</div>
<h1 className="md:font-thin font-sans font-extralight md:text-center md:text-[12px]  text-white pr-2 ">Dashboard</h1>
</div>

</div>
{/* other section of the dashboard div which entails the settings and the other functions of the website */}
<div className='flex h-screen '>
  <ul className='flex flex-row md:flex-col p-4  justify-between'>
    <li className=' font-rubik font-normal p-2 flex flex-row cursor-pointer '> <span className='pr-2 hover:animate-bounce'><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 20C0.734784 20 0.48043 19.8946 0.292893 19.7071C0.105357 19.5196 0 19.2652 0 19V11C0 10.7348 0.105357 10.4804 0.292893 10.2929C0.48043 10.1054 0.734784 10 1 10C1.26522 10 1.51957 10.1054 1.70711 10.2929C1.89464 10.4804 2 10.7348 2 11V19C2 19.2652 1.89464 19.5196 1.70711 19.7071C1.51957 19.8946 1.26522 20 1 20ZM6 20C5.73478 20 5.48043 19.8946 5.29289 19.7071C5.10536 19.5196 5 19.2652 5 19V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0C6.26522 0 6.51957 0.105357 6.70711 0.292893C6.89464 0.48043 7 0.734784 7 1V19C7 19.2652 6.89464 19.5196 6.70711 19.7071C6.51957 19.8946 6.26522 20 6 20ZM11 20C10.7348 20 10.4804 19.8946 10.2929 19.7071C10.1054 19.5196 10 19.2652 10 19V7C10 6.73478 10.1054 6.48043 10.2929 6.29289C10.4804 6.10536 10.7348 6 11 6C11.2652 6 11.5196 6.10536 11.7071 6.29289C11.8946 6.48043 12 6.73478 12 7V19C12 19.2652 11.8946 19.5196 11.7071 19.7071C11.5196 19.8946 11.2652 20 11 20ZM16 20C15.7348 20 15.4804 19.8946 15.2929 19.7071C15.1054 19.5196 15 19.2652 15 19V15C15 14.7348 15.1054 14.4804 15.2929 14.2929C15.4804 14.1054 15.7348 14 16 14C16.2652 14 16.5196 14.1054 16.7071 14.2929C16.8946 14.4804 17 14.7348 17 15V19C17 19.2652 16.8946 19.5196 16.7071 19.7071C16.5196 19.8946 16.2652 20 16 20Z" fill="#323232"/>
</svg>
</span>  Analytics</li>
    <li className=' font-rubik font-normal p-2 flex flex-row cursor-pointer'> <span className='pr-2 hover:animate-bounce'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 4.49999C4.5 3.70434 4.81607 2.94128 5.37868 2.37867C5.94129 1.81606 6.70435 1.49999 7.5 1.49999C8.29565 1.49999 9.05871 1.81606 9.62132 2.37867C10.1839 2.94128 10.5 3.70434 10.5 4.49999C10.5 5.29564 10.1839 6.0587 9.62132 6.62131C9.05871 7.18392 8.29565 7.49999 7.5 7.49999C6.70435 7.49999 5.94129 7.18392 5.37868 6.62131C4.81607 6.0587 4.5 5.29564 4.5 4.49999ZM7.5 2.99999C7.10218 2.99999 6.72064 3.15802 6.43934 3.43933C6.15804 3.72063 6 4.10216 6 4.49999C6 4.89781 6.15804 5.27934 6.43934 5.56065C6.72064 5.84195 7.10218 5.99999 7.5 5.99999C7.89782 5.99999 8.27936 5.84195 8.56066 5.56065C8.84196 5.27934 9 4.89781 9 4.49999C9 4.10216 8.84196 3.72063 8.56066 3.43933C8.27936 3.15802 7.89782 2.99999 7.5 2.99999ZM14.6685 6.87599C14.3542 6.63628 14.0904 6.33683 13.8923 5.99485C13.6941 5.65288 13.5655 5.27511 13.5137 4.88326C13.462 4.49142 13.4882 4.09321 13.5909 3.71153C13.6935 3.32984 13.8706 2.97221 14.1119 2.65917C14.3532 2.34613 14.654 2.08386 14.997 1.88742C15.3399 1.69099 15.7184 1.56427 16.1105 1.51453C16.5026 1.4648 16.9006 1.49304 17.2818 1.59763C17.663 1.70222 18.0197 1.8811 18.3315 2.12399C18.9454 2.61509 19.3421 3.32758 19.436 4.10814C19.53 4.8887 19.3138 5.67496 18.8339 6.29773C18.3541 6.9205 17.6489 7.33002 16.8702 7.43816C16.0915 7.5463 15.2999 7.34443 14.6685 6.87599ZM16.5 2.99999C16.1022 2.99999 15.7206 3.15802 15.4393 3.43933C15.158 3.72063 15 4.10216 15 4.49999C15 4.89781 15.158 5.27934 15.4393 5.56065C15.7206 5.84195 16.1022 5.99999 16.5 5.99999C16.8978 5.99999 17.2794 5.84195 17.5607 5.56065C17.842 5.27934 18 4.89781 18 4.49999C18 4.10216 17.842 3.72063 17.5607 3.43933C17.2794 3.15802 16.8978 2.99999 16.5 2.99999ZM3.75 8.99999H7.755C7.59 9.46949 7.5 9.97499 7.5 10.5H3.75C3.55109 10.5 3.36032 10.579 3.21967 10.7197C3.07902 10.8603 3 11.0511 3 11.25C3 12.4755 3.4875 13.3845 4.257 14.0025C4.611 14.2875 5.0355 14.517 5.5155 14.685C5.16301 15.0597 4.89138 15.5028 4.7175 15.987C4.214 15.7847 3.74257 15.5104 3.318 15.1725C2.19 14.265 1.5 12.924 1.5 11.25C1.5 10.6532 1.73705 10.081 2.15901 9.659C2.58097 9.23704 3.15326 8.99999 3.75 8.99999ZM9.402 8.99999C9.00418 9.68942 8.89652 10.5086 9.10272 11.2774C9.30891 12.0463 9.81207 12.7017 10.5015 13.0995C11.1909 13.4973 12.0102 13.605 12.779 13.3988C13.5478 13.1926 14.2032 12.6894 14.601 12C14.9988 11.3106 15.1065 10.4913 14.9003 9.72252C14.6941 8.95372 14.1909 8.29831 13.5015 7.90049C12.8121 7.50266 11.9928 7.39501 11.224 7.6012C10.4552 7.8074 9.79982 8.31056 9.402 8.99999ZM11.664 9.03749C11.8838 8.98784 12.1119 8.98819 12.3315 9.03851C12.5511 9.08883 12.7567 9.18784 12.9329 9.32822C13.1091 9.46861 13.2516 9.64678 13.3497 9.84959C13.4479 10.0524 13.4992 10.2747 13.5 10.5C13.4999 10.7822 13.4201 11.0587 13.27 11.2976C13.1198 11.5366 12.9052 11.7283 12.6509 11.8508C12.3966 11.9732 12.113 12.0215 11.8325 11.99C11.5521 11.9585 11.2862 11.8485 11.0654 11.6726C10.8447 11.4968 10.678 11.2622 10.5846 10.9959C10.4911 10.7296 10.4747 10.4423 10.5373 10.1671C10.5998 9.89188 10.7387 9.63989 10.938 9.44006C11.1373 9.24024 11.3889 9.10071 11.664 9.03749ZM19.743 14.0025C19.389 14.2875 18.9645 14.517 18.4845 14.685C18.8364 15.0598 19.1076 15.503 19.281 15.987C19.791 15.7785 20.2635 15.507 20.682 15.1725C21.81 14.265 22.5 12.924 22.5 11.25C22.5 10.6532 22.2629 10.081 21.841 9.659C21.419 9.23704 20.8467 8.99999 20.25 8.99999H16.245C16.41 9.46949 16.5 9.97499 16.5 10.5H20.25C20.4489 10.5 20.6397 10.579 20.7803 10.7197C20.921 10.8603 21 11.0511 21 11.25C21 12.4755 20.5125 13.3845 19.743 14.0025ZM15.75 15C16.3467 15 16.919 15.237 17.341 15.659C17.7629 16.081 18 16.6532 18 17.25C18 18.924 17.3115 20.265 16.182 21.1725C15.0705 22.065 13.5795 22.5 12 22.5C10.4205 22.5 8.9295 22.065 7.818 21.1725C6.69 20.265 6 18.924 6 17.25C5.99921 16.9543 6.05687 16.6614 6.16966 16.388C6.28245 16.1147 6.44815 15.8663 6.65724 15.6572C6.86633 15.4481 7.11469 15.2824 7.38803 15.1696C7.66137 15.0569 7.9543 14.9992 8.25 15H15.75ZM15.75 16.5H8.25C8.05109 16.5 7.86032 16.579 7.71967 16.7197C7.57902 16.8603 7.5 17.0511 7.5 17.25C7.5 18.4755 7.9875 19.3845 8.757 20.0025C9.546 20.6355 10.68 21 12 21C13.32 21 14.454 20.6355 15.243 20.0025C16.0125 19.3845 16.5 18.4755 16.5 17.25C16.5 17.0511 16.421 16.8603 16.2803 16.7197C16.1397 16.579 15.9489 16.5 15.75 16.5Z" fill="#323232"/>
</svg> 
</span> Communities</li>
    <li className=' font-rubik font-normal p-2 flex flex-row hover:animate-bounce cursor-pointer'> <span className='pr-2 hover:animate-bounce'> <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.9072 15.5385V16.2308C11.9072 16.9652 11.6009 17.6696 11.0558 18.1889C10.5107 18.7082 9.77143 19 9.00054 19C8.22966 19 7.49035 18.7082 6.94525 18.1889C6.40015 17.6696 6.09392 16.9652 6.09392 16.2308V15.5385M16.7976 14.1292C15.6313 12.7692 14.8079 12.0769 14.8079 8.32764C14.8079 4.89423 12.9676 3.67101 11.453 3.07692C11.2518 2.99817 11.0624 2.81731 11.0011 2.62043C10.7354 1.75894 9.99061 1 9.00054 1C8.01047 1 7.2652 1.75937 7.00224 2.6213C6.94093 2.82034 6.75154 2.99817 6.55035 3.07692C5.03391 3.67188 3.19547 4.89077 3.19547 8.32764C3.19319 12.0769 2.3698 12.7692 1.20352 14.1292C0.720291 14.6925 1.14357 15.5385 1.98876 15.5385H16.0169C16.8575 15.5385 17.2781 14.69 16.7976 14.1292Z" stroke="#323232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg> 
</span> Notifications</li>
    <li className=' font-rubik font-normal p-2 flex flex-row cursor-pointer'> <span className='pr-2 hover:animate-bounce'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17V2H12L14 4H23V17H5ZM7 15H21V6H13.175L11.175 4H7V15ZM1 21V6H3V19H20V21H1ZM9 13H19L15.625 8.5L13 12L11.375 9.825L9 13Z" fill="#323232"/>
</svg>
</span>  Medias</li>
    <li className='p-2 flex flex-row font-rubik font-normal cursor-pointer'> <span className='pr-2 hover:animate-bounce'><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 22L12.25 19H12C9.63333 19 7.625 18.175 5.975 16.525C4.325 14.875 3.5 12.8667 3.5 10.5C3.5 8.13333 4.325 6.125 5.975 4.475C7.625 2.825 9.63333 2 12 2C13.1833 2 14.2877 2.22067 15.313 2.662C16.3383 3.10333 17.2383 3.71167 18.013 4.487C18.7877 5.26233 19.3957 6.16233 19.837 7.187C20.2783 8.21167 20.4993 9.316 20.5 10.5C20.5 11.75 20.2957 12.95 19.887 14.1C19.4783 15.25 18.92 16.3167 18.212 17.3C17.504 18.2833 16.6623 19.175 15.687 19.975C14.7117 20.775 13.6493 21.45 12.5 22ZM14.5 18.35C15.6833 17.35 16.646 16.179 17.388 14.837C18.13 13.495 18.5007 12.0493 18.5 10.5C18.5 8.68333 17.8707 7.146 16.612 5.888C15.3533 4.63 13.816 4.00067 12 4C10.1833 4 8.646 4.62933 7.388 5.888C6.13 7.14667 5.50067 8.684 5.5 10.5C5.5 12.3167 6.12933 13.854 7.388 15.112C8.64667 16.37 10.184 16.9993 12 17H14.5V18.35ZM11.975 15.975C12.2583 15.975 12.5 15.875 12.7 15.675C12.9 15.475 13 15.2333 13 14.95C13 14.6667 12.9 14.425 12.7 14.225C12.5 14.025 12.2583 13.925 11.975 13.925C11.6917 13.925 11.45 14.025 11.25 14.225C11.05 14.425 10.95 14.6667 10.95 14.95C10.95 15.2333 11.05 15.475 11.25 15.675C11.45 15.875 11.6917 15.975 11.975 15.975ZM11.25 12.8H12.75C12.75 12.3 12.8 11.95 12.9 11.75C13 11.55 13.3167 11.1833 13.85 10.65C14.15 10.35 14.4 10.025 14.6 9.675C14.8 9.325 14.9 8.95 14.9 8.55C14.9 7.7 14.6123 7.06233 14.037 6.637C13.4617 6.21167 12.7827 5.99933 12 6C11.2667 6 10.65 6.20433 10.15 6.613C9.65 7.02167 9.3 7.51733 9.1 8.1L10.5 8.65C10.5833 8.36667 10.7417 8.08733 10.975 7.812C11.2083 7.53667 11.55 7.39933 12 7.4C12.45 7.4 12.7873 7.525 13.012 7.775C13.2367 8.025 13.3493 8.3 13.35 8.6C13.35 8.88333 13.2667 9.13767 13.1 9.363C12.9333 9.58833 12.7333 9.81733 12.5 10.05C11.9167 10.55 11.5623 10.946 11.437 11.238C11.3117 11.53 11.2493 12.0507 11.25 12.8Z" fill="#323232"/>
</svg>
</span>  Support</li>
    <li className='p-2 flex flex-row   cursor-pointer font-rubik font-normal ' > <span className='pr-2 hover:animate-bounce'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2499 12.57V11.4225L21.6899 10.1625C21.9554 9.92854 22.1296 9.60827 22.1817 9.2583C22.2339 8.90833 22.1606 8.55119 21.9749 8.25L20.2049 5.25C20.0734 5.0222 19.8843 4.83299 19.6566 4.70135C19.4288 4.56971 19.1705 4.50027 18.9074 4.5C18.7444 4.49875 18.5823 4.52408 18.4274 4.575L16.6049 5.19C16.2903 4.98091 15.9621 4.79299 15.6224 4.6275L15.2399 2.7375C15.1714 2.3922 14.9835 2.08203 14.7093 1.86128C14.4351 1.64052 14.0919 1.52325 13.7399 1.53H10.2299C9.87797 1.52325 9.53483 1.64052 9.2606 1.86128C8.98638 2.08203 8.79853 2.3922 8.72995 2.7375L8.34745 4.6275C8.0054 4.79295 7.67467 4.98086 7.35745 5.19L5.57245 4.545C5.41592 4.50422 5.25383 4.48902 5.09245 4.5C4.8294 4.50027 4.57105 4.56971 4.34332 4.70135C4.11558 4.83299 3.92647 5.0222 3.79495 5.25L2.02495 8.25C1.84989 8.55074 1.78483 8.90299 1.84093 9.24642C1.89703 9.58985 2.07079 9.9031 2.33245 10.1325L3.74995 11.43V12.5775L2.33245 13.8375C2.0634 14.0685 1.88489 14.3873 1.82859 14.7375C1.7723 15.0876 1.84187 15.4463 2.02495 15.75L3.79495 18.75C3.92647 18.9778 4.11558 19.167 4.34332 19.2987C4.57105 19.4303 4.8294 19.4997 5.09245 19.5C5.25546 19.5012 5.41758 19.4759 5.57245 19.425L7.39495 18.81C7.7096 19.0191 8.03783 19.207 8.37745 19.3725L8.75995 21.2625C8.82853 21.6078 9.01638 21.918 9.2906 22.1387C9.56483 22.3595 9.90797 22.4767 10.2599 22.47H13.7999C14.1519 22.4767 14.4951 22.3595 14.7693 22.1387C15.0435 21.918 15.2314 21.6078 15.2999 21.2625L15.6824 19.3725C16.0245 19.2071 16.3552 19.0191 16.6724 18.81L18.4874 19.425C18.6423 19.4759 18.8044 19.5012 18.9674 19.5C19.2305 19.4997 19.4888 19.4303 19.7166 19.2987C19.9443 19.167 20.1334 18.9778 20.2649 18.75L21.9749 15.75C22.15 15.4493 22.2151 15.097 22.159 14.7536C22.1029 14.4101 21.9291 14.0969 21.6674 13.8675L20.2499 12.57ZM18.9074 18L16.3349 17.13C15.7327 17.6401 15.0445 18.0388 14.3024 18.3075L13.7699 21H10.2299L9.69745 18.3375C8.96126 18.0612 8.27673 17.6631 7.67245 17.16L5.09245 18L3.32245 15L5.36245 13.2C5.22377 12.4236 5.22377 11.6289 5.36245 10.8525L3.32245 9L5.09245 6L7.66495 6.87C8.26715 6.35992 8.9554 5.96119 9.69745 5.6925L10.2299 3H13.7699L14.3024 5.6625C15.0386 5.93882 15.7232 6.33686 16.3274 6.84L18.9074 6L20.6774 9L18.6374 10.8C18.7761 11.5764 18.7761 12.3711 18.6374 13.1475L20.6774 15L18.9074 18Z" fill="#323232"/>
<path d="M12 16.5C11.11 16.5 10.24 16.2361 9.49994 15.7416C8.75991 15.2471 8.18314 14.5443 7.84254 13.7221C7.50195 12.8998 7.41283 11.995 7.58647 11.1221C7.7601 10.2492 8.18868 9.44736 8.81802 8.81802C9.44736 8.18868 10.2492 7.7601 11.1221 7.58647C11.995 7.41283 12.8998 7.50195 13.7221 7.84254C14.5443 8.18314 15.2471 8.75991 15.7416 9.49994C16.2361 10.24 16.5 11.11 16.5 12C16.506 12.5926 16.3937 13.1805 16.1697 13.7292C15.9457 14.2779 15.6145 14.7763 15.1954 15.1954C14.7763 15.6145 14.2779 15.9457 13.7292 16.1697C13.1805 16.3937 12.5926 16.506 12 16.5ZM12 9C11.6035 8.99077 11.2093 9.06205 10.8411 9.20954C10.473 9.35704 10.1386 9.57768 9.85812 9.85812C9.57768 10.1386 9.35704 10.473 9.20954 10.8411C9.06205 11.2093 8.99077 11.6035 9 12C8.99077 12.3965 9.06205 12.7907 9.20954 13.1589C9.35704 13.527 9.57768 13.8615 9.85812 14.1419C10.1386 14.4223 10.473 14.643 10.8411 14.7905C11.2093 14.938 11.6035 15.0092 12 15C12.3965 15.0092 12.7907 14.938 13.1589 14.7905C13.527 14.643 13.8615 14.4223 14.1419 14.1419C14.4223 13.8615 14.643 13.527 14.7905 13.1589C14.938 12.7907 15.0092 12.3965 15 12C15.0092 11.6035 14.938 11.2093 14.7905 10.8411C14.643 10.473 14.4223 10.1386 14.1419 9.85812C13.8615 9.57768 13.527 9.35704 13.1589 9.20954C12.7907 9.06205 12.3965 8.99077 12 9Z" fill="#323232"/>
</svg>
</span> Settings</li>
<div className='flex flex-row items-center justify-center  flex-end md:mt-28'>
<h1 className='font-rubik font-normal text-[16px] cursor-pointer  md:flex flex-row  text-[#0FA44A]'> <span className='pr-2 '><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2H15C15.5304 2 16.0391 2.21071 16.4142 2.58579C16.7893 2.96086 17 3.46957 17 4V6H15V4H6V20H15V18H17V20C17 20.5304 16.7893 21.0391 16.4142 21.4142C16.0391 21.7893 15.5304 22 15 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V4C4 3.46957 4.21071 2.96086 4.58579 2.58579C4.96086 2.21071 5.46957 2 6 2Z" fill="#0FA44A"/>
<path d="M16.09 15.59L17.5 17L22.5 12L17.5 7L16.09 8.41L18.67 11H9V13H18.67L16.09 15.59Z" fill="#0FA44A"/>
</svg>
</span>Logout</h1>
</div>
  </ul>
</div>
{/* lats component for the logo section */}

</div>



</div>
  );
}

export default Nav;
