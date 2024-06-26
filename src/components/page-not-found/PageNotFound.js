const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">404</h1>
        <p className="text-gray-600 mb-4">Oops! Page not found.</p>
        <p className="mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <a href="/" className="text-indigo-600 hover:text-indigo-800">
          Go back to home page
        </a>
      </div>
    </div>
  );
};

export default PageNotFound;
