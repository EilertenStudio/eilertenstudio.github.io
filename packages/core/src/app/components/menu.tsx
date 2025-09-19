
export function Menu({ children }: { children: React.ReactNode }) {
  return <nav className="ml-auto flex items-center space-x-4">{children}</nav>;
}

export function MenuItem({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#"
      className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
    >
      {children}
    </a>
  );
}