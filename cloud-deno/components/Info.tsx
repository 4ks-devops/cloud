import { CalendarIcon, FolderOpenIcon, StarIcon } from "@heroicons/react/solid";
import { selectInfo } from "app/appSlice";
import { useAppSelector } from "app/hooks";
import Moment from "react-moment";

const Info = () => {
	const dirInfo = useAppSelector(selectInfo);

	return (
		<div className="relative sm:static row-start-1 md:row-start-auto">
			<div className="sticky top-4 col-span-1 flex flex-col sm:flex-row md:flex-col gap-4">
				<div className="max-w-sm w-full shadow-sm rounded-lg border border-gray-200 overflow-hidden">
					<div className="bg-gray-50 p-4">
						<div className="text-xl font-bold uppercase">Home Clud{dirInfo?.name && ` - ${dirInfo.name}`}</div>
						<div className="text-sm">A Home cloud app made in JavaScript</div>
						<div className="mt-3 flex items-center">
							<svg className="h-5 w-5 mr-2 inline text-gray-700" fill="currentColor" viewBox="0 0 24 24">
								<title>GitHub Repository</title>
								<path
									fillRule="evenodd"
									d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
									clipRule="evenodd"
								></path>
							</svg>
							<a className="link" target="_blank" href="https://github.com/iswilljr" rel="noreferrer">
								iswilljr
							</a>
						</div>
						<div className="mt-2 flex items-center">
							<StarIcon className="h-5 w-5 mr-2 inline text-gray-700" />
							<div>1</div>
						</div>
					</div>
				</div>
				<div className="max-w-sm w-full shadow-sm rounded-lg border border-gray-200 p-4">
					<p className="text-md font-semibold mb-2">Directory Info</p>
					{dirInfo && (
						<>
							<div className="mt-2 flex text-sm items-center">
								<FolderOpenIcon className="h-5 w-5 mr-2 inline text-gray-700" />
								<div>
									Total size <span>{dirInfo.size}</span>
								</div>
							</div>
							<div className="mt-2 flex text-sm items-center">
								<CalendarIcon className="h-5 w-5 mr-2 inline text-gray-700" />
								<div>
									Created{" "}
									<span>
										<Moment fromNow>{dirInfo.created}</Moment>
									</span>
								</div>
							</div>
							<div className="mt-2 flex text-sm items-center">
								<CalendarIcon className="h-5 w-5 mr-2 inline text-gray-700" />
								<div>
									Modified{" "}
									<span>
										<Moment fromNow>{dirInfo.modified}</Moment>
									</span>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Info;
