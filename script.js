function toggle_nav(show){
    let element = document.querySelector("nav.mobile").querySelector(".navicons")
    if(show){
        element.classList.add("active")
        element.classList.remove("inactive");
    }

    else{
        element.classList.add("inactive")
        element.classList.remove("active");
    }
}