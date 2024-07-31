export default function Sub({ params }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Sub ID: {params.subID}</h1>
        </div>
    );
}
