let optionalbar = document.querySelector(".optional-bar");
let toolboxcont = document.querySelector(".tool-box-cont");
let optionalflag = true;
let penciltoolcont = document.querySelector(".pencil-tool-cont");
let pencil = toolboxcont.querySelector(".pencil");
let pencilflag = false;
let erasertoolcont = document.querySelector(".eraser-tool-cont");
let eraser = toolboxcont.querySelector(".eraser");
let eraserflag = false;
let stickybtn = toolboxcont.querySelector(".stickynotes")
let notecontflag = true;
let upload = document.querySelector(".upload");


pencil.addEventListener("click", () => {
  pencilflag = !pencilflag;
  if (pencilflag) {
    penciltoolcont.style.display = "block";
   // Need some bug fix
  } else {
    penciltoolcont.style.display = "none";
  }
});

eraser.addEventListener("click", () => {
    eraserflag = !eraserflag;
    if (eraserflag) {
        erasertoolcont.style.display = "block";
        // Need Some Bug Fixed 
        
    } else {
        erasertoolcont.style.display = "none";
    }
  });

  upload.addEventListener("click", (e) => {
    // Open file explorer
    let input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    input.addEventListener("change", (e) => {
        let file = input.files[0];
        let url = URL.createObjectURL(file);

       
       
        let stickyTemplateHTML = `
        <div class="header-cont">
            <div class="minimize"></div>
            <div class="remove"></div>
        </div>
        <div class="note-cont">
            <img src="${url}" alt="Uploaded Image"/>
            <textarea spellcheck="false" placeholder="Write your text here..."></textarea>
        </div>
        `;
        createSticky(stickyTemplateHTML);
    })
})

function OpenTools() {
  let iconElem = optionalbar.children[0];
  iconElem.classList.remove("fa-times");
  iconElem.classList.add("fa-bars");

  toolboxcont.style.display = "flex";
}

function CloseTool() {
  let iconElem = optionalbar.children[0];
  iconElem.classList.remove("fa-bars");
  iconElem.classList.add("fa-times");
  toolboxcont.style.display = "none";
  penciltoolcont.style.display = "none";
  erasertoolcont.style.display = "none";
}

optionalbar.addEventListener("click", () => {
  optionalflag = !optionalflag;

  if (optionalflag) {
    OpenTools();
  } else {
    CloseTool();
  }
});

stickybtn.addEventListener("click", (event) => {
   
    stickyTemplateHTML = `
        <div class="header-cont">
            <div class="minimize"></div>
            <div class="remove"></div>
        </div>
        <div class="note-cont">
            <textarea spellcheck="false"></textarea>
        </div>
    `;

    createSticky(stickyTemplateHTML);
    
});


function createSticky(stickyTemplateHTML) {
    let stickycont = document.createElement('div');

    stickycont.setAttribute("class", "sticky-cont");
    stickycont.innerHTML = stickyTemplateHTML;

    document.body.appendChild(stickycont);

    let minimize = stickycont.querySelector(".minimize");
    let remove = stickycont.querySelector(".remove");
    noteactions(minimize, remove, stickycont);

    stickycont.onmousedown = function (event) {
        draganddrop(stickycont, event);
    };

    stickycont.ondragstart = function () {
        return false;
    };
}

function noteactions(minimize,remove,stickycont)
{
    remove.addEventListener("click",()=>{
        stickycont.style.transition = "opacity 0.3s, transform 0.3s";
        stickycont.style.opacity = "0";
        stickycont.style.transform = "scale(0.9)";
        setTimeout(() => stickycont.remove(), 300);
    })

    minimize.addEventListener("click", () => {
        notecontflag = !notecontflag;
        let notecont = stickycont.querySelector(".note-cont");
        notecont.style.display = notecontflag ? "block" : "none";
        notecont.style.height = notecontflag ? "13rem" : "0";
        notecont.style.backgroundColor = notecontflag ? "white" : "#f1f2f6";
    });
}


function draganddrop(stickycont, event) {
    if (event.button !== 0) return; 

    let shiftX = event.clientX - stickycont.getBoundingClientRect().left;
    let shiftY = event.clientY - stickycont.getBoundingClientRect().top;

    stickycont.style.position = 'absolute';
    stickycont.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        stickycont.style.left = pageX - shiftX + 'px';
        stickycont.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', function onMouseUp(event) {
        if (event.button === 0) { 
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }
    });

    stickycont.ondragstart = function () {
        return false;
    };
}

