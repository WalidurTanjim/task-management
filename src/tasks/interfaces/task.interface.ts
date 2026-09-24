// TASK_STATUS_OPTIONS
export const TASK_STATUS_OPTIONS = ['open', 'in_progress', 'done'] as const;

// TASK_PRIORITY_OPTIONS
export const TASK_PRIORITY_OPTIONS = ['low', 'medium', 'high'] as const;

export interface Task {
     id: number;
     title: string;
     description: string;
     status: typeof TASK_STATUS_OPTIONS[number];
     priority: typeof TASK_PRIORITY_OPTIONS[number];
     createdAt: string;
}
