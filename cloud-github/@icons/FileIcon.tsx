export default function FileIcon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			aria-label="File"
			aria-hidden="true"
			height="16"
			viewBox="0 0 16 16"
			version="1.1"
			width="16"
			data-view-component="true"
			{...props}
		>
			<path
				fillRule="evenodd"
				d="M3.75 1.5a.25.25 0 00-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 00.25-.25V6h-2.75A1.75 1.75 0 019 4.25V1.5H3.75zm6.75.062V4.25c0 .138.112.25.25.25h2.688a.252.252 0 00-.011-.013l-2.914-2.914a.272.272 0 00-.013-.011zM2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0113.25 16h-9.5A1.75 1.75 0 012 14.25V1.75z"
			/>
		</svg>
	);
}
