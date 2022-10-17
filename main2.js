const lightbox = document.getElementById("lightbox");
const lightboxHolder = document.getElementById("lightbox-image");

openLightbox = (element) => {
 lightboxHolder.src = element.src;
 lightbox.classList.remove("hidden");
};

closeLightbox = () => lightbox.classList.add("hidden");




 function changepic001(V) { document.getElementById(V).src = "ImgG.jpg"; }
 
 function changepic(V1) { document.getElementById(V1).src = "Img.jpg"; }

  
  
  
  function changepic0(W) { document.getElementById(W).src = "whatsapp-logo-app-png-4.png"; }
  
  function changepic_0(C) { document.getElementById(C).src = "Call.png"; }
  
  function changepic01(W1) { document.getElementById(W1).src = "whatsapp-logo-app-png-4.png"; }
  
  function changepic_1(C1) { document.getElementById(C1).src = "Call.png"; }
