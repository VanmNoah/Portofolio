import React from 'react';

export const SkillsSection = () => {
	return (
		<>
			{/* Werkervaring sectie */}
			<section id="werkervaring" className="py-12 sm:py-20 px-4 bg-[#161B22]">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Werkervaring</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
						{[
							{
								category: 'Carrefour – Leopoldsburg',
								timePeriod: 'Jan 2022 - Dec 2022',
								skills: [
									{ name: 'Klantenservice', level: 95 },
									{ name: 'Samenwerken', level: 30 },
									{ name: 'Stressbestendigheid', level: 80 },
									{ name: 'Werkplekbeheer', level: 95 },
								],
								icon: '🛒',
								color: 'from-blue-500 to-blue-700',
							},
							{
								category: 'Action – Hasselt',
								timePeriod: 'Mei 2022 - Heden',
								skills: [
									{ name: 'Schoonmaken van de werkplek', level: 95 },
									{ name: 'Snelheid & Efficiëntie', level: 100 },
									{ name: 'Kalm blijven onder druk', level: 90 },
									{ name: 'Samenwerken', level: 95 },
									{ name: 'Klantenservice', level: 100 },
								],
								icon: '🛒',
								color: 'from-green-500 to-green-700',
							},
							{
								category: 'Febelco – Zolder',
								timePeriod: 'Aug 2024 - Jan 2025',
								skills: [
									{ name: 'Schoonmaken van de werkplek', level: 95 },
									{ name: 'Snelheid & Efficiëntie', level: 100 },
									{ name: 'Kalm blijven onder druk', level: 100 },
									{ name: 'Apparatuurherstel', level: 100 },
								],
								icon: '🔧',
								color: 'from-purple-500 to-purple-700',
							},
							{
								category: 'Level27 – Hasselt',
								timePeriod: '2de Week van paasverlof & Juli 2025',
								skills: [
									{ name: 'Overzetten van DNS-records', level: 95 },
									{ name: 'Communiceren met medewerkers', level: 100 },
									{ name: 'Snelheid & Efficiëntie', level: 95 },
									{ name: 'Extra taken', level: 90 },
								],
								icon: '💻',
								color: 'from-purple-500 to-purple-700',
							},
						].map((category) => (
							<div key={category.category} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
								<div className="flex items-center gap-3 mb-6">
									<span className="text-3xl">{category.icon}</span>
									<h3 className="text-xl font-bold">{category.category}</h3>
								</div>
								<p className="text-sm text-gray-400 mb-4">{category.timePeriod}</p>
								<div className="space-y-4">
									{category.skills.map((skill) => (
										<div key={skill.name}>
											<div className="flex justify-between text-sm mb-1">
												<span>{skill.name}</span>
												<span className="text-gray-400">{skill.level}%</span>
											</div>
											<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
												<div className={`h-full bg-gradient-to-r ${category.color} animate-expand origin-left`} style={{ width: `${skill.level}%` }}></div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Vaardigheden sectie */}
			<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Vaardigheden</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
						{[
							{ name: 'JavaScript', level: 95 },
							{ name: 'React.js', level: 95 },
							{ name: 'HTML', level: 98 },
							{ name: 'CSS', level: 90 },
							{ name: 'Blender', level: 80 },
							{ name: '3D printen', level: 100 },
							{ name: '3D Tekenen', level: 95 },
							{ name: 'Betrouwbaar', level: 100 },
							{ name: 'Besluitvaardig', level: 98 },
						].map((skill) => (
							<div key={skill.name} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
								<div className="flex justify-between mb-4">
									<span className="text-xl font-bold">{skill.name}</span>
									<span className="text-gray-400">{skill.level}%</span>
								</div>
								<div className="h-2 bg-[#30363D] rounded-full overflow-hidden">
									<div className={`h-full bg-gradient-to-r from-blue-500 to-blue-700`} style={{ width: `${skill.level}%` }}></div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Opleidingen sectie */}
			<section className="py-12 sm:py-20 px-4 bg-[#161B22]">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-16 text-center">Opleidingen</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
						{[
							{
								title: 'PBA ELO:ICT - ICT',
								institution: 'Hogeschool UCLL',
								timePeriod: '2024 - Heden',
							},
							{
								title: 'ELektriciteit Electronica [Diploma]',
								institution: 'Don Bosco technisch insituut',
								timePeriod: '2020 - 2024',
							},
							{
								title: 'Industriële wetenschappen',
								institution: 'Don Bosco technisch insituut',
								timePeriod: '2018 - 2020',
							},
						].map((education) => (
							<div key={education.title} className="bg-[#21262D] rounded-lg p-6 transform hover:scale-[1.02] transition-all">
								<div className="mb-4">
									<h3 className="text-xl font-bold">{education.title}</h3>
									<p className="text-sm text-gray-400">{education.institution}</p>
									<p className="text-sm text-gray-400">{education.timePeriod}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};
