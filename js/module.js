export const wrapperBtnBoxStyle = (buttonStyles) => {
    buttonStyles.style.color = "#23A6F0";
    buttonStyles.style.fontWeight = "700";
    buttonStyles.style.fontSize = "14px";
    buttonStyles.style.lineHeight = "22px";
    buttonStyles.style.padding = "15px 40px 15px 40px";
    buttonStyles.style.border = "1px solid #23A6F0";
    buttonStyles.style.borderRadius = "5px";
    buttonStyles.style.display = "flex";
    buttonStyles.style.justifyContent = "center";
    buttonStyles.style.alignItems = "center";
    buttonStyles.style.transition = "0.3s";
    buttonStyles.style.cursor = "pointer";
};

export const btnHover = (buttonStyles) => {
    buttonStyles.addEventListener('mouseover', () => {
        buttonStyles.style.color = "rgba(255, 255, 255, 1)";
        buttonStyles.style.backgroundColor = "rgba(35, 166, 240, 1)";
    });

    buttonStyles.addEventListener('mouseout', () => {
        buttonStyles.style.color = "rgba(35, 166, 240, 1)"
        buttonStyles.style.backgroundColor = "#252B42"
    });
};




