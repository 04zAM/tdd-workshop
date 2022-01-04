import {
  splitFullName,
  calcularEdad,
  ordenarFecha,
  transformarJson,
} from "../data-converted";

test("Dado el full name retorna el splited name", () => {
  const fullName = "Patricio Vasquez";
  const fullNameObejct = splitFullName(fullName);
  expect(fullNameObejct).toStrictEqual({
    firstName: "Patricio",
    lastName: "Vasquez",
  });
});

test("Dado la fecha de cmpleaños retorna la edad", () => {
  const birthDate = "07-05-1995";
  const age = calcularEdad(birthDate);
  expect(age).toBe(26);
});

test("Dado la fecha desordenada me entrega la fecha ordenada", () => {
  const desorderedDate = "07-05-1995";
  const orderedDate = ordenarFecha(desorderedDate);
  expect(orderedDate).toBe("1995-05-07");
});

test("Dado un JSON con fullName, role, y birthday, retorna un JSON con firstNAme, lastName, role, y age", () => {
  const json = {
    fullName: "Patricio Vasquez",
    role: "Developer",
    birthday: "07-05-1995",
  };
  const jsonTranformed = transformarJson(json);
  expect(jsonTranformed).toStrictEqual({
    firstName: "Patricio",
    lastName: "Vasquez",
    role: "Developer",
    age: 26,
  });
});
