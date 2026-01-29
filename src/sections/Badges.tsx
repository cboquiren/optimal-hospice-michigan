import { badgeList } from "../utils/data";

const Badges = () => {
  return (
    <div className="py-10 px-6 md:px-4 bg-base-100">
      <div className="max-w-5xl mx-auto grid gap-10 lg:grid-cols-3 items-center text-center">
        {badgeList.map((badge) => {
          return (
            <div key={badge} className="p-6 rounded-2xl shadow-md border border-base-300">
              {badge}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Badges;
