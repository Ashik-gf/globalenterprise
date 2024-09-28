import React from 'react'
const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 2,
      question: "What's the main purpose of Our Company?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: "How you can get opportunity for job?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ]
const Faq = () => {
  return (
    <div className="bg-white border-2">
    <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-16 sm:py-20 lg:px-8 lg:py-20">
      <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
      <div className="mt-4 space-y-8 divide-y divide-gray-900/10">
        {faqs.map((faq) => (
          <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
            <dd className="mt-4 lg:col-span-7 lg:mt-0">
              <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
            </dd>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Faq