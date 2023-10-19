import React from 'react';

export const DayHeader = ({ daysOfWeek }) => (
    <thead>
      <tr>
        {daysOfWeek.map((day, index) => (
          <th
            key={index}
            class="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"
          >
            <span class="xl:block lg:block md:block sm:block hidden text-black-600">
              {day}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );

