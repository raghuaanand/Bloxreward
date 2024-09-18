"use client";

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";

const FaqItem = ({ question, answer, icon }: { question: string, answer: string, icon: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Update the height based on the content's height
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

  return (
    <div className="border-b-2 border-gray-200 md:w-[896px]">
      <button
        className="flex  md:h-[89px] items-center justify-between w-full py-4 px-4 text-left focus:outline-none"
        onClick={toggleFaq}
      >
        <div className="flex items-center space-x-3">
          <Image src={icon} alt='icon' width={19.25} height={19.25} className='md:w-[36px] md:h-[36px] '/>
          <span className="font-bold text-[12.65px] md:text-[23px] md:leading-[27.26px] text-black">{question}</span>
        </div>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <IoIosArrowDown />
        </span>
      </button>
      <div
        ref={contentRef}
        style={{ height: height }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="p-4 md:mx-5 mx-3 my-5 md:my-3 pb-4 md:mb-8 text-[#161c18] md:text-[22px] md:leading-[29.92px] opacity-75 rounded-lg border-[1px]">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FaqList = () => {
  return (
    <div className="mt-8 bg-white shadow-md rounded-lg">
      <FaqItem
        question="How does BloxReward work?"
        answer="You can earn Robux and cryptocurrency by completing tasks and offers from our trusted partners. Choose from surveys, quizzes, downloading apps, and more to start earning rewards!"
        icon="/faq_question.svg"
      />
      <FaqItem
        question="Is BloxReward safe to use?"
        answer="Yes, BloxReward is safe. We partner with trusted advertisers to ensure a secure experience."
        icon="/faq_secure.svg"
      />
      <FaqItem
        question="How do I receive my Robux?"
        answer="Once you complete a task, your Robux or other rewards will be sent to your account instantly or within a set time frame depending on the task."
        icon="/faq_robux.svg"
      />
      <FaqItem
        question="How does BloxReward make money?"
        answer="BloxReward earns money through partnerships with advertisers and offer providers. We share a portion of that revenue with users who complete tasks."
        icon="/faq_money.svg"
      />
    </div>
  );
};

export default FaqList;



