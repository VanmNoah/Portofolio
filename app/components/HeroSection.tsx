import React from 'react';

export const HeroSection = () => {
	return (
		<div className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Animated Background Grid */}
			<div className="absolute inset-0 grid-background opacity-20">
				<div className="grid-overlay animate-pulse-slow"></div>
			</div>

			{/* Floating Tech Icons */}
			<div className="absolute inset-0 overflow-hidden">
				{[
					{ icon: '⚛️', delay: '0s', position: 'top-20 left-1/4' },
					{ icon: '🚀', delay: '2s', position: 'top-40 right-1/3' },
					{ icon: '💻', delay: '1s', position: 'bottom-32 left-1/3' },
					{ icon: '🔥', delay: '3s', position: 'bottom-20 right-1/4' },
				].map((item, index) => (
					<div key={index} className={`absolute ${item.position} animate-float opacity-50`} style={{ animationDelay: item.delay }}>
						<span className="text-4xl">{item.icon}</span>
					</div>
				))}
			</div>

			{/* Hero Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-4">
				<div className="text-center space-y-6">
					{/* Name Section */}
					<div className="relative inline-block px-4 sm:px-0">
						<div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-75"></div>
						<h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 pb-2">
							Vanmullem Noah
						</h1>
					</div>

					{/* Role & Description */}
					<div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
						<div className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-3">
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
								<h2 className="text-xl sm:text-2xl font-light tracking-wide text-blue-400">ICT student</h2>
								<span className="h-[1px] w-8 sm:w-12 bg-blue-500"></span>
							</div>
							<p className="text-base sm:text-lg text-gray-400 max-w-2xl px-4 sm:px-0">
								Gemotiveerde student klaar voor nieuwe uitdagingen
							</p>
						</div>

						{/* Tech Stack Pills */}
						<div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6 sm:mt-8 px-4 sm:px-0">
							{['Three.js', 'React', 'HTML', 'CSS', 'JavaScript', 'Blender', '...'].map((tech) => (
								<span
									key={tech}
									className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#1A1F2B] rounded-full text-sm font-medium text-gray-300 border border-[#2D333B] hover:border-blue-500/50 transition-colors"
								>
									{tech}
								</span>
							))}
						</div>
					</div>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4 sm:px-0">
						<a href="#werkervaring" className="group relative inline-flex items-center justify-center">
							<div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition"></div>
							<span className="relative px-6 sm:px-8 py-3 bg-[#161B22] rounded-full inline-flex items-center justify-center w-full sm:w-auto">
								Studentenjobs
								<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
						</a>
						<a
							href="#contact"
							className="px-6 sm:px-8 py-3 bg-[#21262D] rounded-full hover:bg-[#2D333B] transition-colors border border-[#2D333B] hover:border-gray-600 text-center"
						>
							Neem contact op
						</a>
					</div>

					{/* Social Links */}
					<div className="flex justify-center gap-4 sm:gap-6 mt-8 sm:mt-12">
						{[
							{ name: 'Instagram', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>, href: 'https://www.instagram.com/_noahvanm_/' },
							{ name: 'LinkedIn', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> 							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /> 						</svg>, href: 'https://www.linkedin.com/in/noah-vanm-8a8364271/' },
							{
								name: 'Telefoonnummer', icon: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>, href: 'tel:+32468253584'
							}
						].map((social) => (
							<a key={social.name} href={social.href} className="group relative p-2 sm:p-3 hover:text-blue-400 transition-colors" aria-label={social.name}>
								<span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform inline-block">{social.icon}</span>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<div className="absolute bottom-8 inset-x-0 flex flex-col items-center animate-bounce">
				<span className="text-gray-400 text-sm mb-2 text-center">Scroll om te ontdekken</span>
				<svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
				</svg>
			</div>
		</div>
	);
};
