import { useSelector } from "react-redux/es/hooks/useSelector";


const Columns = () => {
    const { columns } = useSelector((state) => state.columns)

    const columnElements = []

    for (let i = 0; i < columns; i++) {
        columnElements.push(
            <div className="col bg-success border border-danger border-1">
                1
            </div>
        )
    }

    return (
        <div className="row m-5">
            {columnElements}
        </div>
    )
}

export default Columns;