import { useContext } from 'react';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';
import MedicineContext from '../../store/medicine-context';
const AvailableMeals = () => {
    const ctx=useContext(MedicineContext);
    const mealsList = ctx.items.map((meal) =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
            sizes={meal.sizes}
        />
    )
    return (
        <section className={classes.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    );
}

export default AvailableMeals;