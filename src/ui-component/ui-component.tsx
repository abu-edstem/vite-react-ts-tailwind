import React from 'react';
import edstemlogo from '../assets/images/edstem-logo.svg';
import icon1 from '../assets/images/icon1.svg';
import icon2 from '../assets/images/icon2.svg';
import icon3 from '../assets/images/icon3.svg';
import dropdownIcon from '../assets/images/dropdown-lines.svg';
import arrowDownGreen from '../assets/images/arrow-down-green.svg';
import arrowNext from '../assets/images/arrow-next-orange.svg';
import arrowPrevious from '../assets/images/arrow-previous-grey.svg';
import notificationIcon from '../assets/images/notification-icon.svg';
import profilePic from '../assets/images/profile-pic.svg';
import workingImage from '../assets/images/working-image.svg';
import questions from '../mocks';

export default function QuizUiPage() {
  return (
    <div className="flex">
      <div className="w-1/12 px-6 py-1 bg-white">
        <img className="" src={edstemlogo} alt="profilepic" />
        <img className="mx-6 my-12" src={icon1} alt="profilepic" />
        <img className="mx-6 my-12" src={icon2} alt="profilepic" />
        <img className="mx-6 my-12" src={icon3} alt="profilepic" />
      </div>
      <div className="w-8/12 bg-blue-100 ">
        <div>
          <div className=" bg-slate-300 p-4">
            <img src={dropdownIcon} alt="dropdownIcon" />
          </div>
        </div>
        <div className="bg-white m-8 py-8">
          <div className=" pl-16 pt-8 flex">
            <div className="text-3xl font-semibold">Hello, &nbsp;</div>
            <div className="text-orange-500 font-bold text-3xl">John!</div>
          </div>
          <div className="flex ml-16">
            <div className="font-medium text-lg">
              How was the <span className="text-green-500">React Lessons ? </span>, Mithun Sam Assigned a{' '}
              <span className="text-orange-600">Quiz</span> for you
            </div>
            <img className="-mt-20 ml-20 " src={workingImage} alt="working-employee" />
          </div>
          <hr className="bg-gray-500 my-4" />
          <div className="my-12 mx-60">
            <div className="text-orange-500 font-bold text-sm">
              QUESTION 2 / <span className="text-orange-300">8</span>
            </div>
            <div className="font-semibold text-xl w-64 my-4">Which is the best React way to render a list ?</div>
            {questions.map((question: any) => (
              <div className="flex my-4" key={question.option}>
                <div className=" border-blue-100 border-2 p-3 px-4 text-gray-500 text-sm w-12">{question.option}</div>
                <div className=" border-blue-100 border-2 border-x-0 p-3 pr-60 font-semibold w-96">
                  {question.question}
                </div>
                <div className=" border-blue-100 border-2 p-3 px-4">
                  <input className="" type="checkbox" id={question.option} />
                  {/* <input className="appearance-none h-5 w-5 border-2 rounded-3xl" type="checkbox" /> */}
                </div>
              </div>
            ))}
          </div>
          <hr className="bg-gray-500 my-4" />
          <div className="flex justify-between">
            <div className="flex mx-4">
              <img src={arrowPrevious} alt="arrowPrevious" />
              <div className="text-gray-400 ml-2">Previous Question</div>
            </div>
            <div className="flex mx-4">
              <div className="text-orange-500 mr-2">Next Question</div>
              <img className="mt-1" src={arrowNext} alt="arrowNext" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/12">
        <div className="flex  bg-gray-200 p-2">
          <img alt="profilepic" src={profilePic} className="px-2" />
          <div className="mr-2 mt-1">Samon John</div>
          <img src={arrowDownGreen} alt="arrowDownGreen" className="mr-2" />
          <img src={notificationIcon} alt="notification-Icon" className="ml-40" />
        </div>
        <div className="">
          <div className="mb-4 my-4 px-6 text-base font-semibold">Your Status</div>
          <div className="flex mx-6">
            <div className="p-4 bg-orange-200 rounded-lg mr-4 pr-12">
              <div className="mb-2 text-orange-600 font-semibold text-base">Total Questions</div>
              <div className="text-orange-600 font-bold text-2xl">30</div>
            </div>
            <div className="p-4 bg-green-100 rounded-lg mr-6">
              <div className=" text-green-600 mb-2 font-semibold text-base">Completed Questions</div>
              <div className="text-green-600 font-bold text-2xl">16</div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-md p-1 m-6">
            <div className="flex justify-between m-2">
              <div className="text-gray-500 font-medium">60% Completed</div>
              <div className="text-gray-500 font-medium">
                24/<span className="text-gray-400">30</span>
              </div>
            </div>
            <div className="bg-white p-2 rounded-lg relative m-2">
              <hr className="bg-green-300 absolute h-4 w-60 rounded-md left-0 top-0 " />
            </div>
          </div>
          <hr className="my-2 bg-gray-200 h-0.5 w-100 m-0 p-0" />
          <div>
            <div className="mx-6 mt-4 font-semibold">Time Pending</div>
            <div className="flex items-center justify-center m-0 p-0">
              <svg className="transform -rotate-90 w-72 h-72">
                <circle
                  cx="145"
                  cy="145"
                  r="100"
                  stroke="currentColor"
                  strokeWidth="20"
                  fill="transparent"
                  className="text-green-100"
                />

                <circle
                  cx="145"
                  cy="145"
                  r="90"
                  stroke="currentColor"
                  strokeWidth="10"
                  strokeDasharray="600"
                  strokeDashoffset="320"
                  fill="transparent"
                  className="text-green-500 "
                />
                <circle
                  cx="55"
                  cy="145"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="white"
                  className="text-white"
                />
              </svg>
              <div className="absolute text-2xl font-semibold text-green-500">26 : 05 : 00</div>
            </div>
            <hr className="my-2 bg-gray-200 h-0.5 w-100 m-0 p-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
