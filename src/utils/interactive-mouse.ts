interface CardRef {
  current: HTMLDivElement | null;
}

export const mouseMove = (e: React.MouseEvent, cardRef: CardRef) => {
  const card = cardRef.current;

  if (!card) return;

  const cardRect = card.getBoundingClientRect();

  const centerX = cardRect.left + cardRect.width / 2;
  const centerY = cardRect.top + cardRect.height / 2;

  const offsetX = ((e.clientX - centerX) / cardRect.width) * 45;
  const offsetY = ((e.clientY - centerY) / cardRect.height) * 45;

  card.style.setProperty("--rotateX", `${offsetY}deg`);
  card.style.setProperty("--rotateY", `${-offsetX}deg`);
};

export const mouseOut = (cardRef: CardRef) =>
  cardRef.current?.removeAttribute("style");
