import React from 'react';
import { View, Text } from './Themed';

export default function HelpStep({
  num,
  title,
  body
}: {
  num: number;
  title: string;
  body: string;
}) {
  return (
    <View className="mb-6">
      <View className=" h-fit flex-row gap-4 items-center ">
        <View className=" bg-green-500 flex h-fit max-h-fit w-12 rounded-full justify-center items-center aspect-square">
          <Text className='text-2xl font-semibold text-[#000615]'>{num}</Text>
        </View>
        <Text className="flex-1 text-lg text-white">{title}</Text>
      </View>
      <View className='mb-5 self-center bg-green-500 h-1 w-[86%] -translate-y-1'>

      </View>
      <Text>{body}</Text>
    </View>
  );
}
