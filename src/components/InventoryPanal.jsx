import { useInventory } from '../context/InventoryContext';

const InventoryPanel = () => {
  const { inventory } = useInventory();

  return (
    <div className="absolute top-4 right-4 bg-white p-2 border shadow-md w-48">
      <h2 className="font-bold mb-2">Inventory</h2>
      <ul>
        {inventory.map((item, i) => (
          <li key={i}>- {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryPanel;