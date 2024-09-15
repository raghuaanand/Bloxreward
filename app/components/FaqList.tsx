"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const FaqItem = ({ question, answer, icon }: { question: string, answer: string, icon: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b-2 border-gray-200">
      <button
        className="flex items-center justify-between w-full py-4 px-4 text-left focus:outline-none"
        onClick={toggleFaq}
      >
        <div className="flex items-center space-x-3">
          <Image src={icon} alt='icon' width={19.25} height={19.25}/>
          <span className="font-bold text-[12.65] text-black">{question}</span>
        </div>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ^
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-600 rounded-lg border-[1px]">
          {answer}
        </div>
      )}
    </div>
  );
};

const FaqList = () => {
  return (
    <div className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-lg">
      <FaqItem
        question="How does BloxReward work?"
        answer="You can earn Robux and cryptocurrency by completing tasks and offers from our trusted partners. Choose from surveys, quizzes, downloading apps, and more to start earning rewards!"
        icon="/faq_question.png"
      />
      <FaqItem
        question="Is BloxReward safe to use?"
        answer="Yes, BloxReward is safe. We partner with trusted advertisers to ensure a secure experience."
        icon="/faq_secure.png"
      />
      <FaqItem
        question="How do I receive my Robux?"
        answer="Once you complete a task, your Robux or other rewards will be sent to your account instantly or within a set time frame depending on the task."
        icon="/faq_robux.png"
      />
      <FaqItem
        question="How does BloxReward make money?"
        answer="BloxReward earns money through partnerships with advertisers and offer providers. We share a portion of that revenue with users who complete tasks."
        icon="/faq_money.png"
      />
    </div>
  );
};

export default FaqList;