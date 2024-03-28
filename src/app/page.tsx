"use client";
import Quote from "@/components/quote";
import { Download, PickaxeIcon, Pipette, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Home() {
	const [bg, setBg] = useState("#111");
	const [quote, setQuote] = useState("It takes nothing more than courage.");
	const [writer, setWriter] = useState("Abhishrey Pant");

	const [selected, setSelected] = useState("medium");

	const handleClick = (size: string) => {
		setSelected(size);
	};
	467800;
	return (
		<>
			<main className="flex items-center flex-wrap gap-4 w-full min-h-screen justify-center">
				<div className="config flex-1 max-w-[500px] p-8">
					{/* <h1 className="text-2xl  mb-12 font-bold text-slate-700">
						quotez-ai
					</h1> */}
					<form action="" className="flex flex-col gap-3">
						<label
							htmlFor=""
							className=" flex gap-2 items-center  justify-between text-bold font-medium text-md ">
							Quote
							<button className="py-1 flex items-center gap-2 px-2.5 text-sm text-zinc-800 hover:bg-zinc-900 hover:text-gray-100 transition-all border border-zinc-300  rounded-full">
								<Sparkles size={16} /> Generate AI Quote
							</button>
						</label>

						<textarea
							value={quote}
							onChange={(e) => setQuote(e.target.value)}
							name=""
							id=""
							rows={2}
							className="bg  bg-transparent border-2 rounded-md border-zinc-300 p-2 "></textarea>

						<div className="flex  items-center">
							<div className="flex text-xs border border-zinc-400  cursor-pointer rounded-full capitalize overflow-hidden font-medium">
								<div
									className={`py-1 px-2.5 ${
										selected === "small"
											? "bg-zinc-800 text-gray-100"
											: " text-gray-900"
									}`}
									onClick={() => handleClick("small")}>
									Small
								</div>
								<div
									className={`py-1 px-2.5 ${
										selected === "medium"
											? "bg-zinc-800 text-gray-100"
											: " text-gray-900"
									}`}
									onClick={() => handleClick("medium")}>
									Medium
								</div>
								<div
									className={`py-1 px-2.5 ${
										selected === "large"
											? "bg-zinc-800 text-gray-100"
											: " text-gray-900"
									}`}
									onClick={() => handleClick("large")}>
									Large
								</div>
							</div>
						</div>
						<br />
						<label htmlFor="" className="text-bold font-medium text-md ">
							Writer
						</label>
						<input
							value={writer}
							onChange={(e) => setWriter(e.target.value)}
							className="bg  bg-transparent border-2 rounded-md border-zinc-300 p-2 "></input>
						<br />
						<div className="flex gap-3">
							<div className="w-12 h-12 rounded-md   hover:scale-110   relative overflow-hidden">
								<input
									value={bg}
									onChange={(e) => {
										setBg(e.target.value);
										console.log(e.target.value);
									}}
									type="color"
									className=" w-20 absolute -top-4 -left-4 h-20 border-none outline-none rounded-md"
								/>

								<div className="w-full h-full pointer-events-none flex bg-transparent z-1 absolute text-gray-100 items-center justify-center">
									<Pipette size={16} />
								</div>
							</div>
						</div>
					</form>
				</div>

				<div>
					<Quote bg={bg} quote={quote} size={selected} writer={writer}></Quote>
				</div>
			</main>
		</>
	);
}
