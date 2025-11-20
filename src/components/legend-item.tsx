import React from 'react';

import clsx from 'clsx';

type LegendItemProps = {
    label: string;
    bgClass: string;
    range?: string;
    showRange?: boolean;
    className?: string;
};

export const LegendItem: React.FC<LegendItemProps> = ({ label, bgClass, range, showRange = false, className }) => {
    return (
        <div className={clsx('flex items-center gap-2', className)}>
            <div className={clsx('h-4 w-4 rounded-full', bgClass)} />

            <div className='flex flex-col text-xs md:text-sm'>
                <span className='font-semibold text-gray-900'>{label}</span>

                {showRange && range && <span className='ml-1 text-gray-600'>{range}</span>}
            </div>
        </div>
    );
};
