import React from 'react';
import Check from '../Check';
import type {ITopping} from '../../models/Topping';
import './style.css';

interface IToppingProps {
  topping: ITopping;
}

const Topping IToppingProps = ({ topping }: IToppingProps) => {
  return (
    <div className="topping">
      <Check />
      <span className="topping__content">
        {topping.name}: {topping.price} €
      </span>
    </div>
  );
};

export default Topping;
