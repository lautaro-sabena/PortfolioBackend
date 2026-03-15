export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between text-xs text-muted">
        <p>© {new Date().getFullYear()} Lautaro Sabena</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:lautaro@example.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/lautaro-sabena"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lautarosabena/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
