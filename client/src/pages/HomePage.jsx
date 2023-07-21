import imagen_uno from "../images/imagen_uno.jpg";
import imagen_dos from "../images/imagen_dos.jpg";

function HomePage() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,300&display=swap" rel="stylesheet"></link>

            {/* Header section */}
            <div className="bg-white text-black text-center py-5">
                <h1 className="text-3xl">Market Place</h1>
            </div>

            {/* Shop section */}
            <div className="bg-stone-900 text-white text-left py-10 flex justify-between items-center">
                <h2 className="ml-4">Shop the new collection here first</h2>
                <button className="bg-stone-900 text-black border-white border px-4 py-2 rounded-lg mr-4">
                    <span className="font-bold text-white">Shop</span> <span className="text-white">Now</span>
                </button>

            </div>

            {/* Image section */}
            <div className="mt-neg-10 py-3">
                <img src={imagen_uno} alt="imagen-1" className="block mx-auto max-w-full" />
            </div>

            {/* Sale section */}
            <div class="sale-section text-center relative">
                <img src={imagen_dos} alt="Imagen-2" className="block mx-auto w-full max-h-32" />
                <button class="bg-stone-900 text-black px-4 py-2 rounded-lg absolute left-4 top-1/2 transform -translate-y-1/2">
                    <span className="text-white">What's on sale</span>
                </button>
            </div>

            {/* Footer section */}
            <div className="bg-stone-900 text-white text-center py-5">
                <a href="#" className="underline">Terms And Conditions</a>
            </div>
        </div>

    )
}

export default HomePage