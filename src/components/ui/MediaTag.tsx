function MediaTag({ value }: { value: string }) {
  return (
    <span className="rounded-sm border border-[#7c7676] px-2 text-sm">
      {value}
    </span>
  );
}

export default MediaTag;
