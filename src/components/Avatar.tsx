interface AvatarProps {
  src: string;
  fallBack: string;
}
export default function Avatar({
  fallBack,
  src,
  className,
}: AvatarProps & { className?: string }) {
  return (
    <img
      className={`size-12 object-cover rounded-full ${className}`}
      src={src}
      alt={fallBack}
    />
  );
}
