const Helmet = ({ title, children }) => {
	document.title = "Dashboard - " + title;
	return <main>{children}</main>;
};

export default Helmet;
