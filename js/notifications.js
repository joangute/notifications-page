let unread=document.querySelectorAll(".unread");
const unread_total=document.querySelector(".unread_total");
const mark_read=document.querySelector(".mark_read");
let x=Number(unread_total.innerHTML);

for(let i=0;i<unread.length;i++)
{
  unread[i].addEventListener("click",function(){
    this.classList.remove("unread");
    x--;
    unread_total.innerHTML=x;
  });
}

mark_read.addEventListener("click",function(){
  unread=document.querySelectorAll(".unread");
  for(let i=0;i<unread.length;i++)
  {
    unread[i].classList.remove("unread");
  }
  unread_total.innerHTML="0";
});