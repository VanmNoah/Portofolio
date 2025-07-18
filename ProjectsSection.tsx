import React from 'react';
import Image from 'next/image';

export const ProjectsSection = () => {
	return (
		<section className="py-12 sm:py-20 px-4 bg-[#161B22] scroll-mt-20">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Projecten</h2>

				<div className="bg-[#21262D] rounded-lg overflow-hidden">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						{/* Tekstzijde */}
						<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
							<h3 className="text-xl sm:text-2xl font-bold">VMCo.be – Websites zonder zorgen</h3>
							<p className="text-sm sm:text-base text-gray-400">
								Websites voor ondernemers die geen zorgen willen over techniek, onderhoud of veiligheid. Alles geregeld, van A tot Z.
							</p>

							{/* Technische Highlights */}
							<div>
								<h4 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Technische Architectuur</h4>
								<ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base">
									<li className="flex items-start gap-2">
										<span className="text-green-400">▹</span>
										<span className="text-gray-300">
											Bouwstack: <strong>Next.js</strong>, <strong>TailwindCSS</strong>, <strong>Supabase</strong>, <strong>Strapi</strong>
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-green-400">▹</span>
										<span className="text-gray-300">
											Realtime klantendashboard met SEO, uptime en wijzigingsverzoeken
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-green-400">▹</span>
										<span className="text-gray-300">
											Automatische subdomeinen voor elke klant (bv. <code>klantnaam.vmco.be</code>) of eigen domein
										</span>
									</li>
									<li className="flex items-start gap-2">
										<span className="text-green-400">▹</span>
										<span className="text-gray-300">
											Beveiliging met RLS, middleware, SSL en rolgebaseerde toegang
										</span>
									</li>
								</ul>
							</div>

							{/* Link */}
							<div>
								<a
									href="https://www.vmco.be"
									className="inline-block bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform"
									target="_blank"
									rel="noopener noreferrer"
								>
									Bezoek website
								</a>
							</div>
						</div>

						{/* Afbeeldingzijde */}
						<div className="relative h-full min-h-[300px] lg:min-h-full">
							<Image
								src="/code.jpg"
								alt="VMCo dashboard visual"
								fill
								className="object-cover"
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
							<div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-[#21262D] via-transparent to-transparent lg:via-[#21262D]/20 lg:to-[#21262D]/40"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
