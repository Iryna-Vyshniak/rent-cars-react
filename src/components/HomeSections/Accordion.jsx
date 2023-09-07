import { useState } from 'react';

import Title from '../Title';
import Button from '../Button';
import { accordionData } from '../../shared/data';

const Accordion = () => {
  const initialState = {
    First: false,
    Second: false,
    Third: false,
    Fourth: false,
    Fifth: false
  };

  const [state, setState] = useState(initialState);

  const toggleAll = isOpen => {
    const newState = {};

    for (const key in state) {
      newState[key] = isOpen;
    }

    setState(newState);
  };

  const toggleItem = key => {
    setState(prevState => ({
      ...state,
      [key]: !prevState[key]
    }));
  };

  return (
    <section className="h-auto w-full">
      <div className="mx-auto my-0">
        <Title className="mb-4 text-2xl capitalize text-black/80 ">
          Why choose <span className="font-semibold text-accent-color">RentCars</span> for your car
          rental needs?
        </Title>
        <p className="title-card mb-3 text-[14px] font-semibold">
          Unlock your journey with our wheels and create memories that will last a lifetime. Your
          Ukrainian adventure awaits – let`s hit the road together! Here are a few compelling
          reasons:
        </p>
        <div className="mb-4 flex items-center justify-start gap-x-3">
          <Button
            id="expand-all"
            type="button"
            label="Expand All"
            className="modal-btn-link h-8 w-fit cursor-pointer rounded-lg border border-blue-200 bg-transparent px-6 text-[12px] shadow-lg "
            onClick={() => toggleAll(true)}
          />
          <Button
            id="collapse-all"
            type="button"
            label="Collapse All"
            className="modal-btn-link h-8 w-fit cursor-pointer rounded-lg border border-blue-200 bg-transparent px-2 text-[12px] shadow-lg"
            onClick={() => toggleAll(false)}
          />
        </div>

        <div className="w-full max-w-full bg-transparent text-sm">
          {accordionData.map(({ title, content }, idx) => (
            <div key={idx}>
              <p
                className={`accordion-title modal-second-title ${
                  state[title] && 'is-expanded'
                } transition duration-200 ease-in-out hover:text-hover-color focus:text-hover-color`}
                onClick={() => toggleItem(title)}
              >
                {title}
              </p>
              {state[title] && (
                <div className="accordion-content m-0 bg-[#f5fbff]  transition duration-200 ease-in-out">
                  <p className="p-3">{content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accordion;
