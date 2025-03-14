export default function ProgramCard({card}) {
  return (
    <div className="flex flex-col items-center">
      <img className="w-[50px] mb-3 hover:scale-[1.1] duration-500 ease" src={card.src} alt={card.alt} />
      <p>{card.name}</p>
    </div>
  );
}
