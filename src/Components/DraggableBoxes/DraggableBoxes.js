import React, { useState } from 'react';

const initialItems = {
    navbar: [
        { id: "navbar1", image: "nav1.png" },
        { id: "navbar2", image:"nav2.png" },
        { id: "navbar3", image: "nav3.png" }
    ],
    trending: [
        { id: "trending1", image: "trending1.png" },
        { id: "trending2", image: "trending1.png"},
        { id: "trending3", image: "trending1.png" }
    ],
    topRated: [
        { id: "topRated1", image: "quicklinks.png" },
        { id: "topRated2", image: "quicklinks.png" },
        { id: "topRated3", image: "quicklinks.png" }
    ],
    footer: [
        { id: "footer1", image: "footer.png" },
        { id: "footer2", image: "footer.png" },
        { id: "footer3", image: "footer.png" }
    ],
};

const WebpageBuilder = () => {
    const [items, setItems] = useState(initialItems);
    const [webpageLayout, setWebpageLayout] = useState([]);

    const handleDragStart = (e, item, category) => {
        const dragItem = { item, category };
        e.dataTransfer.setData("drag-item", JSON.stringify(dragItem));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const { item, category } = JSON.parse(e.dataTransfer.getData("drag-item"));

        // Find if an item from the same category already exists in the layout
        const existingIndex = webpageLayout.findIndex(component => component.category === category);
        const newItems = { ...items }; // Create a shallow copy of items

        if (existingIndex !== -1) {
            const oldItem = webpageLayout[existingIndex].item;
            const updatedLayout = [...webpageLayout];
            updatedLayout[existingIndex] = { item, category };
            newItems[category] = [...newItems[category], oldItem];
            setWebpageLayout(updatedLayout);
            setItems(newItems);
        } else {
            setWebpageLayout([...webpageLayout, { item, category }]);
        }
        newItems[category] = newItems[category].filter(i => i.id !== item.id);
        setItems(newItems);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleRemoveItem = (indexToRemove) => {
        const itemToRemove = webpageLayout[indexToRemove];
        const updatedLayout = webpageLayout.filter((_, index) => index !== indexToRemove);

        // Add removed item back to available items
        const updatedItems = {
            ...items,
            [itemToRemove.category]: [...items[itemToRemove.category], itemToRemove.item]
        };

        setWebpageLayout(updatedLayout);
        setItems(updatedItems);
    };


    return (
        <div className="container webpage-builder" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="available-items "
                 style={{
                     maxWidth: '50%',
                 }}
                 onDragOver={handleDragOver}>
                <h4>Available Items:</h4>
                {Object.keys(items).map(category => (
                    <div key={category}>
                        <div className=" d-flex justify-content-center align-items-center">{category.toUpperCase()}</div>
                        {items[category].map(item => (
                            <div
                                key={item}
                                draggable
                                onDragStart={(e) => handleDragStart(e, item, category)}
                                style={{margin: '5px' ,cursor: 'pointer'}}
                            >
                                <img src={item.image} alt={item.id}
                                     style={{width: '100%',height: category === 'navbar' ? '50px' : '250px', marginRight: '10px'}}/>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            <div className="webpage-layout" style={{ width: '50%', minHeight: '100vh', borderLeft: '1px solid blue' }} onDrop={handleDrop} onDragOver={handleDragOver}>
                <h4>Your Webpage Layout:</h4>
                {webpageLayout.map((component, index) => (
                    <div key={index}
                    style={{
                        position: 'relative', // This is crucial
                    }}
                    >
                        <img src={component.item.image} alt={component.item.id}
                             style={{
                                 width: '100%',
                                 height: component.category === 'navbar' ? '50px' : '250px',
                             }}/>
                        <button
                            onClick={() => handleRemoveItem(index)}
                             style={{position: 'absolute', top: '5px', right: '5px', cursor: 'pointer'}}
                        >
                           X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebpageBuilder;
