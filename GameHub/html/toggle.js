var menuList=document.getElementById("menubar");
menuList.style.maxHeight="0px";

function togglemenu(){
    if (menuList.style.maxHeight=="0px"){
        menuList.style.maxHeight=="130px";
    }
    else{
        menuList.style.maxHeight=="0px";
    }
}