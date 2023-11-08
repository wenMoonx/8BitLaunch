export const v = {
  required: [
    (val: string) => (val && val.length > 0) || 'This field is required',
  ],
  requiredNum: [(val: number) => val > 0 || 'This field is required'],
  error: () => useNotify('negative', 'Please fill all the required inputs.'),
};
