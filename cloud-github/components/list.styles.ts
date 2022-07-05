import { createStyles } from "@mantine/core";

export default createStyles(() => ({
	fileNav: { display: "flex", alignItems: "start", marginBottom: "16px" },
	box: {
		marginBottom: "16px",
		backgroundColor: "var(--background-color)",
		border: "1px solid var(--border-hover-color)",
		borderRadius: "6px",
	},
	boxHeader: {
		position: "relative",
		margin: "-1px -1px 0",
		backgroundColor: "var(--background-hover-color)",
		border: "1px solid var(--border-hover-color)",
		borderTopLeftRadius: "6px",
		borderTopRightRadius: "6px",
		padding: "16px",
	},
	headerDetails: { display: "flex", alignItems: "center" },
	avatar: { backgroundColor: "transparent !important", borderRadius: "9999px" },
	moreDetails: {
		display: "flex",
		alignItems: "center",
		marginLeft: "16px",
		fontWeight: "bold",
		flex: 1,
	},
	commits: {
		color: "var(--text-color)",
		fontSize: "14px",
		display: "flex",
		alignItems: "center",
		"& > svg": { marginRight: "4px" },
	},
	markdown: {
		border: "1px solid var(--border-hover-color)",
		borderRadius: "6px",
		backgroundColor: "var(--background-color)",
	},
	markdownHeader: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "16px",
		fontSze: "14px",
		height: "54px",
		borderTopLeftRadius: "6px",
		borderTopRightRadius: "6px",
		position: "sticky",
		top: 0,
		zIndex: 99,
		backgroundColor: "var(--background-color)",
		borderBottom: "1px solid var(--border-color)",
	},
	markdownTitle: { flex: 1, fontWeight: "bold" },
	markdownEdit: { cursor: "pointer", "&:hover svg": { fill: "var(--link-color)" } },
	markdownContent: {
		padding: "16px 32px 32px",
		borderBottomLeftRadius: "6px",
		borderBottomRightRadius: "6px",
	},
}));
