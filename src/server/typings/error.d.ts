export interface ICustomError extends Error {
    status?: number;
    error_description?: string;
}