

const btn = document.querySelector('.avatar');
const  modal = document.querySelector('.modal-content');
const span = document.querySelector('#content-exit');
const imgprofile = document.querySelector('.image-profile');

const messageContainer = document.querySelector(".message-header");
const modal1 = document.querySelector(".modal-container-1")
const modalExit = document.querySelector("#modal-exit")

const modal3 = document.querySelector(".modal-container-3")
const searchRight = document.querySelector("#search-right")
const modalExit3 = document.querySelector("#modal-exit-3") 

const chatHeader = document.querySelector("#chat-header")
const modal2 = document.querySelector(".modal-content-2")
const modalExit2 = document.querySelector(".modal-header-2")

const dropdown = document.querySelector("#show-dropdown")
const menu = document.querySelector("#main-menu")

const message = document.querySelector("#menu1")
const menu1 = document.querySelector("#message-menu")

const modal4 = document.querySelector(".modal-content-3")
const quest1 = document.querySelector("#quest1")
const contentExit = document.querySelector("#content-exit-3")
const newgroup = document.querySelector(".new-group")

const modal5 = document.querySelector(".modal-content-4")
const quest2 = document.querySelector("#quest2")
const contentExit1 = document.querySelector("#content-exit-1")

const modal6 = document.querySelector(".modal-content-5")
const quest3 = document.querySelector("#quest3")
const contentExit2 = document.querySelector("#content-exit-2")

const logout = document.querySelector(".overlay-container1")
const quest4 = document.querySelector("#quest4")
const cancel1 = document.querySelector("#cancel1")
const body = document.querySelector("body")

const rule1 = document.querySelector("#rule1")

const rule3 = document.querySelector("#rule3")
const chatinfos = document.querySelectorAll(".chat-info")
const closechat = document.querySelector(".close-chat-container")

const rule4 = document.querySelector("#rule4")
const Overlay1 = document.querySelector(".overlay-container")
const cancel = document.querySelector("#cancel")

const rule5 = document.querySelector("#rule5")
const overlay3 = document.querySelector(".overlay-container-3")
const overlayexit = document.querySelector("#modal-exit-6")

const rule6 = document.querySelector("#rule6")
const clearchat = document.querySelector(".clear-chat")
const cancel2 = document.querySelector("#cancel2")

const rule7 = document.querySelector("#rule7")
const deletechat = document.querySelector(".delete-chat")
const cancel3 = document.querySelector("#cancel3")

const settingnotification = document.querySelector(".Settings-notification")
const modal7 = document.querySelector(".modal-content-7")
const contentExit7 = document.querySelector("#content-exit-7")

const privacy = document.querySelector(".Settings-privacy")
const modal8 = document.querySelector(".modal-content-8")
const contentExit8 = document.querySelector("#content-exit-8")

const security = document.querySelector(".Settings-security")
const securityContainer = document.querySelector(".security-container")
const securityIcon = document.querySelector(".security-icon")

const chatList = document.getElementById('chatlist');





//Show modal content
btn.onclick = function(){
        modal.style.transform = "translateX(0%)";
        menu1.style.display = "none"
        menu.style.display = "none"
}

span.onclick = function(){
    modal.style.transform = "translateX(-100%)";
}

imgprofile.onclick = function(){
  modal.style.transform = "translateX(0%)";
  menu1.style.display = "none"
  menu.style.display = "none"
  modal6.style.transform = "translateX(-100%)"
}

span.onclick = function(){
modal.style.transform = "translateX(-100%)";
}

//Show contact information div
messageContainer.onclick = function(){
    modal1.style.display = "block"
    modal3.style.display = "none"
    overlay3.style.display = "none"
}
modalExit.onclick = function(){
    modal1.style.display = "none"
}


//displaying the right search bar
searchRight.onclick = function(){
    modal3.style.display = "block"
    modal1.style.display = "none"
    overlay3.style.display = "none"
}
modalExit3.onclick = function(){
    modal3.style.display = "none"
}

//chat header displaying new group div
chatHeader.onclick = function(){
    modal2.style.transform = "translateX(0%)"
    menu1.style.display = "none"
    menu.style.display = "none"
}
modalExit2.onclick = function(){
    modal2.style.transform = "translateX(-100%)"
}


//Show dropdown options
 dropdown.onclick = function(){
    if(menu.style.display === "none"){
        menu.style.display = "block"
        menu1.style.display = "none"
    }else{
        menu.style.display = "none"
    }
 }

 //menu1 right 
  message.onclick = function(){
    if(menu1.style.display === "none"){
        menu1.style.display = "block"
        menu.style.display = "none"
    }else{
        menu1.style.display = "none"
    }
  }

//modal content 3
  quest1.onclick = function(){
    modal4.style.transform = "translateX(0%)"
    menu1.style.display = "none"
    menu.style.display = "none"
  }
  contentExit.onclick = function(){
    modal4.style.transform = "translateX(-100%)"
  }

//modal content 4
quest2.onclick = function(){
    modal5.style.transform = "translateX(0%)"
    menu1.style.display = "none"
    menu.style.display = "none"
  }
  contentExit1.onclick = function(){
    modal5.style.transform = "translateX(-100%)"
  }

  //modal content 5
