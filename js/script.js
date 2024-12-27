/* ================================== typing animation ================================ */
var typed = new Typed(".typing", {
    strings: ["","Web Designer","Student", "Backend Developer", "AI Fan"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop:true
})

/* ====================================== Aside ===========================================*/
const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    allSection = document.querySelectorAll(".section");
    totalSection = allSection.length;
    for (let i = 0; i<totalNavList; i++) 
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let i = 0 ; i<totalNavList; i++) 
                {
                    allSection[i].classList.remove("back-section");
                }
            for(let j = 0 ; j<totalNavList; j++) 
            {
                if (navList[j].querySelector("a").classList.contains("active"))
                {
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");  
            showSection(this)          
        })
    }
    function showSection(element){
        for(let i = 0 ; i<totalNavList; i++) 
            {
                allSection[i].classList.remove("active");
            }
        const target = element.getAttribute("href").split("#")[1];
       
       document.querySelector("#" + target).classList.add("active")
    }
    function updateNav(element){
        for (let i = 0; i<totalNavList; i++) 
        {
            navList[i].querySelector("a").classList.remove("active");
            const target = element.getAttribute("href").split("#")[1];
            if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }
    document.querySelector(".hire-me").addEventListener("click", function(){
        showSection(this);
        updateNav(this);
    })
    const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
    navTogglerBtn.addEventListener("click", () => 
    {
        asideSectionTogglerBtn();
    })
    function asideSectionTogglerBtn() 
    {
        aside.classList.toggle("open");
        navTogglerBtn.classList.toggle("open");
        for (let i = 0; i<totalSection; i++)
        {
            allSection[i].classList.toggle("open");
        }
    }

/** ============================================ From =========================================*/
    // Remplacez par vos IDs EmailJS
const serviceID = "yourServiceID";
const templateID = "yourtemplateID";
const publicKey = "Yourpublikey";

// Fonction pour envoyer le formulaire
document.querySelector(".contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    // Récupérer les valeurs des champs
    const name = document.querySelector("input[placeholder='Name']").value;
    const email = document.querySelector("input[placeholder='Email']").value;
    const subject = document.querySelector("input[placeholder='Subject']").value;
    const message = document.querySelector("textarea[placeholder='Message']").value;


    if (!name || !email || !subject || !message) {
        alert("Please fill out all fields.");
        return false;
    }

    // Préparer les données pour EmailJS
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
    };
    console.log(templateParams);
    
    // Envoyer l'email via EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
        .then((response) => {
            alert("Message sent successfully!");
            // Réinitialiser les champs
            document.querySelector("input[placeholder='Name']").value = "";
            document.querySelector("input[placeholder='Email']").value = "";
            document.querySelector("input[placeholder='Subject']").value = "";
            document.querySelector("textarea[placeholder='Message']").value = "";
        })
        .catch((error) => {
            alert("Failed to send the message. Please try again later.");
            console.error("EmailJS error:", error);
        });
});

    

    

