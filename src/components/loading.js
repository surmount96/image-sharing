export const Loading = () => {
    return(
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full p-5 mb-4">
 
            <div className="lg:w-64 md:w-64 w-full rounded-lg lg:h-40 md:h-40 h-64 bg-grey-loader animate-pulse mb-2"></div>
            <div className="lg:w-64 md:w-64 w-full  h-6 bg-grey-loader animate-pulse mb-2"></div>
    
        </div>
    );
}