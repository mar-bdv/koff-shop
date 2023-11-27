import logoImg from '/img/logo.svg';

export class Logo {
    constructor(mainClassName) {
        this.mainClassName = mainClassName
    }

    create() {
        const logo = document.createElement("a");
        logo.classList.add(`${this.mainClassName}__link-logo`);
        logo.href = "/";

        const imgLogo = new Image();
        imgLogo.classList.add(`${this.mainClassName}__logo`)
        imgLogo.src = logoImg;
        imgLogo.alt = "Логотип мебельного маркета Koff";
        
        logo.append(imgLogo);
        return logo;
    }
}




















// import logoImg from '/img/logo.svg';


// export const getLogo = (mainClassName) => {
//     const logo = document.createElement("a");
//     logo.classList.add(`${mainClassName}__link-logo`);
//     logo.href = "/";

//     const imgLogo = new Image();
//     imgLogo.classList.add(`${mainClassName}__logo`)
//     imgLogo.src = logoImg;
//     imgLogo.alt = "Логотип мебельного маркета Koff";
    
//     logo.append(imgLogo);
//     return logo;
// }