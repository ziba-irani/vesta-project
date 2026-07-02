function CardSkeleton() {
  return (
    <div className="col-span-1 rounded-xl overflow-hidden border border-slate-200 animate-pulse">
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-4 flex flex-col gap-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-8 bg-gray-300 rounded w-full mt-2" />
      </div>
    </div>
  )
}

export default CardSkeleton;
