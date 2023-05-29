export default function Card(props) {
   let {name,status,species,gender,origin,image,onClose} = props
   return (
      <div>
         {
            <div>
               <button onClick={onClose}>X</button>
               <h2>{name}</h2>
               <h2>{status}</h2>
               <h2>{species}</h2>
               <h2>{gender}</h2>
               <h2>{origin}</h2>
               <img src={image} alt='imagen del personaje' />
            </div>
         }
      </div>
   );
}
