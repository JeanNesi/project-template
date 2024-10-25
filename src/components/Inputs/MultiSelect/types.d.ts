export interface IOptions {
  value: string;
  label: string;
}

type IAsyncOptions = ({ search }: { search: string }) => Promise<IOptions[]>;

export interface IMultiSelect {
  label?: string;
  options: IAsyncOptions | IOptions[];
  value?: IOptions[];
  onChange: (options: IOptions[]) => void;
}
