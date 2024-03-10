type GalleryItemProps = {
  src?: string;
  text?: string;
};

export const GalleryItem = ({ src, text }: GalleryItemProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="rounded-full"
        src="https://via.placeholder.com/150"
        alt="placeholder"
      />
      <a className="text-md hover:text-primary" href={`/search?q=${text}`}>{text}</a>
    </div>
  );
};
