export default function Catch_all({ params }) {
    let content;

    if (params.item?.length === 2) {
        content = <h1>Viewing Item: {params.item[0]} and the {params.item[1]} of it.</h1>;
    } else if (params.item?.length === 1) {
        content = <h1>Viewing Item {params.item[0]}</h1>;
    } else {
        content = 
        <div className="text-center">
            <h1 className="text-2xl font-bold">Catch All segments Home Page</h1>
            <p className="mt-4">Enter the item name and the detail you want to view, using the format: http://localhost:3000/Catch_All/Item_Name/Detail. For example, http://localhost:3000/Catch_All/Rubric_cube/Price will display the output: "Viewing Item: Rubric_Cube" and "Price of it."</p>
        </div>;
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            {content}
        </div>
    );
}
