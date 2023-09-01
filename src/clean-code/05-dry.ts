import { ZodError, ZodIssue, z as zod } from "zod";

const SizeZod = zod.union([
  zod.literal(""),
  zod.literal("S"),
  zod.literal("M"),
  zod.literal("L"),
  zod.literal("XL"),
]);

type Size = zod.infer<typeof SizeZod>;

const ProductSchema = zod.object({
  name: zod.string().min(1, { message: "name is empty" }).optional(),
  price: zod.number().min(1, { message: "price is zero" }).optional(),
  size: zod.string().min(1, { message: "size is empty" }).optional(),
});

const printLogError = (error: ZodError | Error | unknown) => {
  if (error instanceof ZodError) {
    const validationErrors: Array<ZodIssue> = error.issues;
    console.error("Errores de validación:", validationErrors);
  }
  if (error instanceof Error && !(error instanceof ZodError)) {
    console.error("Error de validación:", error.message);
  }
};

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  public get toString(): string {
    try {
      ProductSchema.parse(this);
      return `${this.name} - ${this.price} - ${this.size}`;
    } catch (error) {
      printLogError(error);
      return "Error al generar la cadena";
    }
  }
}

(() => {
  const bluePants = new Product("Blue Pants", 100, "M");
  console.log(bluePants.toString);
})();
