const Product = ({product}) => {

  return (
<a href={product.website} target="__blank" className="flex flex-col text-white items-center justify-center gap-2 hover:scale-110">
        <div style={{backgroundImage: `url('https://assets-global.website-files.com/64c26cc84790d118b80c38c9/6529c5fdb05ba5609da216c9_monad-logo-mark-full-color-rgb.svg')`}} className="w-[75px] h-[75px] sm:w-[125px] monad sm:h-[125px] bg-center bg-no-repeat bg-cover flex items-center justify-center">
            <img src={product.img} className="sm:w-[75px] sm:h-[75px] h-[40px] w-[40px] rounded-full"/>
            </div>
            <h3 className="text-base w-full text-center">{product.name}</h3>
            </a>       
  )
}

export default Product