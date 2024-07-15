const getElement = (element) => document.querySelector(element);

const overallContainer = getElement(".overall-container");
const parentContainerOne = getElement(".container-1");
const parentContainerTwo = getElement(".container-2");
const btn = getElement(".btn");


btn.addEventListener("click", (e) => {
    const containerWidth = overallContainer.getBoundingClientRect().width;
    const newParent = e.currentTarget.parentElement;
    if (containerWidth <= 375){
        if (!parentContainerOne.classList.contains("hidden")){
             parentContainerOne.classList.add("hidden");
             parentContainerTwo.classList.remove("hidden");
             newParent.style.backgroundColor = `#48556a`
             newParent.style.borderBottomRightRadius = `10px`
             newParent.style.borderBottomLeftRadius = `10px`
             btn.style.marginBottom = `0px`;
         } 
         else{
             parentContainerOne.classList.remove("hidden");
             parentContainerTwo.classList.add("hidden");
             newParent.style.backgroundColor = `#fff`;
             btn.style.marginBottom = `20px`;
     
        }
    }

    else{
        if (parentContainerTwo.classList.contains("hidden")){
            parentContainerTwo.classList.remove("hidden");
            parentContainerTwo.classList.remove("xs:hidden");
        }
        else{
            parentContainerTwo.classList.add("hidden");
            parentContainerTwo.classList.add("xs:hidden");
        }
    }
});