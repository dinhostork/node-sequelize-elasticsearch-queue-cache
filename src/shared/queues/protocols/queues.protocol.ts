export interface JobProtocol {
    id?: string;
    key: string;
    data: unknown;
  }
export interface QueueAdapterProtocol {
    addJob: (key: string, data: unknown) => Promise<JobProtocol>;
  }