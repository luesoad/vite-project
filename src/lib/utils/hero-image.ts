export function getRandomHeroImage(images: string[], current: string): string {
  if (images.length <= 1) return images[0];
  let randomImage: string;
  do {
    randomImage = images[Math.floor(Math.random() * images.length)];
  } while (randomImage === current);
  return randomImage;
}
