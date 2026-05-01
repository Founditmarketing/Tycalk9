const services = [
  {
    title: 'Puppy Development',
    image: '/puppydevelopment.jpg',
    description: 'Give your puppy the best start with TyCal K9\'s Puppy Development Program, building confidence, obedience, and essential life skills to create a well-balanced, well-mannered companion for families across Houston and surrounding areas.'
  },
  {
    title: 'Obedience Training',
    image: '/obediencetraining.jpg',
    description: 'TyCal K9\'s obedience training builds essential commands and behaviors through positive, personalized instruction—helping your dog develop discipline, confidence, and respect to become a well-mannered, obedient, and reliable family companion.'
  },
  {
    title: 'Protection Training',
    image: '/protectiontraining.jpg',
    description: 'TyCal K9\'s Protection Training builds reliable, controlled guardianship by developing a dog\'s confidence, obedience, and clear decision-making—teaching them to protect on command while remaining stable, safe, and family-focused. At all times.'
  },
  {
    title: 'Dog Sport Training',
    image: '/dogsporttraining.jpg',
    description: 'TyCal K9\'s Dog Sport Training develops athleticism, focus, and precision through structured exercises and competition-ready techniques—enhancing your dog\'s performance, obedience, and confidence for success in every sport or event.'
  }
];

export default function Services() {
  return (
    <section className="w-full bg-pureblack py-24 px-6 border-t border-brand/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-white font-heading text-5xl md:text-6xl uppercase tracking-wide mb-10 md:mb-16">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col border border-brand h-full">
              {/* Image Frame */}
              <div className="h-80 w-full overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="flex-1 bg-pureblack p-6 flex flex-col items-center text-center">
                <h3 className="text-white font-heading text-2xl md:text-3xl uppercase tracking-wide leading-tight mb-4 md:min-h-[3.5rem] flex flex-col justify-center">
                  <span className="md:hidden">{service.title}</span>
                  <span className="hidden md:flex flex-col">
                    {service.title === 'Dog Sport Training' ? (
                      <>
                        <span>Dog Sport</span>
                        <span>Training</span>
                      </>
                    ) : (
                      service.title.split(' ').map((word, i) => <span key={i}>{word}</span>)
                    )}
                  </span>
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Footer Button */}
              <button className="w-full bg-brand py-4 text-pureblack font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors rounded-none">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
