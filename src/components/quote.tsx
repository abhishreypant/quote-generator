"use client";
import { useRef, useState } from "react";
import { Download } from "lucide-react";
import * as htmlToImage from "html-to-image";
import { saveAs } from "file-saver";

interface Props {
	bg: string;
	quote: string;
	writer?: string;
	size: string;
}

const Quote = ({ bg, quote, writer, size }: Props) => {
	const [activeSize, setActiveSize] = useState<string>("400"); // State to hold active orientation size
	const quoteRef = useRef<HTMLDivElement>(null);

	const handleOrientationClick = (size: string) => {
		setActiveSize(size);
	};

	const handleDownload = () => {
		if (!quoteRef.current) return;

		htmlToImage.toBlob(quoteRef.current).then(function (blob) {
			saveAs(blob, "quote.png");
		});
	};

	return (
		<div className="w-full flex-1 flex flex-col gap-4 p-8 bg-white shadow-md rounded-xl">
			<div className="orientations flex items-center gap-2">
				{orientations.map((o) => (
					<button
						key={o.label}
						onClick={() => handleOrientationClick(o.size)}
						className={`py-1 px-2.5 text-sm border rounded-full ${
							o.size === activeSize ? "bg-zinc-900 text-gray-100" : ""
						}`}>
						{o.label}
					</button>
				))}
			</div>
			<div
				ref={quoteRef}
				className={`quote-image w-[400px] h-[400px] text-gray-100  flex p-6 text-2xl font-semibold  items-start justify-center flex-col gap-4 ${
					size === "small"
						? "text-xl"
						: size === "medium"
						? "text-2xl"
						: "text-4xl"
				}`}
				style={{
					backgroundColor: bg,
					height: `${activeSize}px`,
				}}>
				{quote}
				{writer && (
					<div className="font-normal text-sm opacity-80 tracking-wide">
						- {writer}
					</div>
				)}
			</div>
			<div className="flex items-center">
				<button
					className="flex py-1.5 text-center px-3 gap-2 border-2 rounded-md flex-1 items-center justify-center"
					onClick={handleDownload}>
					<Download size={16} />
					Download Image
				</button>
			</div>
		</div>
	);
};

export default Quote;

const orientations = [
	{ label: "1:1", size: "400", active: true },
	{ label: "2:1", size: "200", active: false },
	{ label: "3:2", size: "300", active: false },
];
