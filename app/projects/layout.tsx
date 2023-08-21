export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div 
      className="relative min-h-screen bg-gradient-to-tl from-black-900
              via-zinc-900/10 to-black-900 "
    >
			{children}
		</div>
	);
}
