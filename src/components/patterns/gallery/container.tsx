type GalleryContainerProps = {
  children: React.ReactNode;
};

export const GalleryContainer = ({ children }: GalleryContainerProps) => {
  return (
    <div className="flex flex-col gap-8 ">
      <h2 className="text-3xl font-bold">Discover our categories</h2>

      <div className="grid overflow-y-auto grid-cols-5 gap-4">
        {children}
      </div>
    </div>
  );
};
