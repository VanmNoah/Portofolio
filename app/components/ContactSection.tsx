import React from 'react';

export const ContactSection = () => {
	return (
		<section id="contact" className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
				<h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ik kijk ernaar uit om samen te werken en mijn vaardigheden in te zetten!</h2>
				{/* Location */}
				<div className="flex items-center justify-center gap-2 text-gray-400 mb-8">
					<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
						/>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
					<span>Englebert Adanglaan 73, 3970 Leopoldsburg</span>
				</div>

				{/* Contact Buttons */}
				<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
					<a
						href="mailto:VanmNoah24@gmail.com"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						Neem contact op
					</a>
					<a
						href="/resume.pdf"
						target="_blank"
						className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#21262D] border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
								clipRule="evenodd"
							/>
							<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
						</svg>
						Bekijk mijn CV
					</a>
				</div>

				{/* Social Links */}
				<div className="flex justify-center gap-6">
					<a
						href="https://www.instagram.com/_noahvanm_/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
							<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/in/noah-vanm-8a8364271/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
					>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
					</a>
					<a
						href="tel:+32468253584"
						className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
					>
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
					</a>
				</div>
			</div>
		</section>
	);
};
