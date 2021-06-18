setTimeout(()=>{ 
    document.querySelector('.holder').style = 'display:none;';
    document.querySelector('section').style = 'opacity: 0.9;';
    document.querySelector('.container').style = 'display:flex;';
    document.querySelector('#message').style = 'opacity: 1;';
    document.querySelector('body').style = 'background: #609FA9;';
}, 10100);
let st = 0;
    let change_title = ()=>{
        st++;
        switch(st){
            case 1:
                document.title = 'C*******R';
                break;
            case 2:
                document.title = '*r*****e*';
                break;
            case 3:
                document.title = '**o***v**';
                break;
            case 4:
                document.title = '***s*o***';
                break;
            case 5:
                document.title = '****s****';
                break;
            case 6:
                document.title = '***s*o***';
                break;
            case 7:
                document.title = '**o***v**';
                break;
            case 8:
                document.title = '*r*****e*';
                break;
            case 9:
                document.title = 'C*******R';
                st = 1;
                break;
            default:
                break;
        }
        setTimeout(change_title, 270);
    }
    change_title();
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

TypingText = function(element, interval, cursor, finishedCallback) {
 
    if((typeof document.getElementById == 
    
    "undefined") || (typeof element.innerHTML == "undefined")) {
     
    this.running = true;
     
    return;
     
    }
     
    this.element = element;
     
    this.finishedCallback = (finishedCallback 
    
    ? finishedCallback : function() { return; });
     
    this.interval = (typeof interval == "undefined" ? 100 : interval);
     
    this.origText = this.element.innerHTML;
     
    this.unparsedOrigText = this.origText;
     
    this.cursor = (cursor ? cursor : "");
     
    this.currentText = "";
     
    this.currentChar = 0;
     
    this.element.typingText = this;
     
    if(this.element.id == "") this.element.id = "typingtext" + TypingText.currentIndex++;
     
    TypingText.all.push(this);
     
    this.running = false;
     
    this.inTag = false;
     
    this.tagBuffer = "";
     
    this.inHTMLEntity = false;
     
    this.HTMLEntityBuffer = "";
     
    }
     
    TypingText.all = new Array();
     
    TypingText.currentIndex = 0;
     
    TypingText.runAll 
    
    = function() {
     
    for(var i = 0; i < TypingText.all.length; i++) TypingText.all[i].run();
     
    }
     
    TypingText.prototype.run = function() {
     
    if(this.running) return;
     
    if(typeof this.origText == "undefined") {
     
    setTimeout("document.getElementById('" + this.element.id + "').typingText.run()", this.interval);
     
    return;
     
    }
     
    if(this.currentText == "") this.element.innerHTML = "";
     
    if(this.currentChar < this.origText.length) {
     
    if(this.origText.charAt(this.currentChar) == "<" && 
    
    !this.inTag) {
     
    this.tagBuffer = "<";
     
    this.inTag = true;
     
    this.currentChar++;
     
    this.run();
     
    return;
     
    } else if(this.origText.charAt(this.currentChar) == ">" && 
    
    this.inTag) {
     
    this.tagBuffer += ">";
     
    this.inTag = false;
     
    this.currentText += this.tagBuffer;
     
    this.currentChar++;
     
    this.run();
     
    return;
     
    } else 
    
    if(this.inTag) {
     
    this.tagBuffer += this.origText.charAt(this.currentChar);
     
    this.currentChar++;
     
    this.run();
     
    return;
     
    } else 
    
    if(this.origText.charAt(this.currentChar) == "&" && !this.inHTMLEntity) {
     
    this.HTMLEntityBuffer = "&";
     
    this.inHTMLEntity = true;
     
    this.currentChar++;
     
    this.run();
     
    return;
     
    } else if(this.origText.charAt(this.currentChar) == ";" && this.inHTMLEntity) {
     
    this.HTMLEntityBuffer += ";";
     
    this.inHTMLEntity = 
    
    false;
     
    this.currentText += this.HTMLEntityBuffer;
     
    this.currentChar++;
     
    this.run();
     
    return;
     
    } else if(this.inHTMLEntity) {
     
    this.HTMLEntityBuffer += 
    
    this.origText.charAt(this.currentChar);
     
    this.currentChar++;
     
    this.run();
     
    return;
     
    } else {
     
    this.currentText += this.origText.charAt(this.currentChar);
     
    }
     
    this.element.innerHTML = this.currentText;
     
    this.element.innerHTML += (this.currentChar < this.origText.length - 1 ? (typeof this.cursor == "function" ? 
    
    this.cursor(this.currentText) : this.cursor) : "");
     
    this.currentChar++;
     
    setTimeout("document.getElementById('" + this.element.id + "').typingText.run()", 
    
    this.interval);
     
    } else {
     
    this.currentText = "";
     
    this.currentChar = 0;
     
    this.running = false;
     
    this.finishedCallback();
     
    }
     
    }


 
setTimeout(()=>{
    new TypingText(document.getElementById("message"), 90, function(i){ var ar = new Array("_", " ", "_", " "); return " " + ar[i.length % ar.length]; });
    TypingText.runAll();
},10100);


