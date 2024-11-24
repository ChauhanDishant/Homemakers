import React, { useState } from 'react';

function StepProgressBar({currentStep}) {
  const steps = [
    { id: 1, title: "Step 1", description: "Application form" },
    { id: 2, title: "Step 2", description: "Payment" },
    { id: 3, title: "Step 3", description: "Preview" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.id} className="flex flex-col items-center flex-1">
            {/* Step Line */}
            <div
              className={`w-full h-1 mb-2 ${
                currentStep >= step.id ? "bg-indigo-500" : "bg-white"
              } ${index === steps.length - 1 ? "hidden" : ""}`}
            ></div>

            {/* Step Number */}
            <p className={`text-sm ${currentStep >= step.id ? "text-indigo-500 font-semibold" : "text-gray-500"}`}>
              {step.title}
            </p>

            {/* Step Description */}
            <p className={`${currentStep >= step.id ? "text-black font-semibold" : "text-gray-500"}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepProgressBar;
