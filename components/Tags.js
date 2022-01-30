import Link from "next/link";

const Tags = ({ tags, currentTag }) => {
  if (!tags) return null;
  return (
    <div className="tag-container">
      <ul className="mt-4 flex max-w-full overflow-x-auto">
        {Object.keys(tags).map((key) => {
          const selected = key === currentTag;
          return (
            <li
              key={key}
              className={`mr-3 whitespace-nowrap border font-medium dark:text-gray-300 ${
                selected
                  ? "border-black bg-black text-white dark:border-gray-600 dark:bg-gray-600"
                  : "border-gray-100 bg-gray-100 text-gray-400 dark:border-gray-800 dark:bg-night"
              }`}
            >
              <Link
                key={key}
                href={selected ? "/search" : `/tag/${encodeURIComponent(key)}`}
              >
                <a className="block px-4 py-2">{`${key} (${tags[key]})`}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tags;
