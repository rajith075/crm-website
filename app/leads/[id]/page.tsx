export default function LeadPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Lead ID: {params.id}</h1>
    </div>
  );
}