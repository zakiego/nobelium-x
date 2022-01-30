import BLOG from "@/blog.config";
import Vercel from "@/components/Vercel";
const Footer = ({ fullWidth }) => {
  const d = new Date();
  const y = d.getFullYear();
  const from = +BLOG.since;
  return (
    <div
      className={`m-auto mt-6 w-full flex-shrink-0 text-gray-500 transition-all dark:text-gray-400 ${
        !fullWidth ? "max-w-2xl px-4" : "px-4 md:px-24"
      }`}
    >
      <hr className="border-gray-200 dark:border-gray-600" />
      <div className="my-4 text-sm leading-6">
        <div className="flex flex-wrap justify-between align-baseline">
          <p>
            © {BLOG.author} {from === y || !from ? y : `${from} - ${y}`}
          </p>
          <Vercel />
        </div>
      </div>
    </div>
  );
};

export default Footer;
