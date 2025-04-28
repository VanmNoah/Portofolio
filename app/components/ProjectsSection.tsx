import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Mijn Projecten</h2>
				<div className="space-y-8 sm:space-y-12">
					{[
						{
							title: 'FacIT.shop',
							description: 'IT-oplossingen voor bedrijven. Dit is de reclamewebsite voor FacIT.shop en ik werk momenteel aan een verbeterd systeem dat binnenkort beschikbaar zal zijn.',
							techDetails: [
								'Ontwikkeling van een veilig webgebaseerd login- en beheersysteem',
								'Implementatie van een remote desktopfunctionaliteit via een veilige webinterface',
								'Installatie en configuratie van netwerkinfrastructuren',
								'Gebruik van moderne webontwikkelingstechnieken, zoals three.js en React'
							],
							image: '/code.jpg',
							websiteUrl: 'https://www.facit.shop', // Voeg de URL van je website toe
						},
					].map((project) => (
						<div key={project.title} className="bg-[#21262D] rounded-lg overflow-hidden">
							<div className="grid grid-cols-1 lg:grid-cols-2">
								<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
									<h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
									<p className="text-sm sm:text-base text-gray-400">{project.description}</p>

									{/* Technical Implementation */}
									<div>
										<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technische Implementatie</h4>
										<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
											{project.techDetails.map((detail) => (
												<li key={detail} className="flex items-center gap-2">
													<span className="text-green-400">▹</span>
													<span className="text-gray-300">{detail}</span>
												</li>
											))}
										</ul>
									</div>

									{/* Website Link */}
									<div>
										<a
											href={project.websiteUrl}
											className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform"
											target="_blank"
											rel="noopener noreferrer"
										>
											Bezoek de website
										</a>
									</div>
								</div>

								<div className="relative h-full min-h-[300px] lg:min-h-full">
									<Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
									<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
