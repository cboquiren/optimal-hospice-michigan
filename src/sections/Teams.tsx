import { teamList } from "../utils/data";

const Teams = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6 bg-bg-dark">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6">
          Our Interdisciplinary Team
        </h2>
        <p className="text-text-primary">
          Our team works together to ensure coordinated, compassionate care focused on comfort and
          dignity.
        </p>
        <div className="grid md:grid-cols-2 gap-4 p-4 mt-4">
          {teamList.map((teamMember) => {
            return (
              <div className="bg-base-100 p-2 rounded-xl shadow-lg text-text-primary">
                {teamMember}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Teams;
