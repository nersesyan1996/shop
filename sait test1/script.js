// //header

function events() {
    window.scroll = addEventListener("scroll", () => {
        if (scrollY < 40) {
            document
                .querySelector("header")
                .setAttribute("style", "opacity:1; top: 0;");
        }
        if (scrollY > 40) {
            document
                .querySelector("header")
                .setAttribute("style", "opacity:0; top: -45px;");
        }
    });

    // //mobile_panel_open
    let m = document.querySelector(".mobile_panel_open");
    document.querySelector(".mobile_btn").onclick = function() {
        m.style.display = "flex";
    };
    document.querySelector(".mobile_panel_close_js").onclick = function(e) {
        m.style.display = "none";
    };
    document.querySelector("main").onclick = function(e) {
        m.style.display = "none";
    };
    window.scroll = addEventListener("scroll", () => {
        if (scrollY > 10 || scrollY < 10) {
            m.style.display = "none";
        }
    });

    // // clear_input
    document.querySelector(".clen_input_btn").onclick = function(e) {
        document.querySelector(".clen_input").value = "";
    };

    // // open_close_buttone_size
    let open_clase = document.querySelector(".open_clase");
    let cnt_3_after = document.querySelector(".cnt_3_after");
    document.querySelector(".container_3").onclick = function() {
        if (open_clase.style.display != "block") {
            open_clase.style.display = "block";
            cnt_3_after.setAttribute("style", "transform: rotate(270deg);");
            document.querySelector(".alert_popap").style.display = "none";
            document.querySelector(".open_clase").style.height = 225 + "px";
        } else {
            open_clase.style.display = "none";
            cnt_3_after.setAttribute("style", "transform: rotate(90deg);");
            document.querySelector(".open_clase").style.height = "auto";
        }
    };

    // // open_close_basket_btn
    let basket_open_close = document.querySelector(".basket_open_close");
    document.querySelector(".basket_btn").onclick = function() {
        if (basket_open_close.style.right != 31 + "px") {
            basket_open_close.style.right = 31 + "px";
            basket_open_close.classList.add("add_basket_open_close");
            basket_open_close.classList.remove("remove_basket_open_close");
            basket_open_close.style.display = "flex";
        } else {
            basket_open_close.style.right = 100 + "%";
            basket_open_close.classList.remove("add_basket_open_close");
            basket_open_close.classList.add("remove_basket_open_close");
            setTimeout(() => {
                basket_open_close.style.display = "none";
            }, 500);
        }
        document.querySelector("main").onclick = function() {
            basket_open_close.classList.add("remove_basket_open_close");
            basket_open_close.style.right = 100 + "%";
            setTimeout(() => {
                basket_open_close.style.display = "none";
            }, 500);
        };
        window.scroll = addEventListener("scroll", () => {
            if (scrollY > 5 || scrollY < 5) {
                basket_open_close.classList.add("remove_basket_open_close");
                basket_open_close.style.right = 100 + "%";
                setTimeout(() => {
                    basket_open_close.style.display = "none";
                }, 500);
            }
        });
    };
}
events();

// // bg img change
let images_btn = document.querySelectorAll(".parent_2_containers>img");
let imgarr = [...images_btn];

imgarr.map((e) => {
    e.addEventListener("click", () => {
        return (imgUrl = document.querySelector(".big_img").src = `${e.src}`);
    });
});

// // count

let count = 1;
let num = document.querySelector(".count_add");
let plus_btn = document
    .querySelector(".increase")
    .addEventListener("click", () => {
        numbers = +num.value;
        num.value = "";
        num.value += numbers + 1;
        count = +num.value;
    });

let minus_btn = document
    .querySelector(".decrease")
    .addEventListener("click", () => {
        if (num.value > 1) {
            numbers = +num.value;
            num.value = "";
            num.value += numbers - 1;
            count = +num.value;
        }
    });
// //siza
let size = "";
let size_element = document.querySelectorAll(".option>li");
size_element.forEach((siz) => {
    siz.addEventListener("click", () => {
        document
            .querySelector(".cnt_3_after")
            .classList.remove("required_to_fill_out");
        document.querySelector(".container_3>p").innerHTML = siz.textContent;
        document.querySelector(".cnt_3_before").style.display = "none";
        return (size = siz.textContent);
    });
});
// ----------------------------------------------------
// // arr
let somenewArr = [];
let btn1_add,btn2_close;
let id = 0;

function newArray() {
    let image = document.querySelector(".big_img").src;
    let obj = { id: id++ };
    obj.image = image;
    obj.siz = size;
    obj.count = count;
    somenewArr.push(obj);
    return somenewArr;
}

// someArr=newArray()

document.querySelector(".add").addEventListener("click", () => {
   
    if (
        document.querySelector(".container_3>p").textContent !== "Выбрать размер"
    ) {
        document
            .querySelector("header")
            .setAttribute("style", "opacity:1; top: 0;");
        newArray();

        let parent_div = document.querySelector(".basket_open_close"); // glxavor div
        let creat_div = document.createElement("div");
        let creat_div_from_p = document.createElement("div");
        let creat_img = document.createElement("img");
        let p1 = document.createElement("p"); //sarqumenq p
        let p2 = document.createElement("p"); //p2
        let span1 = document.createElement("span"); //sarqumenq span
        let span2 = document.createElement("span"); //span
        let btn1_add = document.createElement("button");
        let btn2_close = document.createElement("button");

        somenewArr.map((val) => {
            creat_img.src = val.image;
            p1.innerHTML = "размер-";
            p2.innerHTML = "сколько-";
            span1.innerHTML = val.siz;
            span2.innerHTML = val.count;
        });

        parent_div.appendChild(creat_div); //parent_div > div
        creat_div.appendChild(creat_img); //div > img
        creat_div.appendChild(creat_div_from_p);
        p1.appendChild(span1); //p1 > span
        p2.appendChild(span2); //p2 > span
        creat_div_from_p.appendChild(p1); //p1
        creat_div_from_p.appendChild(p2); //p2
        creat_div.appendChild(btn1_add).innerHTML = "купить"; //btn1
        creat_div.appendChild(btn2_close).innerHTML = "X"; //btn2
  document.querySelector(".basket_min_count").innerHTML = somenewArr.length;
 
        //elements count+
        btn2_close.addEventListener("click", () => {
            creat_div.remove()
            somenewArr.forEach((val, index) => {

                if(somenewArr.length >0){
                    somenewArr.splice(index, 1);
                    
                    }
                 elements_count();
            })
        })

    } else {
        document.querySelector(".alert_popap").style.display = "block";
        setTimeout(() => {
            document.querySelector(".alert_popap").style.display = "none";
        }, 2000);
    }
    
  
});
function elements_count() {

  document.querySelector(".basket_min_count").innerHTML = somenewArr.length;

}

elements_count()
 
function icons_click() {
    let arr_icons = { click1: false };
    document.querySelector(".favorite_change").addEventListener("click", () => {
        if (arr_icons.click1 != true) {
            arr_icons.click1 = true;
            document.querySelector(".favorite_change").src =
                "images/svg/favorite_red.svg";
        } else {
            arr_icons.click1 = false;
            document.querySelector(".favorite_change").src =
                "images/svg/favorite.svg";
        }
    });
    document.querySelector(".save_img").addEventListener("click", () => {
        if (arr_icons.click1 != true) {
            arr_icons.click1 = true;
            document.querySelector(".favorite_change").src =
                "images/svg/favorite_red.svg";
        } else {
            arr_icons.click1 = false;
            document.querySelector(".favorite_change").src =
                "images/svg/favorite.svg";
        }
    });
}
icons_click();
