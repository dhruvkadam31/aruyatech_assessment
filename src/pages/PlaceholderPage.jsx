function PlaceholderPage({ title }) {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-3 text-gray-600">
        This is a placeholder page for the {title} section.
      </p>
    </div>
  );
}

export default PlaceholderPage;
