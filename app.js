 $(document).ready(function () {

     $(".hamburger .fa").click(function () {
         document.querySelector(".topbar").classList.toggle("show");
     })

     $("a").click(function () {
         var i=$(this).data("value");
         if(i!=1){
         $("a").removeClass("active");
         $(this).addClass("active");
         if ($(window).width() <= 964) {
             document.querySelector(".topbar").classList.toggle("show");
         }
         }

     });
     $(".sd1").click(function () {
         var yourMessage = document.getElementById("comment").value
         var Name = document.getElementById("cd2").value
         if (Name != null && yourMessage != null) {
             var mail = "mailto:ssanjaynkl1999@gmail.com?subject=" + "Hi THis is " + Name + "&body=" + yourMessage;
             $('#comment').val("");
              $('#cd2').val("");

             window = window.open(mail, 'emailWindow');
         } else {
             alert("Empty Field cannot be sent");
         }
     })
     window.sr = ScrollReveal({
         reset: true
     });

     // Customizing a reveal set
     sr.reveal('.about-header, .profile, .container-fluid, .me_c, .img-fluid, .block, .horizontal, .skill-header1, .SKILL, project-header1, .project-content,.project-content1, p, .project1, .ac_1, .aw, .ct, .SKILL1', {
         origin: 'top',
         duration: 500,
         distance: '20px'
     });

 });

 function sendMail() {

 }