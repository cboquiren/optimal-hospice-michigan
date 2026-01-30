import { teamList } from "../utils/data";

const Teams = () => {
  return (
    <div className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Interdisciplinary Team</h2>
        <p className="font-medium">
          Our team works together to ensure coordinated, compassionate care focused on comfort and
          dignity.
        </p>
        <div className="grid md:grid-cols-2 gap-4 p-4 mt-4">
          {teamList.map((teamMember) => {
            return (
              <div key={teamMember} className="bg-base-100 p-2 rounded-xl shadow-lg font-medium">
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