quest3.onclick = function(){
    modal6.style.transform = "translateX(0%)"
    menu1.style.display = "none"
    menu.style.display = "none"
  }
  contentExit2.onclick = function(){
    modal6.style.transform = "translateX(-100%)"
  }

//notifications 
  settingnotification.onclick = function(){
    modal7.style.display = "block";
    menu1.style.display = "none"
    menu.style.display = "none"
  }
  
  contentExit7.onclick = function(){
  modal7.style.display = "none";
  }

//Privacy
privacy.onclick = function(){
  modal8.style.display = "block";
  menu1.style.display = "none"
  menu.style.display = "none"
}

contentExit8.onclick = function(){
modal8.style.display = "none";
}

//Security
security.onclick = function(){
  securityContainer.style.display = "block";
  menu1.style.display = "none"
  menu.style.display = "none"
}

securityIcon.onclick = function(){
securityContainer.style.display = "none";
}


//displaying dropdown layout
quest4.onclick = function(){
    logout.style.display = "block"
    menu.style.display = "none"
}
cancel1.onclick = function(){
    logout.style.display = "none"  
}

//menu right contack info
rule1.onclick = function(){
        modal1.style.display = "block"
        modal3.style.display = "none"
}
modalExit.onclick = function(){
        modal1.style.display = "none"
}

//close chat
rule3.onclick = function(){
    closechat.style.display = "block"
    modal3.style.display = "none"
    menu1.style.display = "none"
    modal1.style.display = "none"
    logout.style.display = "none"
}
chatinfos.forEach(chartinfo => {
    chartinfo.addEventListener('click', event => {
      closechat.style.display = "none"
    })
  })

rule4.onclick = function(){
  Overlay1.style.display = "block"
  modal1.style.display = "none"
  modal3.style.display = "none"
  menu1.style.display = "none"
  logout.style.display = "none"
}
cancel.onclick = function(){
  Overlay1.style.display = "none"
}

rule6.onclick = function(){
  clearchat.style.display = "block"
  modal1.style.display = "none"
  modal3.style.display = "none"
  menu1.style.display = "none"
  logout.style.display = "none"
}
cancel2.onclick = function(){
  clearchat.style.display = "none"
}


rule7.onclick = function(){
  deletechat.style.display = "block"
  modal1.style.display = "none"
  modal3.style.display = "none"
  menu1.style.display = "none"
  logout.style.display = "none"
}
cancel3.onclick = function(){
  deletechat.style.display = "none"
}


//
rule5.onclick = function(){
  overlay3.style.display = "block"
  modal1.style.display = "none"
  modal3.style.display = "none"
}
overlayexit.onclick = function(){
  overlay3.style.display = "none"
}


//fetch chatlist API
//'https://randomuser.me/api/?results=15'
// Using APIs
// Using APIs

fetch('https://randomuser.me/api/?results=15', {
    method: 'GET'
}).then(response => response.json())
.then((data) => {
    const users = data['results'];

    for (const user of users) {
        const html = `<div class="sidebar-chat">
        <div class="chat-avatar">
           <i class="material-symbols-outlined" src="${user.picture.thumbnail}">account_circle</i>
        </div>
        <div class="chat-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>last message</p>
        </div>
        <div class="chat-time">
            <p>1:02 pm</p>
            <button><i class="fa-solid fa-caret-down"></i></button>
        </div>
      </div>`;


        chatList.innerHTML += html
    }

});


/*
    for (const user of users) {
      const html = 
        
        <div class="sidebar-chat">
        <div class="chat-avatar">
           <i class="material-symbols-outlined" src="${user.picture.thumbnail}">account_circle</i>
        </div>
        <div class="chat-info">
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>last message</p>
        </div>
        <div class="chat-time">
            <p>1:02 pm</p>
            <button><i class="fa-solid fa-caret-down"></i></button>
        </div>
      </div>;

        chatList.innerHTML += html
    }







    `<div class="chat-card">
                    <div class="image">
                        <img src="${user.picture.thumbnail}" />
                    </div>
                    <div class="message">
                        <h4 class="name">${user.name.first} ${user.name.last}</h4>
                        <p class="message-text">
                            The google verification did not work this time please
                            try again later when you have more internet.
                        </p>
                    </div>
                    <div class="actions">
                        <p class="time">12:30 pm</p>
                    </div>
            </div>`;

*/



/*let chats = [ 
    { 
        name: 'Hubert Formin',
        status: 'Are you at the office?',
        imageUrl: 'https://randomuser.me/male/44.jpg'
    }
]

function searchChat(e) {
    const value = e.target.value;
    // search for chat
    const results = chats.filter((chat, index) => {
        const searchRegex = new RegExp(value, 'gi');
        return chat.name.test(searchRegex);
    })
}

// https://randomuser.me/api/
const apiUrl = "https://randomuser.me/api/";

fetch(apiUrl, {
    method: 'GET'
}).then(response => response.json())
.then((data) => console.log(data))*/
