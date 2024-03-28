/* eslint-disable react/prop-types */


const ImageWithCaption = ({ src, alt}) => (
    <div className="flex flex-col 
    items-center
    justify-center
    overflow-hidden
    ">
        <img src={src} alt={alt} className="w-full mt-4" />
        <p className="text-gray-400 mt-2 text-xs text-center">
            Imagen tomada de: <a href={src} target="_blank" rel="noreferrer">{src}</a>
        </p>
    </div>
);

export default ImageWithCaption;