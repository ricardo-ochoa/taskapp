

export interface Entry {
    _id: string;
    title: string;
    description: string;
    createdAt: number;
    status: Status;
}

export type Status = "pennding" | "in-progress" | "done";