import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
 
export default function Example() {
  const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <div className="grid px-6 py-10 w-100 justify-center items-center">
      <div className="w-100">
      <Fragment  >
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
        What are the different ways to manage a state in a React application?
        </AccordionHeader>
        <AccordionBody>
      <span className="text-3xl">Ans  :</span>
      As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs. In this chapter, you’ll learn how to structure your state well, how to keep your state update logic maintainable, and how to share state between distant components.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        How does prototypical inheritance work?
        </AccordionHeader>
        <AccordionBody>
            <p className="text-3xl">Ans</p>
            Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
         
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        What is a unit test? Why should we write unit tests?
        </AccordionHeader>
        <AccordionBody>
            <p className="text-3xl">Ans</p>

        In this article, I will show that unit testing itself is quite easy; the real problems that complicate unit testing, and introduce expensive complexity, are a result of poorly-designed, untestable code. We will discuss what makes code hard to test, which anti-patterns and bad practices we should avoid to improve testability, and what other benefits we can achieve by writing testable code. We will see that writing testable code is not just about making testing less troublesome, but about making the code itself more robust, and easier to maintain
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        React vs. Angular vs. Vue?
        </AccordionHeader>
        <AccordionBody>
            <p className="text-4xl">Angular</p>
           
Angular is Google’s complete front-end framework.
            <p className="text-4xl">React</p>
           
            Facebook developed the React library for creating UIs.
            <p className="text-4xl">Vue</p>
           
            Evan You introduced Vue. It’s a lightweight front-end framework.
            <p className="text-4xl">Comparing Angular, React, and Vue</p>

            
All three frameworks provide a solid basis for state-of-the-art front ends. Nevertheless, their differences can make one framework more favorable than its alternatives.
        </AccordionBody>
      </Accordion>
    </Fragment>
      </div>
    </div>
  
  );
}