import Image from "next/image";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";

export default function MealDetailsPage({ params }) {
  const meal = getMeal(params.url);
  console.log(params);
  console.log(meal);

  if (!meal) {
    return <p>Meal not found!</p>;
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${"email"}`}>Name</a>
          </p>
          <p className={classes.summary}>summary</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: "..." }}
        ></p>
      </main>
    </>
  );
}
