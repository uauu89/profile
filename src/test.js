document.querySelectorAll(".disLink").forEach(i=>{
    i.addEventListener("click", e=>e.preventDefault());
})


let dom_mainMenu = document.querySelectorAll("nav a");

dom_mainMenu.forEach(i=>{
    i.addEventListener("click", e=>{
        dom_mainMenu.forEach(i=>i.classList.remove("active"))
        e.currentTarget.classList.add("active");
    })
})

let dom_viewOption = document.querySelectorAll("input[name=viewOption]");

dom_viewOption.forEach(i=>{
    i.addEventListener("change", e=>{
        // document.querySelector("input[name=viewOption]:checked").
        console.log(e.currentTarget.getAttribute("id"));
        switch(e.currentTarget.getAttribute("id")){
            case "view_list":
                document.querySelector(".portfolioList").classList.remove("table");
                break;
            case "view_item":
                document.querySelector(".portfolioList").classList.add("table");
                break;
            default:
        }
        
    })
})


document.querySelector("body").addEventListener("click", e=>{
    // console.log(e.target);
    if(e.target.classList.contains("btn_search")){
        document.querySelector(".searchWrap").classList.toggle("active");
    }else if(e.target.classList.contains("fa-x") || !e.target.closest("form")){
        document.querySelector(".searchWrap").classList.remove("active");
    }
})

