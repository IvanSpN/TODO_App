import React from 'react';
//@ts-ignore
export const Todo: React.FC = ({ title, desc }) => {
  return (
    <div>
      <h2>Название: {title}</h2>
      <h3>Описание: {desc}</h3>
    </div>
  );
};
