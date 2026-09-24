// TICKET_STATUS_OPTIONS
export const TICKET_STATUS_OPTIONS = ['open', 'closed'] as const;

// TICKET_PRIORITY_OPTIONS
export const TICKET_PRIORITY_OPTIONS = ['low', 'medium', 'high'] as const;

export interface Ticket {
     id: number;
     subject: string;
     description: string;
     status: typeof TICKET_STATUS_OPTIONS[number];
     priority: typeof TICKET_PRIORITY_OPTIONS[number];
     createdAt: string;
}
