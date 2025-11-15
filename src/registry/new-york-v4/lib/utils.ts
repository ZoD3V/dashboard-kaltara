import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatNumber = (num: number) => num.toLocaleString('id-ID', { maximumFractionDigits: 0 });
