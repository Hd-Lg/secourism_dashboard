import { useDispatch, useSelector } from "react-redux";
import { closeNavbar, openNavbar } from "../features/navbarSlice";

const ModalTest = () => {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((store) => store.navbar);
	console.log(isOpen);

	return (
		<aside>
			<p>Change the value of 'isOpen'?</p>
			<button
				type='button'
				onClick={() => {
					dispatch(closeNavbar());
				}}>
				Change to false
			</button>
			<button
				type='button'
				onClick={() => {
					dispatch(openNavbar());
				}}>
				Change to true
			</button>
		</aside>
	);
};

export default ModalTest;
