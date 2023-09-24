const section = document.createElement('section');
section.style.backgroundColor = 'rgba(37, 43, 66, 1)';
document.body.appendChild(section);

const container = document.createElement('div');
container.style.maxWith = '1440px';
container.style.margin = '0 auto';
section.appendChild(container);

const wrapper = document.createElement('div');
wrapper.style.display = 'flex';
wrapper.style.flexDirection = 'column';
wrapper.style.justifyContent = 'flex';
wrapper.style.alignItems = 'center';
wrapper.style.textAlign = 'center';
wrapper.style.padding = '40px 0px 40px 0px';
container.appendChild(wrapper);

const aboutSiteBox = document.createElement('div');
aboutSiteBox.style.flexDirection = 'column';
aboutSiteBox.style.justifyContent = 'flex';
aboutSiteBox.style.alignItems = 'center';
aboutSiteBox.style.marginTop = '80px';
aboutSiteBox.style.fontWeight = 'bold';
aboutSiteBox.style.letterSpacing = '0.1px';
wrapper.appendChild(aboutSiteBox);

const aboutSiteWelcomeTitle = document.createElement('h5');
aboutSiteWelcomeTitle.textContent = 'Welcome';
aboutSiteWelcomeTitle.style.color = 'rgba(35, 166, 240, 1)';
aboutSiteBox.appendChild(aboutSiteWelcomeTitle);

const aboutSiteH1Title = document.createElement('h1');
aboutSiteH1Title.innerHTML = 'Selling on the <br> internet like a pro';
aboutSiteH1Title.style.color = 'rgba(255, 255, 255, 1)';
aboutSiteH1Title.style.lineHeight = '80px';
aboutSiteH1Title.style.paddingTop = '30px';
aboutSiteH1Title.style.fontSize = '58px';
aboutSiteBox.appendChild(aboutSiteH1Title);

const aboutSiteH4Title = document.createElement('h4');
aboutSiteH4Title.innerHTML = 'We know how large objects will act, but things on a <br> small scale just do not act that way.';
aboutSiteH4Title.style.color = 'rgba(255, 255, 255, 1)';
aboutSiteH4Title.style.fontSize = '20px';
aboutSiteH4Title.style.lineHeight = '30px';
aboutSiteH4Title.style.paddingTop = '30px';
aboutSiteH4Title.style.fontWeight = '400';
aboutSiteH4Title.style.letterSpacing = '0.2px';
aboutSiteBox.appendChild(aboutSiteH4Title);

const wrapperBtnBox = document.createElement('div');
wrapperBtnBox.style.display = 'flex';
wrapperBtnBox.style.justifyContent = 'center';
wrapperBtnBox.style.alignItems = 'center';
wrapperBtnBox.style.marginTop = '30px';
wrapperBtnBox.style.gap = '10px';
aboutSiteBox.appendChild(wrapperBtnBox);

const leftBtnBox = document.createElement('a');
leftBtnBox.textContent = 'Get Quote Now';
leftBtnBox.style.color = 'rgba(35, 166, 240, 1)';
wrapperBtnBox.appendChild(leftBtnBox);

const rightBtnBox = document.createElement('a');
rightBtnBox.textContent = 'Learn More';
rightBtnBox.style.color = 'rgba(35, 166, 240, 1)';
wrapperBtnBox.appendChild(rightBtnBox);


import { wrapperBtnBoxStyle } from './module.js';
wrapperBtnBoxStyle(leftBtnBox);
wrapperBtnBoxStyle(rightBtnBox);

import { btnHover } from './module.js';
btnHover(leftBtnBox);
btnHover(rightBtnBox);


const mainCard = document.createElement('div');
mainCard.style.display = 'flex';
mainCard.style.gap = '30px';
mainCard.style.marginTop = '80px';
wrapper.appendChild(mainCard);

const cardLeft = document.createElement('div');
cardLeft.style.display = 'flex';
cardLeft.style.flexDirection = 'column';
cardLeft.style.rowGap = '20px';
cardLeft.style.padding = '35px 40px 35px 40px';
cardLeft.style.backgroundColor = 'rgba(255, 255, 255, 1)';
mainCard.appendChild(cardLeft);

const cardLeftIconDiv = document.createElement('div');
cardLeftIconDiv.style.width = '70px';
cardLeftIconDiv.style.height = '76px';
cardLeftIconDiv.style.backgroundColor = 'rgba(255, 220, 209, 1)';
cardLeftIconDiv.style.padding = '22px 19px 22px 19px';
cardLeftIconDiv.style.borderRadius = '10px';
cardLeft.appendChild(cardLeftIconDiv);

