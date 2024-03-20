import "./Cards.css"

function Card(props) {
    const title=props.title
    const desc=props.desc
    const src=props.src
  return (
    <div className="card w-[60%] md:h-full md:w-[20%] text-white flex flex-col gap-4 rounded-md p-1">
      <div className="flex justify-center">
        <img src={src} className="w-[50%]"/>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-['Poppins'] font-extrabold text-[1.2rem]">{title}</h3>
        <p className="font-['Roboto'] text-[0.85rem]">{desc}</p>
      </div>
    </div>
  );
}

export default Card;
