export interface Builder<T = unknown> {
    build(...args: any[]): T;
    dispose(): void;
}
