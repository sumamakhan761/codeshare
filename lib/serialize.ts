type SerializedValue<T> =
  | { type: "Date"; value: string }
  | { type: "Function"; value: string }
  | T;

function serializeCustom<T>(_: string, value: T): SerializedValue<T> {
  if (value instanceof Date) {
    return { type: "Date", value: (value as Date).toJSON() };
  }// new Date("2025-01-18")
    // Serialized as: { type: "Date", value: "2025-01-18T00:00:00.000Z" }

  if (typeof value === "function") {
    return { type: "Function", value: value.toString() };
  } //function greet() { return "Hello!"; }
  // Serialized as: { type: "Function", value: "function greet() { return 'Hello!'; }" }

  return value;
}

function isSerializedDate(
  value: any
): value is { type: "Date"; value: string } {
  return value && value.type === "Date";
}

function isSerializedFunction(
  value: any
): value is { type: "Function"; value: string } {
  return value && value.type === "Function";
}

function reviver<T>(_: string, value: SerializedValue<T>): T {
  if (isSerializedDate(value)) {
    return new Date(value.value) as unknown as T;
  }
  if (isSerializedFunction(value)) {
    return new Function(`return ${value.value}`)() as unknown as T;
  }
  return value as T;
}

export function serialize<T>(input: T): T {
  const serializedObject = JSON.stringify(input, serializeCustom);

  return JSON.parse(serializedObject, reviver);
}
