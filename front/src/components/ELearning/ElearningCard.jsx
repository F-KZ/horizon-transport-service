import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import logo from "../../assets/cpf.png"
import { Link } from "react-router-dom";

const ElearningCard = ({ name, description, niveau, image, id }) => {
  return (
    <Card className="relative mx-auto w-full h-full overflow-hidden bg-gray-800 border-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFC727]/10 hover:border-[#FFC727]/50 flex flex-col">
      {logo && (
        <div className="absolute top-2 right-2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-black/50 flex items-center justify-center p-1">
          <img src={logo} alt="logo CPF" className="w-full h-full object-contain" />
        </div>
      )}
      <div className="aspect-[16/10] sm:aspect-video bg-gray-800 flex items-center justify-center p-3 sm:p-4">
        <img
          src={image}
          alt="image de la formation"
          className="h-full w-full object-cover opacity-90 rounded-t-xl"
        />
      </div>
      <CardHeader className="space-y-1.5 sm:space-y-2 p-4 sm:p-6 flex-1">
        <p className="text-[10px] sm:text-xs font-medium text-[#FFC727] uppercase tracking-wide">
          {niveau}
        </p>
        <CardTitle className="text-base sm:text-lg text-white line-clamp-2 leading-snug">
          {name}
        </CardTitle>
        <CardDescription className="text-gray-400 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0 sm:p-6 sm:pt-0 mt-auto">
        <Link to={`/e-learning/${id}`}>
        <Button
         className="w-full bg-[#FFC727] hover:bg-[#FFC727]/90 text-black font-semibold h-9 sm:h-10 text-sm">
          Découvrir le cours
        </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
export default ElearningCard;