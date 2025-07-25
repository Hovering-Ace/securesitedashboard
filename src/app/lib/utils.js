import { clsx } from 'clsx';

// Tailwind class merge utility
export function cn(...inputs) {
  return clsx(inputs);
}

// Format timestamps like "Jul 25, 13:45"
export function formatTimestamp(date) {
  if (!date) return 'N/A';

  const parsed = typeof date === 'string' ? new Date(date) : date;

  if (!(parsed instanceof Date) || isNaN(parsed.getTime())) {
    return 'Invalid date';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(parsed);
}

// Get threat tag color classes
// export function getThreatColor(type) {
//   switch (type) {
//     case 'Gun Threat':
//       return 'text-red-500 bg-red-50';
//     case 'Unauthorised Access':
//       return 'text-orange-500 bg-orange-50';
//     case 'Face Recognised':
//       return 'text-blue-500 bg-blue-50';
//     default:
//       return 'text-gray-500 bg-gray-50';
//   }
// }
