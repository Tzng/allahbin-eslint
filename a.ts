export type IDefSysDefinedAttributes<T> = {
  id: string;
  attLabel: string;
  attType: T;
  attTypeText: string;
  description: string;
  weight: number;
  defaultValue?: any;
  dicGroupKey?: string;
  options?: {
    value: any;
    eum: any;
  };
  zlKey: string;
};

const a = () => {
  return 'sadsada';
};

a();
