const about=document.getElementsByClassName('responsibility');
      foto=document.getElementsByClassName('foto');
      exp=document.getElementsByClassName('exp');

let anime=true;
    pos=0;

const delay = (time) => {
    return new Promise((resolve, reject) => setTimeout(resolve, time))
    }

window.addEventListener("scroll", ()=>{
    let top=document.documentElement.scrollTop;

    if(top>pos){
        anime=true;console.log(anime);
    } else {
        anime=false; console.log(anime);
    }
    pos=top;

    foto.item(0).classList.add('hide');
    exp.item(0).classList.add('hide');

    if((top>400)&(anime)){
        delay(50)
        .then(()=>{
            about.item(0).classList.add('show');
            return delay(150);})
            .then(()=>{
                about.item(1).classList.add('show');
                return delay(100);})
                .then(()=>{
                    about.item(2).classList.add('show');
                    return delay(50);})
                    .then(()=>{
                        about.item(3).classList.add('show');
                        })
                        .then(()=>{
                            foto.item(0).classList.add('anime_left');
                            return delay(100);})
                            .then(()=>{
                                foto.item(0).classList.remove('hide');
                                foto.item(0).classList.add('anime_left');
                                return delay(100);
                                })
                                .then(()=>{
                                    exp.item(0).classList.remove('hide');
                                    exp.item(0).classList.add('anime_right');
                                    });
    }

    if((top<100)&(!anime)){
        for(let i=0;i<about.length;i++){
            about.item(i).classList.remove('show');
        }
        foto.item(0).classList.remove('anime_left');
        exp.item(0).classList.remove('anime_right');
    }

});