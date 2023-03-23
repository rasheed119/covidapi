var div = document.createElement("div");
div.setAttribute("class","text-center");

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
input.setAttribute("placeholder","Country Name");
input.style.padding="5px";
input.style.borderRadius="6px";

var search = document.createElement("button");
search.setAttribute("type","button");
search.classList.add("btn","btn-primary");
search.style.marginLeft="20px"
search.innerHTML="Search Data"
search.addEventListener("click",result);

var active = document.createElement("div");
active.setAttribute("class","text-center");

var Death = document.createElement("div");
active.setAttribute("class","text-center");

var Recoverd = document.createElement("div");
active.setAttribute("class","text-center");


div.append(input,search,active,Death,Recoverd);
document.body.append(div);

async function result(){
  try {
    var name = document.getElementById("country").value;
    var url = `https://api.covid19api.com/dayone/country/${name}`;
    var res = await fetch(url);
    var res1 = await res.json();
    var i = res1.length -1;
    var active_cases = res1[i].Active;
    var death = res1[i].Deaths;
    var recovered = res1[i].Recovered;
    active.innerHTML=`Total active Cases : ${active_cases}`;
    Death.innerHTML=`Total Deaths : ${death}`;
    Recoverd.innerHTML=`Total Recoverd : ${recovered}`;
  } catch (error) {
    alert("PLEASE ENTER THE VALID INPUT");
  }
}