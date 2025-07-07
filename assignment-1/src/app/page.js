import QuoteForm from "@/components/QuoteGeneratorForm";

export default function Hello(){
  return(
    <main className="text-center">
      <div className="font-semibold">
      Welcome to the Quote Generator
    </div>
    <QuoteForm/>
    </main>
  );
}