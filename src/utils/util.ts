export function getComma(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const handleScroll = (target: HTMLElement) => {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY + 54;
  if (scrollPosition >= windowHeight) {
    target.classList.add('header--blur');
  } else {
    target.classList.remove('header--blur');
  }
};
