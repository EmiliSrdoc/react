import CatImage from "./cat.jpg";
import "./Gallery.css";

export default function Gallery() {
  return (
    <div id="gallery">
      <a
        href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pawlicy.com%2Fblog%2Fcat-photos-for-monday%2F&psig=AOvVaw0mPaDX-fnDBU2d4AzC6TBK&ust=1728567983275000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiWoda3gYkDFQAAAAAdAAAAABAE"
        target="_blank"
      >
        <div className="image">
          <div
            style={{
              background: `url(${CatImage}) center center / cover`,
            }}
          ></div>
          <p>Cat 1</p>
        </div>
      </a>
      <a
        href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fcute-cat&psig=AOvVaw0mPaDX-fnDBU2d4AzC6TBK&ust=1728567983275000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiWoda3gYkDFQAAAAAdAAAAABAJ"
        target="_blank"
      >
        <div className="image">
          <div
            style={{
              background:
                "url('https://img.freepik.com/premium-photo/kitten-with-pink-nose-pink-nose-is-looking-up_1034036-94165.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1728345600&semt=ais_hybrid') center center / cover",
            }}
          ></div>
          <p>Cat 2</p>
        </div>
      </a>
      <a
        href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fcute-cat&psig=AOvVaw0POJq9lfGmC7_8qWO4MQTN&ust=1728568772005000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiDv9O6gYkDFQAAAAAdAAAAABAE"
        target="_blank"
      >
        <div className="image">
          <div
            style={{
              background:
                "url('data:image/jpeg;base64,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') center center / cover",
            }}
          ></div>
          <p>Cat 3</p>
        </div>
      </a>
    </div>
  );
}
