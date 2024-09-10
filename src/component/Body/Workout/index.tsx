import clsx from "clsx";
import style from "./index.module.scss";

const WorkoutSection = () => {
  const modeItems = [
    {
      mode: "Beginner",
    },
    {
      mode: "Intermediate",
    },
    {
      mode: "Advance",
    },
  ];

  return (
    <div className={clsx(style.workoutSection)}>
      {/* header */}
      <div className={clsx(style.header)}>
        {modeItems.map((item, index) => {
          return <div key={index} className={clsx(style.mode)}>
            {item.mode}
          </div>;
        })}
      </div>
      {/* cards */}
      <div className={clsx(style.cardWorkout)}>
        <div className={clsx(style.cards)}>
            <div className={clsx(style.cardTitle)}>
                Jumping Jacks
            </div>
        </div>

        <div className={clsx(style.cards)}>
            <div className={clsx(style.cardTitle)}>
                Jumping Jacks
            </div>
        </div>

        <div className={clsx(style.cards)}>
            <div className={clsx(style.cardTitle)}>
                Jumping Jacks
            </div>
        </div>

        <div className={clsx(style.cards)}>
            <div className={clsx(style.cardTitle)}>
                Jumping Jacks
            </div>
        </div>

        <div className={clsx(style.cards)}>
            <div className={clsx(style.cardTitle)}>
                Jumping Jacks
            </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutSection;
