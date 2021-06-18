setTimeout(()=>{ 
    document.querySelector('.holder').style = 'display:none;';
}, 10100);
const sn = document.getElementById('sn');
let w = sn.width = window.innerWidth;
let h = sn.height = window.innerHeight;
const snx = sn.getContext('2d');
const ptc = 230;
let ptcArr = [];
let r = (e,r) => { return e + Math.random()*(r-e+1); }
let csn = ()=>{
    for(let i=0;i<ptc;i++){
        ptcArr.push({
            x: Math.random()*w,
            y: Math.random()*h,
            opacity: Math.random(),
            speedX: r(0, 0),
            speedY: r(1, 3),
            radius: r(0.5, 1.2)
        });
    }
}
let dsn = ()=>{
    for(let i=0;i<ptcArr.length;i++){
        let gradient = snx.createRadialGradient(
            ptcArr[i].x,
            ptcArr[i].y,
            0,
            ptcArr[i].x,
            ptcArr[i].y,
            ptcArr[i].radius
        );
        gradient.addColorStop(0, "rgba(255, 255, 255, "+ptcArr[i].opacity+")");
        gradient.addColorStop(0.8, "rgba(210, 236, 242, "+ptcArr[i].opacity+")");
        gradient.addColorStop(1, "rgba(237, 247, 249, "+ptcArr[i].opacity+")");
        snx.beginPath();
        snx.arc(
            ptcArr[i].x,
            ptcArr[i].y,
            ptcArr[i].radius,
            0,
            Math.PI*2,
            false
        );
        snx.fillStyle = gradient;
        snx.fill();
    }
}
let ms = ()=>{
    for(let i=0;i<ptcArr.length;i++){
        ptcArr[i].x += ptcArr[i].speedX;
        ptcArr[i].y -= ptcArr[i].speedY;
        if(ptcArr[i].y < 0){
            ptcArr[i].x = Math.random()*w*1.5;
            ptcArr[i].y = h;
        }
    }
}
let updateSn = ()=>{
    snx.clearRect(0,0,sn.width,sn.height);
    dsn();
    ms();
    requestAnimationFrame(updateSn);
}
csn();
updateSn();


