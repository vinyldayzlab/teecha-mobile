import React from "react";
import { View, Text } from "react-native";

type Step = {
  completed?: boolean;
  current?: boolean;
};

type StepperProps = {
  steps: Step[];
};

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  return (
    <View className="flex-row items-center justify-between px-4">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <View key={index} className="flex-1 items-center">
            <View
              className={`w-8 h-8 rounded-xl items-center justify-center
                ${step.completed ? "bg-primary" : step.current ? "bg-blue-500" : "bg-gray-300"}
              `}
            ></View>
            {!isLast && (
              <View className="absolute top-4 right-[-50%] w-full h-0.5 bg-gray-300" />
            )}
          </View>
        );
      })}
    </View>
  );
};

export default Stepper;
