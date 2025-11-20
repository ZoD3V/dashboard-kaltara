import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export const fillToBg = (fillClass: string) => fillClass.replace('fill-', 'bg-');

export const formatNumber = (num: number) => num.toLocaleString('id-ID', { maximumFractionDigits: 0 });

export const formatRupiah = (value: number): string => {
    return value.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    });
};

export function formatDate(date: Date | undefined) {
    if (!date) {
        return '';
    }

    return date.toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });
}

export function isValidDate(date: Date | undefined) {
    if (!date) {
        return false;
    }

    return !isNaN(date.getTime());
}
