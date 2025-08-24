function SkeletonLoader() {
  return (
    <div className="mt-5 mb-80 animate-pulse pt-10">
      <div className="mb-5 h-9 w-72 bg-neutral-800" />

      <div className="flex gap-5">
        <div className="h-36 w-72 bg-neutral-800" />
        <div className="h-36 w-72 bg-neutral-800" />
        <div className="h-36 w-72 bg-neutral-800" />
      </div>
    </div>
  );
}

export default SkeletonLoader;
