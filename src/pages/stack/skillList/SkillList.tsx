interface Props {
  category: string;
  child: React.ReactNode;
}

function SkillList({ category, child }: Props) {
  return (
    <div className="group mt-12 cursor-default select-none pb-6 sm:pb-12">
      <h2 className="text-2xl text-gray-700 transition-colors duration-500 group-hover:text-amber-900 dark:text-gray-300 dark:group-hover:text-purple-400 sm:text-4xl">
        {category}
      </h2>
      <div className="mt-2 h-0.5 w-full rounded-full border-b border-gray-300 dark:border-gray-700"></div>
      <div className="flex flex-row flex-wrap gap-3 sm:gap-5">{child}</div>
    </div>
  );
}

export default SkillList;