const cardLeftImg = document.createElement('img');
cardLeftImg.src = 'img/icon emoge.PNG';
cardLeftIconDiv.appendChild(cardLeftImg);

const cardLeftTitle = document.createElement('h3');
cardLeftTitle.textContent = 'training Courses';
cardLeftTitle.style.textAlign = 'left';
cardLeftTitle.style.color = 'rgba(37, 43, 66, 1)';
cardLeftTitle.style.fontSize = '16px';
cardLeft.appendChild(cardLeftTitle);

const cardLeftLine = document.createElement('div');
cardLeftLine.style.width = '50px';
cardLeftLine.style.height = '2px';
cardLeftLine.style.backgroundColor = 'rgba(231, 64, 64, 1)';
cardLeft.appendChild(cardLeftLine);

const cardLeftParagraph = document.createElement('p');
cardLeftParagraph.innerHTML = `The gradual accumulation of <br>
information about atomic and <br>
small-scale behaviour...`;
cardLeftParagraph.style.textAlign = 'left';
cardLeftParagraph.style.fontSize = '14px'
cardLeftParagraph.style.color = 'rgba(115, 115, 115, 1)';
cardLeft.appendChild(cardLeftParagraph);

const cardMiddle = document.createElement('div');
cardMiddle.style.display = 'flex';
cardMiddle.style.flexDirection = 'column';
cardMiddle.style.rowGap = '20px';
cardMiddle.style.padding = '35px 40px 35px 40px';
cardMiddle.style.backgroundColor = 'rgba(255, 255, 255, 1)';
mainCard.appendChild(cardMiddle);

const cardMiddleIconDiv = document.createElement('div');
cardMiddleIconDiv.style.width = '70px';
cardMiddleIconDiv.style.height = '76px';
cardMiddleIconDiv.style.backgroundColor = 'rgba(185, 234, 168, 1)';
cardMiddleIconDiv.style.padding = '22px 19px 22px 19px';
cardMiddleIconDiv.style.borderRadius = '10px';
cardMiddle.appendChild(cardMiddleIconDiv);

const cardMiddleImg = document.createElement('img');
cardMiddleImg.src = 'img/icon cool.PNG';
cardMiddleIconDiv.appendChild(cardMiddleImg);

const cardMiddleTitle = document.createElement('h3');
cardMiddleTitle.textContent = '2,769 online courses';
cardMiddleTitle.style.textAlign = 'left';
cardMiddleTitle.style.color = 'rgba(37, 43, 66, 1)';
cardMiddleTitle.style.fontSize = '16px';
cardMiddle.appendChild(cardMiddleTitle);

const cardMiddleLine = document.createElement('div');
cardMiddleLine.style.width = '50px';
cardMiddleLine.style.height = '2px';
cardMiddleLine.style.backgroundColor = 'rgba(231, 64, 64, 1)';
cardMiddle.appendChild(cardMiddleLine);

const cardMiddleParagraph = document.createElement('p');
cardMiddleParagraph.innerHTML = `The gradual accumulation of <br>
information about atomic and <br>
small-scale behaviour...`;
cardMiddleParagraph.style.textAlign = 'left';
cardMiddleParagraph.style.fontSize = '14px'
cardMiddleParagraph.style.color = 'rgba(115, 115, 115, 1)';
cardMiddle.appendChild(cardMiddleParagraph);

const cardRight = document.createElement('div');
cardRight.style.display = 'flex';
cardRight.style.flexDirection = 'column';
cardRight.style.rowGap = '20px';
cardRight.style.padding = '35px 40px 35px 40px';
cardRight.style.backgroundColor = 'rgba(255, 255, 255, 1)';
mainCard.appendChild(cardRight);

const cardRightIconDiv = document.createElement('div');
cardRightIconDiv.style.width = '70px';
cardRightIconDiv.style.height = '76px';
cardRightIconDiv.style.backgroundColor = '#C0C0C0';
cardRightIconDiv.style.padding = '22px 19px 22px 19px';
cardRightIconDiv.style.borderRadius = '10px';
cardRight.appendChild(cardRightIconDiv);

const cardRightImg = document.createElement('img');
cardRightImg.src = 'img/icon cool-icon-15.PNG';
cardRightIconDiv.appendChild(cardRightImg);

const cardRightTitle = document.createElement('h3');
cardRightTitle.textContent = 'training Courses';
cardRightTitle.style.textAlign = 'left';
cardRightTitle.style.color = 'rgba(37, 43, 66, 1)';
cardRightTitle.style.fontSize = '16px';
cardRight.appendChild(cardRightTitle);

