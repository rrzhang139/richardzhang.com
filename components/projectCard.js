import React from "react";

const ProjectCard = (props) => {
  return (
    <li className="mx-8 mb-6 w-96">
      <div className="border w-full	p-3 font-yusei flex flex-col">
        <h2 className="underline ml-3 text-lg">{props.title}</h2>
        <h3 className="text-sm border w-max	p-1 flex flex-row self-end mb-4 mr-5 mt-4">
          <span>
            <img
              alt="svgImg"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCA1MCA1MCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBkPSJNIDEyLjUgMyBDIDcuMjc2OTgyIDMgMyA3LjI3Njk4NjIgMyAxMi41IEMgMyAxNy43MjMwMTQgNy4yNzY5ODIgMjIgMTIuNSAyMiBDIDE3LjcyMzAxOCAyMiAyMiAxNy43MjMwMTQgMjIgMTIuNSBDIDIyIDcuMjc2OTg2MiAxNy43MjMwMTggMyAxMi41IDMgeiBNIDM3LjUgMyBDIDMyLjI3Njk4MiAzIDI4IDcuMjc2OTg2MiAyOCAxMi41IEMgMjggMTcuNzIzMDE0IDMyLjI3Njk4MiAyMiAzNy41IDIyIEMgNDIuNzIzMDE4IDIyIDQ3IDE3LjcyMzAxNCA0NyAxMi41IEMgNDcgNy4yNzY5ODYyIDQyLjcyMzAxOCAzIDM3LjUgMyB6IE0gMTIuNSA3IEMgMTUuNTYxMjU5IDcgMTggOS40Mzg3NDI4IDE4IDEyLjUgQyAxOCAxNS41NjEyNTcgMTUuNTYxMjU5IDE4IDEyLjUgMTggQyA5LjQzODc0MTEgMTggNyAxNS41NjEyNTcgNyAxMi41IEMgNyA5LjQzODc0MjggOS40Mzg3NDExIDcgMTIuNSA3IHogTSAzNy41IDcgQyA0MC41NjEyNTkgNyA0MyA5LjQzODc0MjggNDMgMTIuNSBDIDQzIDE1LjU2MTI1NyA0MC41NjEyNTkgMTggMzcuNSAxOCBDIDM0LjQzODc0MSAxOCAzMiAxNS41NjEyNTcgMzIgMTIuNSBDIDMyIDkuNDM4NzQyOCAzNC40Mzg3NDEgNyAzNy41IDcgeiBNIDM3LjUgMjggQyAzMi4yNzY5ODIgMjggMjggMzIuMjc2OTg2IDI4IDM3LjUgQyAyOCA0Mi43MjMwMTQgMzIuMjc2OTgyIDQ3IDM3LjUgNDcgQyA0Mi43MjMwMTggNDcgNDcgNDIuNzIzMDE0IDQ3IDM3LjUgQyA0NyAzMi4yNzY5ODYgNDIuNzIzMDE4IDI4IDM3LjUgMjggeiBNIDM3LjUgMzIgQyA0MC41NjEyNTkgMzIgNDMgMzQuNDM4NzQzIDQzIDM3LjUgQyA0MyA0MC41NjEyNTcgNDAuNTYxMjU5IDQzIDM3LjUgNDMgQyAzNC40Mzg3NDEgNDMgMzIgNDAuNTYxMjU3IDMyIDM3LjUgQyAzMiAzNC40Mzg3NDMgMzQuNDM4NzQxIDMyIDM3LjUgMzIgeiI+PC9wYXRoPjwvc3ZnPg=="
              width={20}
              height={20}
              className="mr-2"
            />
          </span>
          {props.type}
        </h3>
        <video width="320" height="240" controls className="m-auto mb-7">
          <source src={`/assets/videos/${props.url}`} type="video/mp4" />
        </video>
        <p className="font-sans text-center px-2 mb-5 font-light">
          {props.description}
        </p>
      </div>
    </li>
  );
};

export default ProjectCard;
