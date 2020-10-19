import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

type DateFCProps = {
  date: Date;
};

/**
 * Displays a time appropriate greeting along with the Date at a given location
 * Defaults to current location
 *
 * @example
 * <DateFC></DateFC>
 */
const DateFC = ({ date }: DateFCProps) => {
  const hour = date.getHours();
  const greeting: "Good Morning" | "Good Afternoon" | "Good Evening" =
    hour < 12 ? "Good Morning" : hour < 16 ? "Good Afternoon" : "Good Evening";
  return <p data-testid="greeting">{greeting}</p>;
};

export default DateFC;
