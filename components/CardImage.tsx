import { imageFor } from "@/lib/images";

// Renders a photo at the top of a card when one exists for the key; otherwise nothing.
export default function CardImage({ k }: { k: string }) {
  const im = imageFor(k);
  if (!im) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="card-img" src={im.src} alt={im.alt} width={1600} height={1000} loading="lazy" />;
}
