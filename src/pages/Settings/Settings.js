import {Layout} from "../../components/Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import styles from './Settings.module.css'
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import { useNavigate} from "react-router-dom";
import {resetGameAction} from "../../redux/gameReducer/actions";

export const Settings = () => {
    const { history, playerName } = useSelector(state => state.game)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(history.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(history.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % history.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        if(history.length < 1){
            navigate('/')
        }
    },[])

    const handleResetGame = () => {
        navigate('/')
        dispatch(resetGameAction())
    }

    return <Layout>
        <h3 className={styles.header}>Game History</h3>
        <p className={styles.text}>Player name: {playerName}</p>
        <button onClick={() => handleResetGame()} className={styles.button}>Reset game</button>
        <table className={styles.table}>
            <thead>
            <tr>
                <th>Move count</th>
                <th>Picked Item</th>
                <th>Points</th>
            </tr>
            </thead>
            <tbody>
            {currentItems.map(row => <tr>
                <td className={styles.cell}>{row.moveCount}</td>
                <td className={styles.cell}>
                    <img src={row.selectedItem.src} alt='Img'/>
                </td>
                <td className={styles.cell}>{row.count}</td>
            </tr>)}
            </tbody>
        </table>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className={styles.pagination}
            pageClassName={styles.item}
        />
    </Layout>
}