let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let pencilwidthcont = document.querySelector(".pencil-width")
let pencilcolor  = document.querySelectorAll(".pencil-color")
let eraserwidthcont = document.querySelector(".eraser-width")

let download = toolboxcont.querySelector(".download");
let undo = toolboxcont.querySelector(".undo");
let redu = toolboxcont.querySelector(".redu");


let pencolor = "red";
let erasercolor = "white";
let penwidth = pencilwidthcont.value ;
let eraserwidth = eraserwidthcont.value ;

let undoredotracker =[];
let tracker=0;

let mousedown = false;



let tool = canvas.getContext("2d")

tool.strokeStyle=pencolor
tool.lineWidth =penwidth

 canvas.addEventListener("mousedown",(e)=>{

    let coordinate = {
        x:e.clientX,
        y:e.clientY
    }
    //   beginPath(coordinate);
      beginPath(coordinate);
      socket.emit("beginPath",coordinate)

 })

 canvas.addEventListener("mousemove",(e)=>{
    if(mousedown) {

    let coordinate = {
        x:e.clientX,
        y:e.clientY,
        currentcolor: eraserflag ? erasercolor : pencolor,
        colorwidth : eraserflag ? eraserwidth : penwidth
    }
    drawstroke(coordinate)
    socket.emit("drawstroke",coordinate)
    }

 })

 canvas.addEventListener("mouseup",(e)=>{
    mousedown = false;

    let data = canvas.toDataURL();
    undoredotracker.push(data);
    tracker = undoredotracker.length-1;
 })


 function beginPath({x,y}){
    mousedown= true;
    tool.beginPath();
    tool.moveTo(x,y)
 }

 function drawstroke({x,y,color,width}){
    if(mousedown){
        tool.lineWidth=width;
        tool.strokeStyle=color;
        tool.lineTo(x,y);
        tool.stroke();
    }
 }

 pencilcolor.forEach((colorelm)=>{
      colorelm.addEventListener("click",(e)=>{
            let color = colorelm.classList[0];
            pencolor = color;
            tool.strokeStyle = pencolor
      })
 })


 pencilwidthcont.addEventListener("change" ,(e)=>{
    penwidth = pencilwidthcont.value;
    tool.lineWidth = penwidth;
 })


 eraserwidthcont.addEventListener("change" ,(e)=>{
    eraserwidth = eraserwidthcont.value;
    tool.lineWidth = eraserwidth;
 })

 eraser.addEventListener("click",(e)=>{
        if(eraserflag){
            tool.strokeStyle = erasercolor;
            tool.lineWidth = eraserwidth;
        }else{
            tool.strokeStyle = pencolor;
            tool.lineWidth = penwidth; 
        }
 })



 download.addEventListener("click",(e)=>{

        let url = canvas.toDataURL();
        let a =document.createElement('a');
        a.href = url;
        a.download = "board.jpg"
        a.click();

 })


 undo.addEventListener("click",(e)=>{
    if(tracker > 0)
    {
        tracker--;
    }

    let obj = {
        trackval : tracker,
        undoredotracker
    }
    socket.emit("undoredufuction",obj)
    undoredufuction(obj);

 })

 redu.addEventListener("click",(e)=>{
        if(tracker < undoredotracker.length - 1){
            tracker++;
        }
        let obj ={
            trackval : tracker,
            undoredotracker
        }
        undoredufuction(obj);
        socket.emit("undoredufuction", obj);
 })
 
function undoredufuction(obj){
        tracker =obj.trackval;
        let arr= obj.undoredotracker

        let img = new Image();
        img.src = arr[tracker];
        img.onload = (e)=>{
            tool.drawImage(img,0,0,canvas.width,canvas.height)
        }
}

socket.on("beginPath",(coordinate)=>{
        beginPath(coordinate);
})

socket.on("drawstroke",(coordinate)=>{
    drawstroke(coordinate);
})

socket.on("undoredufuction", (data) => {
    undoRedoCanvas(data);
})