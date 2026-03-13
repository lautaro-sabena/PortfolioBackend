export default function Footer() {
  return (
    <footer className="py-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Lautaro Sabena. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
