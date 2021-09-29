import HeadingTwo from "../styled/heading-two";

const Today = ({ day, temp }) => {
  return (
    <>
      <HeadingTwo color="primary">Today is {day}</HeadingTwo>
      <HeadingTwo color="secondary">
        it is expected to be {temp} degrees
      </HeadingTwo>
    </>
  );
};

export default Today;
