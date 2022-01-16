export const Loading = () => {
    return(
        <div className="lg:w-1/4 md:w-1/3 w-full mb-4 p-5">
            <div className="mx-4">
                <div className="w-64 h-40 bg-grey-loader animate-pulse mb-2"></div>
                <div className="w-64 h-6 bg-grey-loader animate-pulse mb-2"></div>
            </div>
        </div>
    );
}