const cardRightLine = document.createElement('div');
cardRightLine.style.width = '50px';
cardRightLine.style.height = '2px';
cardRightLine.style.backgroundColor = 'rgba(231, 64, 64, 1)';
cardRight.appendChild(cardRightLine);

const cardRightParagraph = document.createElement('p');
cardRightParagraph.innerHTML = `The gradual accumulation of <br>
information about atomic and <br>
small-scale behaviour...`;
cardRightParagraph.style.textAlign = 'left';
cardRightParagraph.style.fontSize = '14px'
cardRightParagraph.style.color = 'rgba(115, 115, 115, 1)';
cardRight.appendChild(cardRightParagraph);

const cardsHoverStyle = (card, cardLogo, cardTitle, cardLine, cardP ) => {
    const defaultStyle = {
        cardBackgroundColor: card.style.backgroundColor,
        logoBackgroundColor: cardLogo.style.backgroundColor,
        titleColor: cardTitle.style.color,
        lineBackgroundColor: cardLine.style.backgroundColor,
        pColor: cardP.style.color
    }

    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = 'rgba(35, 166, 240, 1)';
        cardLogo.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        cardTitle.style.color = 'rgba(255, 255, 255, 1)';
        cardLine.style.backgroundColor = 'rgba(255, 255, 255, 1)';
        cardP.style.color = 'rgba(255, 255, 255, 1)';
        card.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = defaultStyle.cardBackgroundColor;
        cardLogo.style.backgroundColor = defaultStyle.logoBackgroundColor;
        cardTitle.style.color = defaultStyle.titleColor;
        cardLine.style.backgroundColor = defaultStyle.lineBackgroundColor;
        cardP.style.color = defaultStyle.pColor;
    });
}

cardsHoverStyle(cardLeft, cardLeftIconDiv, cardLeftTitle, cardLeftLine, cardLeftParagraph );
cardsHoverStyle(cardMiddle, cardMiddleIconDiv, cardMiddleTitle, cardMiddleLine, cardMiddleParagraph );
cardsHoverStyle(cardRight, cardRightIconDiv, cardRightTitle, cardRightLine, cardRightParagraph );

const footer = document.createElement('footer');
footer.style.backgroundColor = 'white';
footer.style.marginTop = '50px';
footer.style.padding = '100px 0';
container.appendChild(footer);

const footerUpperContent = document.createElement('div');
footerUpperContent.style.display = 'flex';
footerUpperContent.style.flexDirection = 'column';
footerUpperContent.style.justifyContent = 'center';
footerUpperContent.style.alignItems = 'center';
footerUpperContent.style.textAlign = 'center';
footer.appendChild(footerUpperContent);

const footerTag = document.createElement('h6');
footerTag.textContent = 'Practice Advice';
footerTag.style.color = 'rgba(35, 166, 240, 1)';
footerTag.style.fontSize = '14px';
footerTag.style.letterSpacing = '0.2px';
footerUpperContent.appendChild(footerTag);

const footerTitle = document.createElement('h2');
footerTitle.textContent = 'Featured Products';
footerTitle.style.fontSize = '50px';
footerTitle.style.letterSpacing = '0.2px';
footerTitle.style.paddingTop = '10px'
footerUpperContent.appendChild(footerTitle);

const footerP = document.createElement('p');
footerP.innerHTML = `Problems trying to resolve the conflict between 
<br> the two major realms of Classical physics: Newtonian mechanics`;
footerP.style.fontSize = '14px';
footerP.style.letterSpacing = '0.2px';
footerP.style.paddingTop = '10px';
footerP.style.color = 'rgba(115, 115, 115, 1)';
footerUpperContent.appendChild(footerP);

const inpContentBox = document.createElement('div');
footerUpperContent.appendChild(inpContentBox);

const inp = document.createElement('input');
inp.style.marginTop = '80px';
inp.style.padding = '15px 200px 15px 20px';
inp.style.outline = 'none';
inp.style.borderRadius = '5px';
inp.style.border = '1px solid rgba(230, 230, 230, 1)';
inp.setAttribute('placeholder', 'Your Email');
inpContentBox.appendChild(inp);

const footerBtn = document.createElement('button');
footerBtn.textContent = 'Subscribe';
footerBtn.style.padding = '15px';
footerBtn.style.border = 'none';
footerBtn.style.color = 'white';
footerBtn.style.cursor = 'pointer';
footerBtn.style.letterSpacing = '0.2px';
footerBtn.style.borderRadius = '0px, 5px, 5px, 0px';
footerBtn.style.backgroundColor = 'rgba(35, 166, 240, 1)';
inpContentBox.appendChild(footerBtn);



