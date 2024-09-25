import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Загрузка категорий из API при монтировании компонента
        const fetchCategories = async () => {
            // const response = await fetchCategoriesch('http://127.0.0.1:8000/api/admin/main/category/');
            const response = await fetchCategoriesch('https://dev.gekoeducation.com/api/admin/main/category/');
            const data = await response.json();
            setCategories(data);
        };
        fetchCategories();
    }, []);

    const updateOrder = async (newOrder) => {
        // const response = await fetch('http://127.0.0.1:8000/api/admin/main/category/update-order/', {
        const response = await fetch('https://dev.gekoeducation.com/api/admin/main/category/update-order/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                order: newOrder.map(item => item.id),
            }),
        });

        if (response.ok) {
            console.log('Order updated');
        } else {
            console.error('Error updating order');
        }
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const updatedItems = Array.from(categories);
        const [reorderedItem] = updatedItems.splice(result.source.index, 1);
        updatedItems.splice(result.destination.index, 0, reorderedItem);

        setCategories(updatedItems);
        updateOrder(updatedItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="categories">
                {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {categories.map((item, index) => (
                            <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <div>{item.name}</div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default CategoryList;
