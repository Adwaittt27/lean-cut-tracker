
export function Button({ children, onClick, variant }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl font-semibold ${
        variant === 'outline' ? 'border border-black' : 'bg-black text-white'
      }`}
    >
      {children}
    </button>
  );
}
