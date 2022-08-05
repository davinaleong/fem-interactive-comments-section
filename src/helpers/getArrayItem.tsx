const getArrayItem = (array: any[], field: string, value: any) => {
  const item = array.filter((item) => item[field] == value)[0];
};

export default getArrayItem;
