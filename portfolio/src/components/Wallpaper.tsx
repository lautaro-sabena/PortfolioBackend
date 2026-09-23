export default function Wallpaper() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden bg-background transition-colors duration-500">
      <div className="absolute rounded-full opacity-90 blur-[90px] w-[62vmax] h-[62vmax] -left-[18vmax] -top-[20vmax] bg-[var(--b1)]" />
      <div className="absolute rounded-full opacity-85 blur-[90px] w-[52vmax] h-[52vmax] -right-[16vmax] top-[8vmax] bg-[var(--b2)]" />
      <div className="absolute rounded-full opacity-80 blur-[100px] w-[48vmax] h-[48vmax] left-[10vmax] -bottom-[22vmax] bg-[var(--b3)]" />
      <div className="absolute rounded-full opacity-70 blur-[90px] w-[34vmax] h-[34vmax] right-[8vmax] bottom-[6vmax] bg-[var(--b4)]" />
    </div>
  );
}
