import { useState } from 'react';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    useSortable,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, X } from 'lucide-react';
import StepHeader from './StepHeader';
import { addableSections } from '../data/constants';

function SortableItem({ section, index, onRemove }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: section.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`group page-section flex items-center justify-between p-2 rounded-xl transition-all duration-700 ease-in-out ${isDragging
                ? 'z-50 scale-[1.02] border-brand-accent shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                : 'hover:border-gray-600 hover:translate-x-1 hover:shadow-lg'
                }`}
        >
            <div className="flex items-center gap-3">
                <span
                    {...attributes}
                    {...listeners}
                    className="text-gray-700 hover:text-brand-accent cursor-grab active:cursor-grabbing p-1 hover:bg-white/5 rounded transition-colors"
                    aria-label={`Drag to reorder ${section.name}`}
                >
                    <GripVertical size={18} />
                </span>
                <span className="text-2xl filter drop-shadow-sm">{section.icon}</span>
                <div className="flex flex-col">
                    <span className="font-bold text-sm text-white group-hover:text-brand-accent transition-colors">
                        {section.name}
                    </span>
                    {section.desc && (
                        <span className="text-[10px] text-gray-500 font-medium">
                            {section.desc}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                    <span className="text-[9px] uppercase font-black text-gray-700 mb-0.5">Pos</span>
                    <span className="w-6 h-6 rounded flex items-center justify-center bg-brand-dark border border-white/5 text-[11px] font-bold text-brand-accent shadow-inner">
                        {index + 1}
                    </span>
                </div>
                <button
                    onClick={() => onRemove(section.id)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-500/20 transition-all cursor-pointer"
                    aria-label={`Remove ${section.name}`}
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}

export default function StepSections({ sections, onSectionsChange }) {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const availableToAdd = addableSections.filter(
        (s) => !sections.find((sec) => sec.id === s.id)
    );

    function handleDragEnd(event) {
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = sections.findIndex((s) => s.id === active.id);
            const newIndex = sections.findIndex((s) => s.id === over.id);
            onSectionsChange(arrayMove(sections, oldIndex, newIndex));
        }
    }

    function handleRemove(id) {
        onSectionsChange(sections.filter((s) => s.id !== id));
    }

    function handleAdd(section) {
        onSectionsChange([
            ...sections,
            { ...section, desc: section.name },
        ]);
    }

    return (
        <section className="space-y-6 animate-fade-up delay-300">
            <StepHeader
                number={4}
                title="Construisez votre page"
                subtitle="Ajoutez des sections et glissez-déposez pour les réordonner"
            />
            <div className="space-y-4">
                <div className="text-[10px] uppercase tracking-widest text-brand-emerald font-bold flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald" />
                    Votre Page — Glissez pour réordonner
                </div>

                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={sections.map((s) => s.id)}
                        strategy={verticalListSortingStrategy}
                    >
                        <div className="space-y-2">
                            {sections.map((section, index) => (
                                <SortableItem
                                    key={section.id}
                                    section={section}
                                    index={index}
                                    onRemove={handleRemove}
                                />
                            ))}
                        </div>
                    </SortableContext>
                </DndContext>

                {availableToAdd.length > 0 && (
                    <div className="pt-4">
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-3">
                            Ajouter des sections
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {availableToAdd.map((section) => (
                                <button
                                    key={section.id}
                                    className="chip px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5 text-gray-300"
                                    onClick={() => handleAdd(section)}
                                >
                                    <span className="text-brand-purple font-bold">+</span>
                                    <span>{section.icon}</span>
                                    {section.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
