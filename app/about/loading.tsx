export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <div className="space-y-4 text-center">
        <div className="skeleton-animation mx-auto h-8 w-40 rounded" />
        <div className="skeleton-animation mx-auto h-6 w-72 rounded" />
      </div>
      <div className="text-center">
        <div className="skeleton-animation mx-auto h-10 w-32 rounded" />
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {[...Array(4)].map((_, i) => {
          return (
            <div key={i} className="space-y-3 rounded-lg border p-6">
              <div className="skeleton-animation h-6 w-32 rounded" />
              <div className="skeleton-animation h-4 w-full rounded" />
              <div className="skeleton-animation h-4 w-full rounded" />
              <div className="skeleton-animation h-4 w-3/4 rounded" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
