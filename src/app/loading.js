export default function Loader() {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-green-600 rounded-full" role="status" aria-label="loading">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  