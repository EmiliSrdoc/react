type GalleryCardProps = {
  link: string;
  image: string;
  title: string;
};

export default function GalleryCard({ link, image, title }: GalleryCardProps) {
  return (
    <a href={link} target="_blank">
      <div className="image">
        <div
          style={{
            background: `url(${image}) center center / cover`,
          }}
        ></div>
        <p>{title}</p>
      </div>
    </a>
  );
}
