console.log("custom elements script is connected")

//OOP -- Inhertiance
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <h1> The Resume of Andrew Diggins </h1>
            <div id="navigationButtons">
                <button onclick=" window.location.href = 'index.html' "> Home </button>
                <button onclick=" window.location.href = 'HTMLGames.html' "> HTML Games </button>
                <button onclick=" window.location.href = 'Game1.html' "> Game 1 </button>
                <button onclick=" window.location.href = 'Game2.html' "> Game 2 </button>
                <button onclick=" window.location.href = 'Game3.html' "> Game 3 </button>
            </div>
        `
    }
}

class MyFooter extends HTMLElement {
   connectedCallback() {
        this.innerHTML = `
            <p> ↓ ↓ Like you see? Get in contact! ↓ ↓ </p>
            <form action="" id="footerForm">
                <div class="footerFormRow" id="footer_row1">
                    <input type="text" placeholder="NAME">
                    <input type="text" placeholder="COMPANY">
                    <input type="text" placeholder="EMAIL">
                </div>
                <div class="footerFormRow" id="footer_row2">
                    <input type="text" placeholder="FEEDBACK">
                    <input type="submit" id="footer_FormSubmit">
                </div>
            </form>
        `
   } 
}

class MyOpener extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div id = 'opener'>
                <form action="https://api.web3forms.com/submit" method="POST" id="VisitorForm">
                    <input type="hidden" name="access_key" value="ba7863c2-3747-4387-be29-e34ffd7f5549">
                    <label for=""> Name <input type="text" id="visitorName" name='visitorName'> </label>
                    <label for=""> Company <input type="text" id="visitorCompany" name='visitorCompany'> </label>
                    <input type="submit" id="SubmitVisitor" value="Submit Details" >
                    <input type="button" id="SubmitAnon" value="Abstain for now">
                </form>
            </div>
        `
    }
}

customElements.define('my-header', MyHeader);
customElements.define('my-footer', MyFooter);
customElements.define('my-opener', MyOpener);