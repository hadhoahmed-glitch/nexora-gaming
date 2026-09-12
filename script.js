const games=[
{name:"PUBG Mobile",cat:"action",icon:"🔫",rating:"4.8",players:"1B+"},
{name:"eFootball",cat:"sports",icon:"⚽",rating:"4.6",players:"500M+"},
{name:"Fortnite",cat:"action",icon:"🪂",rating:"4.5",players:"500M+"},
{name:"Minecraft",cat:"rpg",icon:"⛏️",rating:"4.9",players:"300M+"},
{name:"EA SPORTS FC",cat:"sports",icon:"🏟️",rating:"4.4",players:"100M+"},
{name:"Genshin Impact",cat:"rpg",icon:"✨",rating:"4.7",players:"80M+"},
{name:"Call of Duty",cat:"action",icon:"🎯",rating:"4.6",players:"100M+"},
{name:"Roblox",cat:"rpg",icon:"🧱",rating:"4.5",players:"200M+"}
];

let category="all";

function renderGames(){
 const q=(document.getElementById("search")?.value||"").toLowerCase();
 const list=games.filter(g=>
   (category==="all"||g.cat===category)&&
   g.name.toLowerCase().includes(q)
 );

 document.getElementById("gameGrid").innerHTML=list.map(g=>`
 <article class="card">
   <div class="cover">${g.icon}</div>
   <div class="card-body">
     <h3>${g.name}</h3>
     <div class="stars">★★★★★ <span class="muted">${g.rating}</span></div>
     <p class="muted">👥 ${g.players} لاعب</p>
     <button class="secondary" onclick="gameInfo('${g.name}')">التفاصيل</button>
   </div>
 </article>`).join("");
}

function filterCat(c,btn){
 category=c;
 document.querySelectorAll(".chips button").forEach(x=>x.classList.remove("active"));
 btn.classList.add("active");
 renderGames();
}

function filterGames(){
 renderGames();
}

function gameInfo(name){
 alert("🎮 "+name+"\n\nصفحة تفاصيل اللعبة جاهزة للتوسعة.");
}

function openLogin(){
 document.getElementById("modal").style.display="flex";
}

function closeLogin(){
 document.getElementById("modal").style.display="none";
}

function fakeLogin(){
 document.getElementById("msg").textContent="تم تسجيل الدخول تجريبيًا بنجاح 🎮";
}

function joinTournament(){
 alert("🏆 التسجيل في البطولة — سيتم ربطه بقاعدة بيانات لاحقًا.");
}

function toggleMenu(){
 const n=document.getElementById("navLinks");
 n.style.display=n.style.display==="flex"?"none":"flex";
 n.style.flexDirection="column";
 n.style.position="absolute";
 n.style.top="72px";
 n.style.right="0";
 n.style.background="#0b0d16";
 n.style.padding="20px";
 n.style.width="200px";
}

renderGames();
