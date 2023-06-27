import { useSelector } from "react-redux/es/hooks/useSelector";


const Columns = () => {
    const { columns } = useSelector((state) => state.columns)
    const { array } = useSelector((state) => state.columns)

    const columnElements = []

    for (let i = columns - 1; i > -1; i--) {
        let height = array[i]
        let margin = 0.5
        
        columnElements.push(
            <div className="col bg-success" style={{height: height, width:0.00001, padding: 0, margin: margin}} key={i}></div>
        )
    }

    return (
        <div className="row flex-nowrap m-5">
            {columnElements}
        </div>
    )
}

export default Columns;