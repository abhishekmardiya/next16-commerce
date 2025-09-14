export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl space-y-12">
      <div className="space-y-2 text-center">
        <div className="skeleton-animation mx-auto h-8 w-48 rounded" />
        <div className="skeleton-animation mx-auto h-5 w-64 rounded" />
      </div>
      <div className="mx-auto max-w-sm space-y-6 rounded-lg border p-6">
        <div className="skeleton-animation h-4 w-24 rounded" />
        <div className="skeleton-animation h-10 w-full rounded" />
        <div className="skeleton-animation h-4 w-20 rounded" />
        <div className="skeleton-animation h-10 w-full rounded" />
        <div className="skeleton-animation h-10 w-full rounded" />
      </div>
    </div>
  );
}
