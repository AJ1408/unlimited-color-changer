 // generate a randomCOLOR
    const randomColor = function (){
        let hex = '0123456789ABCDEF'
        let color ='#';
        for(let i = 0; i<6 ;i++){
            color += hex[(Math.floor(Math.random()*16))];
        }
        return color;

    }
    // console.log(randomColor()); 

    // const color = function(randomCOLOR){
    //     console.log(randomColor());
    // }
    let colorChange = function(){
        let newColor = randomColor();
        // document.querySelector('.container').style.backgroundColor = newColor ; it will change the color of the div
        document.body.style.backgroundColor = newColor ;

    }

    let isColorChange = null ;

    document.querySelector("#start").addEventListener('click',function(){
       if(!isColorChange){
        isColorChange = setInterval(colorChange,1000);
        console.log( 'start : ',randomColor());
       }
    })
    document.querySelector('#stop').addEventListener('click',function(){
        clearInterval(isColorChange);
        isColorChange = null;
        console.log("stopped");
    })