import moment from "moment";

export const splitFullName = (fullName: string) => {
  const fullNameSplited = fullName.split(" ");
  const firstName = fullNameSplited[0];
  const lastName = fullNameSplited[1];
  return {
    firstName,
    lastName,
  };
};

export const calcularEdad = (dateBirth: string) => {
  const age = moment().diff(ordenarFecha(dateBirth), "years");
  return age;
};

export const ordenarFecha = (desorderedDate: string) => {
  const arrDate = desorderedDate.split("-").reverse();
  return arrDate.join("-");
};

export const transformarJson = (json: any) => {
  return {
    ...splitFullName(json.fullName),
    role: json.role,
    age: calcularEdad(json.birthday),
  };
};
