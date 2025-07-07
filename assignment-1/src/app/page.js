import QuoteForm from "@/components/QuoteGeneratorForm";

export default function Hello(){
  return(
    <main className="text-center">
      <h1 className="font-bold m-2">
      Welcome to the Quote Generator
    </h1>
    <QuoteForm/>
    </main>
  );
}