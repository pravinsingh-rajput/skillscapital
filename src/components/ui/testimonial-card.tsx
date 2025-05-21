import Image from "next/image";
interface TestimonialCardProps {
  quote: string;
  author: string;
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md h-full flex flex-col">
      <Image
        src="/assets/testmonila-quote-icon.svg"
        alt="author"
        height={44}
        width={44}
      />
      <p className="text-lg my-6 flex-grow font-medium">{quote}</p>
      <p className="text-sm text-gray-600 mt-auto"> {author}</p>
    </div>
  );
};

export default TestimonialCard;
