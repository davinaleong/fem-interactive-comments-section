const getArrayItem = (array: any[], field: string, value: any) => {
  return array.filter((item) => item[field] == value)[0];
};

export default getArrayItem;
