import React from "react";

export const Example: React.FC = () => {
  return <div>Functional component text</div>;
};

// functions that take a props argument and return a JSX element.

// Declaring type of props - see "Typing Component Props" for more examples
type AppProps = {
  message: string;
}; /* use `interface` if exporting so that consumers can extend */

// Easiest way to declare a Function Component; return type is inferred.
export const App1 = ({ message }: AppProps) => <div>{message}</div>;

// you can choose annotate the return type so an error is raised if you accidentally return some other type
export const App2 = ({ message }: AppProps): JSX.Element => (
  <div>{message}</div>
);

// you can also inline the type declaration; eliminates naming the prop types, but looks repetitive
export const App3 = ({ message }: { message: string }) => <div>{message}</div>;
