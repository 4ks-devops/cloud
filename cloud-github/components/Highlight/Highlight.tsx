import SyntaxHighlighter from "react-syntax-highlighter";
import githubTheme from "styles/markdown/github-dark";

interface HighlightProps {
	code: string | string[];
	wrap?: boolean;
	lineNumbers?: boolean;
	language?: string;
	styles?: {
		lineNumbers?: React.CSSProperties;
		root?: React.CSSProperties;
	};
	preTag?: keyof JSX.IntrinsicElements
}

const Highlight = ({ code, language = "javascript", lineNumbers = false, wrap = false, styles,preTag }: HighlightProps) => {
	return (
		<SyntaxHighlighter
			language={language}
			lineNumberStyle={{ width: "50px", textAlign: "right", color: "#8b949e", ...styles?.lineNumbers }}
			customStyle={{ fontSize: "12px", margin: 0, ...styles?.root }}
			wrapLongLines={wrap}
			showLineNumbers={lineNumbers}
			style={githubTheme}
			PreTag={preTag}
		>
			{code}
		</SyntaxHighlighter>
	);
};

export default Highlight;
