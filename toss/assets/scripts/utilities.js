export function toss(id){
    const randomNumber = Math.floor(Math.random() * 2) + 1;
    console.log("res",randomNumber);
    if(id==randomNumber)
    return true;
    else
    return false;
  }

  export function vanish(img){
    img.style.display="none";
  }

  export function appear(img){
    img.style.display="flex"
  }

  export function remove_hidden_class(img){
    img.classList.remove("hidden")
  }

  export function add_hidden_class(img){
    img.classList.add("hidden")
  }
  

  export function change_textContent(tag,message){
    tag.innerText=`${message}`;
  }

  export function change_img_src(img,new_src){
    img.src=`assets/images/${new_src}.png`
  }