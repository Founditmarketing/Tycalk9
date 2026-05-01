import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "WHAT TYPES OF TRAINING DOES TYCAL K9 OFFER?",
    answer: "We provide obedience, protection, puppy development, board & train, and advanced off-leash training programs."
  },
  {
    question: "HOW LONG DOES EACH TRAINING PROGRAM TAKE?",
    answer: "Program lengths vary from 2 to 8 weeks, depending on your dog’s age, temperament, and training goals."
  },
  {
    question: "DO YOU USE POSITIVE REINFORCEMENT METHODS?",
    answer: "Yes, we focus on balanced, reward-based training that builds confidence and lasting obedience."
  },
  {
    question: "CAN YOU TRAIN AGGRESSIVE OR FEARFUL DOGS?",
    answer: "Absolutely. Our certified trainers specialize in behavior modification and rehabilitation for dogs of all temperaments."
  },
  {
    question: "WHERE ARE YOU LOCATED?",
    answer: "We proudly serve clients from Missouri City, Katy, and Houston, Texas at our Arcola facility."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="w-full bg-pureblack py-24 px-6 border-b border-brand/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-white font-heading text-5xl md:text-6xl uppercase tracking-wide mb-16">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-brand rounded-none bg-transparent overflow-hidden"
            >
              <div 
                className="w-full px-6 py-6 flex justify-between items-center cursor-pointer hover:bg-white/5 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <h3 className="text-gray-300 font-bold uppercase tracking-wider text-sm md:text-base cursor-pointer">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === idx ? (
                    <Minus className="w-6 h-6 text-brand" />
                  ) : (
                    <Plus className="w-6 h-6 text-brand" />
                  )}
                </div>
              </div>
              
              {openIndex === idx && (
                <div className="px-6 pb-6 pt-0 text-white text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
