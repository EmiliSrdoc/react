import { useApiCats, useMockCats } from "../../api/cat.get";
import "./Gallery.css";
import GalleryCard from "./GalleryCard";

export default function Gallery() {
  const mockCats = useMockCats();
  const apiCats = useApiCats();
  return (
    <div id="gallery">
      {mockCats.map((imageCard) => (
        <GalleryCard
          link={imageCard.link}
          image={imageCard.image}
          title={imageCard.title}
        />
      ))}
      {apiCats.map((imageCard) => (
        <GalleryCard
          link={imageCard.link}
          image={imageCard.image}
          title={imageCard.title}
        />
      ))}
    </div>
  );
}
