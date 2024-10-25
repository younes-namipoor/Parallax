
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 =document.getElementById('img3')
const img4 =document.getElementById('img4')
const img5 =document.getElementById('img5')
const img6 =document.getElementById('img6')
const img7 =document.getElementById('img7')
const img8 =document.getElementById('img8')
const img9 =document.getElementById('img9')
const img10 =document.getElementById('img10')
const img11 =document.getElementById('img11')







window.addEventListener('scroll' , ()=>{
    let st = window.scrollY
    console.log(st);
    if(st >= 80){
        img1.style.opacity = '.3'
        img2.style.opacity = '.3'
    }else if(st <= 80){
        img1.style.opacity = '0'
        img2.style.opacity = '0'
    }
    if(st >= 120){
        img1.style.opacity = '.5'
        img2.style.opacity = '.5'
    }else if(st == 120){
        img1.style.opacity = '.3'
        img2.style.opacity = '.3'
    }
    if(st >= 160){
        img1.style.opacity = '.7'
        img2.style.opacity = '.7'
    }else if(st == 160){
        img1.style.opacity = '.5'
        img2.style.opacity = '.5'
    }
    if(st >= 160){

        img3.style.opacity = '.8'
    }else if(st <= 160){
        img3.style.opacity = '1'
    }
    if(st >= 200){
        img1.style.opacity = '1'
        img2.style.opacity = '1'
    }else if(st == 200){
        img1.style.opacity = '.7'
        img2.style.opacity = '.7'
    }
    if(st >= 200){

        img3.style.opacity = '.6'
    }else if(st == 200){
        img3.style.opacity = '.8'
    }
    if(st >= 320){
        img3.style.opacity = '.4'
        img1.style.transition = '.4s'
        img2.style.transition = '.4s'
    }else if(st == 320){
        img3.style.opacity = '.6'
        img1.style.transition = '.4s'
        img2.style.transition = '.4s'
    }
    if(st >= 360){
        img3.style.opacity = '0'
    }else if(st == 360){
        img3.style.opacity = '.4'
    }
    if(st >= 400){

        img1.style.top = '50%'
        img2.style.top = '50%'
        img1.style.position = 'fixed'
        img2.style.position = 'fixed'
        img1.style.transition = '1s'
        img2.style.transition = '1s'
    }else if(st <= 400){
        img1.style.position = 'absolute'
        img2.style.position = 'absolute'
        img1.style.top = '0%'
        img2.style.top = '0%'
        img1.style.transition = '1s'
        img2.style.transition = '1s'
        
    }
      
    if(st >= 480){
        img1.style.transition = '.4s'
        img2.style.transition = '.4s'   
        
    }
    if(st >= 480){

        img1.style.left = '32%'
        img2.style.left = '24%'

    }else if(st <= 480){
        img1.style.left = '30%'
        img2.style.left = '26%'

    }
    if(st >= 520){

        img1.style.left = '34%'
        img2.style.left = '22%'
    }else if(st == 520){
        img1.style.left = '32%'
        img2.style.left = '24%'
    }
    if(st >= 560){

        img1.style.left = '36%'
        img2.style.left = '20%'
    }else if(st == 560){
        img1.style.left = '34%'
        img2.style.left = '22%'
    }
    if(st >= 600){

        img1.style.left = '38%'
        img2.style.left = '18%'
    }else if(st == 600){
        img1.style.left = '36%'
        img2.style.left = '20%'
    }
    if(st >= 640){

        img1.style.left = '40%'
        img2.style.left = '16%'
    }else if(st == 640){
        img1.style.left = '38%'
        img2.style.left = '18%'
    }
    if(st >= 680){

        img1.style.left = '42%'
        img2.style.left = '14%'
    }else if(st == 680){
        img1.style.left = '40%'
        img2.style.left = '16%'
    }
    if(st >= 720){

        img1.style.left = '44%'
        img2.style.left = '12%'
    }else if(st == 720){
        img1.style.left = '42%'
        img2.style.left = '14%'
    }
    if(st >= 760){

        img1.style.left = '46%'
        img2.style.left = '10%'
    }else if(st == 760){
        img1.style.left = '44%'
        img2.style.left = '12%'
    }
    if(st >= 800){

        img1.style.left = '48%'
        img2.style.left = '9%'
    }else if(st == 800){
        img1.style.left = '46%'
        img2.style.left = '10%'
    }
    if(st >= 840){

        img1.style.left = '50%'
        img2.style.left = '8%'
    }else if(st == 840){
        img1.style.left = '48%'
        img2.style.left = '9%'
    }
    if(st >= 840){

        img1.style.left = '52%'
        img2.style.left = '7%'
    }else if(st == 840){
        img1.style.left = '50%'
        img2.style.left = '8%'
    }
    if(st >= 880){

        img1.style.left = '54%'
        img2.style.left = '6%'
    }else if(st == 880){
        img1.style.left = '52%'
        img2.style.left = '7%'
    }
    if(st >= 920){

        img1.style.left = '56%'
        img2.style.left = '5%'
    }else if(st == 920){
        img1.style.left = '54%'
        img2.style.left = '6%'
    }
    if(st >= 960){

        img1.style.left = '60%'
        img2.style.left = '2%'
    }else if(st == 960){
        img1.style.left = '56%'
        img2.style.left = '5%'
    }
    if(st >= 1000){

        img1.style.left = '65%'
        img2.style.left = '-1%'
    }else if(st == 1000){
        img1.style.left = '60%'
        img2.style.left = '2%'
    }
    if(st >= 1040){

        img1.style.left = '70%'
        img2.style.left = '-4%'
    }else if(st == 1040){
        img1.style.left = '65%'
        img2.style.left = '-1%'
    }
    if(st >= 1080){

        img1.style.left = '75%'
        img2.style.left = '-6%'
    }else if(st == 1080){
        img1.style.left = '70%'
        img2.style.left = '-4%'
    }
    if(st >= 1120){

        img1.style.left = '82%'
        img2.style.left = '-8%'
    }else if(st == 1120){
        img1.style.left = '75%'
        img2.style.left = '-6%'
    }
    if(st >= 1160){

        img1.style.left = '90%'
        img2.style.left = '-10%'
    }else if(st == 1160){
        img1.style.left = '82%'
        img2.style.left = '-8%'
    }
    if(st >= 1200){
        img4.style.transform = 'translateY(0px)'
    }else if(st <= 1300){
      img4.style.transform = 'translateY(-250px)'
    }
    if(st >= 1280){
        img5.style.transform = 'translateY(0px)'
    }else if(st <= 1380){
      img5.style.transform = 'translateY(-250px)'
    }
    if(st >= 1320){
        img6.style.transform = 'translateY(0px)'
    }else if(st <= 1420){
      img6.style.transform = 'translateY(-250px)'
    }
    if(st >= 1520){
        img4.style.transform = 'translateY(-250px)'
    }else if(st == 1520){
        img4.style.transform = 'translateY(0px)'
    }
    if(st >= 1560){
        img5.style.transform = 'translateY(-250px)'
    }else if(st == 1560){
        img5.style.transform = 'translateY(0px)'
    }
    if(st >= 1600){
        img6.style.transform = 'translateY(-250px)'
    }else if(st == 1600){
        img6.style.transform = 'translateY(0px)'
    }
    if(st >= 1800){
        img7.style.opacity = '1'
    }else if(st <= 1800){
        img7.style.opacity = '.5'
    }
    if(st >= 1980){
        img8.style.opacity = '1'
        img7.style.opacity = '.5'
    }else if(st <= 1980){
        img8.style.opacity = '.5'
    }
    if(st >= 2720){
        img8.style.opacity = '.5'
        
    }else if(st == 2720){
        img8.style.opacity = '1'
    }
    if(st >= 2720){
        img10.style.opacity = '1'
        
    }else if(st <= 2720){
        img10.style.opacity = '.5'
    }
    if(st >= 3480){
        img10.style.opacity = '.5'
        
    }else if(st == 3480){
        img10.style.opacity = '1'
    }
    if(st >= 3480){
        img12.style.opacity = '1'
        
    }else if(st <= 3480){
        img12.style.opacity = '.5'
    }
    if(st >= 4280){
        img12.style.opacity = '.5'
        
    }else if(st <= 4280){
        img12.style.opacity = '1'
    }
    if(st >= 4680){

        img1.style.left = '75%'
        img2.style.left = '0%'

    }else if(st == 4680){
        img1.style.left = '90%'
        img2.style.left = '-10%'

    }
    if(st >= 4760){

        img1.style.left = '60%'
        img2.style.left = '10%'

    }else if(st == 4760){
        img1.style.left = '75%'
        img2.style.left = '0%'

    }
    if(st >= 4840){

        img1.style.left = '45%'
        img2.style.left = '18%'

    }else if(st == 4840){
        img1.style.left = '60%'
        img2.style.left = '10%'

    }
    if(st >= 4920){

        img1.style.left = '30%'
        img2.style.left = '26%'

    }else if(st == 4920){
        img1.style.left = '45%'
        img2.style.left = '18%'

    }

    
})

window.addEventListener('mousemove' , (e)=>{
   let x = (((e.clientX)/25)-15)
   let y = (((e.clientY)/25)-15)
   img9.style.transform = 'translate('+x+'px , '+y+'px)'
   img11.style.transform = 'translate('+x+'px , '+y+'px)'
   img13.style.transform = 'translate('+x+'px , '+y+'px)'
})

