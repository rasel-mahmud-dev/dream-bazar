import React, {FC, InputHTMLAttributes} from "react";
import {AiFillStar} from "react-icons/all";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    rating: {rate: number}
	className: string
}

const RatingStar: FC<Props> =({rating, className, ...atrr})=>{
    return(

            <div className={`flex ${className}`} {...atrr}  >
            { new Array(5).fill(1).map((item, index)=>(
                <div className="relative">
                    <AiFillStar className={`${rating.rate <= (index + 1) ? "text-neutral-200" : " text-transparent"} `} />
                    <span className="absolute top-0">
                    { rating.rate >= (index + 1) && <AiFillStar className="text-orange-400" />  }
                    </span>
                </div>
            )) }
        </div>

    )
  }

  export default RatingStar