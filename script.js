const progress=document.getElementById('progress');
const prev=document.getElementById('prev');
const next=document.getElementById('next');
const circle=document.querySelectorAll('.circle');

let currentAcive=1;

next.addEventListener('click',()=>{
    currentAcive++;
    if(currentAcive>circle.length){
        currentAcive=circle.length;
    }
    update();
})
prev.addEventListener('click',()=>{
    currentAcive--;
    if(currentAcive<1){
        currentAcive=1;
    }
    update();
})

function update(){
    circle.forEach((circle,index)=>{
            if(index<currentAcive){
                circle.classList.add('active')
            }
            else{
                circle.classList.remove('active')

            }
    })
    const actives=document.querySelectorAll('.active');
    progress.style.width=(actives.length-1)/(circle.length-1)*100+'%';

    if (currentAcive===1) {
        prev.disabled=true;
    }
    else{
        prev.disabled=false;

    }
    if (currentAcive===circle.length) {
        next.disabled=true;
    }
    else{
        next.disabled=false;

    }
}