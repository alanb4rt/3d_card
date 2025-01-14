export const mouseMove = (event, cardRef) => {
    const cardRect = cardRef.current.getBoundingClientRect();

    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;

    const offsetX = ((event.clientX - centerX) / cardRect.width) * 45;
    const offsetY = ((event.clientY - centerY) / cardRect.height) * 45;

    cardRef.current.style.setProperty("--rotateX", offsetY + "deg");
    cardRef.current.style.setProperty("--rotateY", -1 * offsetX + "deg");
};

export const mouseOut = (cardRef) => cardRef.current.removeAttribute("style");