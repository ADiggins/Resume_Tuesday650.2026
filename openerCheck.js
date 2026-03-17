console.log("Testing the OpenerCheck.js")

var openerElement;

window.customElements.whenDefined('my-opener').then(function () {
    openerElement = document.getElementById("opener");

    if (sessionStorage.getItem("visitorName") == null)
        openerElement.style.display = "block";
    else
        openerElement.style.display = "none";

    document.getElementById("VisitorForm").addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method:event.target.method,
            body:formData
        })
        registerNewVisitor(false);
        openerElement.style.display = "none";
    })

    // document.getElementById("SubmitVisitor").addEventListener('click', function (event) {
    //     event.preventDefault();
    //     registerNewVisitor(false);
    //     openerElement.style.display = "none"
    // })

    document.getElementById("SubmitAnon").addEventListener('click', function (event) {
        event.preventDefault();
        registerNewVisitor(true);
        openerElement.style.display = "none"
    })
})



// sessionStorage.setItem("visitorName", "Mickey Mouse");
//TURN THESE OFF WHEN WE'RE READY TO LAUNCH THE SITE!
sessionStorage.removeItem("visitorName");
sessionStorage.removeItem("visitorCompany");


function registerNewVisitor(anonCheck) {
    if (anonCheck) {
        sessionStorage.setItem("visitorName", "anon")
        sessionStorage.setItem("visitorCompany", "anon")
    } else {
        sessionStorage.setItem("visitorName", document.getElementById("visitorName").value)
        sessionStorage.setItem("visitorCompany", document.getElementById("visitorCompany").value)
    }
}



