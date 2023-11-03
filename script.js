function ChangeImg(event, source)
{
    event.target.src = source;
}

let list = document.querySelector(".list");
let allCrossIcons = document.querySelectorAll(".cross-icon");
let buttons = document.querySelector(".add-buttons");
let button1 = document.querySelector(".plus");
let button2 = document.querySelector(".add-task");
let input = document.querySelector('input');
let eraseIcon = document.querySelector(".erase");
let deleteIcons = document.querySelectorAll(".delete");
let sortImg = document.querySelector('.sorting img');
let sortFlag = false;


allCrossIcons.forEach(icon => {
    icon.addEventListener('mouseover', event => {
        ChangeImg(event, "./Assets/Cross_1.png");
    });
    icon.addEventListener('mouseout', event => {
        ChangeImg(event, "./Assets/Cross_0.png");
    });
});


sortImg.addEventListener('mouseover', event =>{
    ChangeImg(event, (sortFlag ? "./Assets/UPsort_1.png" : "./Assets/DOWNsort_1.png"));
});
sortImg.addEventListener('mouseout', event =>{
    ChangeImg(event, (sortFlag ? "./Assets/UPsort_0.png" : "./Assets/DOWNsort_0.png"));
});

sortImg.addEventListener('click', event =>{
    ChangeImg(event, (sortFlag ? "./Assets/DOWNsort_1.png" : "./Assets/UPsort_1.png"));
    sortFlag = !sortFlag;
});


button1.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "#aa68fe";
});
button1.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = "#9953f1";
});

button2.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "#9953f1";
});
button2.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = "#833ae0";
});


eraseIcon.addEventListener('click', () => {
    input.value = "";
});

deleteIcons.forEach(icon => {
    icon.addEventListener('click', event => {
        event.target.parentElement.parentElement.remove();
        if (list.childElementCount === 0) {
            list.style.display = 'none';
        }
    });
});


buttons.addEventListener('click', () => {
    if(input.value != "")
    {
        let li = document.createElement('li');
        let span = document.createElement('span');
        let div = document.createElement('div');
        let img = document.createElement('img');

        span.textContent = input.value;
        div.classList.add("delete");
        img.src = "./Assets/Cross_0.png";
        img.alt = "delete-task-icon";

        div.appendChild(img);
        li.appendChild(span);
        li.appendChild(div);
        list.appendChild(li);
        input.value = "";

        div.addEventListener('click', event => {
            event.target.parentElement.parentElement.remove();
        });

        div.addEventListener('mouseover', event => {
            ChangeImg(event, "./Assets/Cross_1.png");
        });
        div.addEventListener('mouseout', event => {
            ChangeImg(event, "./Assets/Cross_0.png");
        });
        
        list.style.display = 'block';
    }
});