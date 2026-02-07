export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <h1 className="text-4xl font-bold text-center">
          FinSight AI App
        </h1>
      </div>
      <p className="text-center text-lg text-foreground/80 max-w-2xl">
        Coming soon.
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
