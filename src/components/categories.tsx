import Category from "./category";

const Categories = ({ items }) => {
  return (
    <div className="py-8 grid md:grid-cols-2 gap-8">{items.map(Category)}</div>
  );
};

export default Categories;
