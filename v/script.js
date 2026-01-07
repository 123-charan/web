document.addEventListener("DOMContentLoaded",()=>{

  // HERO ANIMATION
  const hero=document.querySelector(".hero");
  if(hero){setTimeout(()=>hero.classList.add("show"),300);}

  // CARDS ANIMATION
  const cards=document.querySelectorAll(".card");
  cards.forEach((c,i)=>{setTimeout(()=>c.classList.add("show"),500+i*200);});

});

// WHATSAPP BOOKING
function sendWhatsApp(e){
  e.preventDefault();
  const text =
`EKA – Content Company
-----------------------
Client Name: ${name.value}
Service: ${service.value}
Platform: ${platform.value}
Preferred Date: ${date.value}
Preferred Time: ${time.value}

Requirement:
${msg.value}`;
  window.open("https://wa.me/917032263580?text="+encodeURIComponent(text),"_blank");
}
