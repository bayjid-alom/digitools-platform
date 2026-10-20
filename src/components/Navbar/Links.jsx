import React from 'react';

const Links = ({ route }) => {

    return (
        <li key={route.name} className="group">
            <a
                className="relative text-sm font-semibold text-[#101727]/80 transition-colors duration-300 hover:text-[#4F39F6] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-gradient-to-r after:from-[#4F39F6] after:to-[#9514FA] after:transition-all after:duration-300 group-hover:after:w-full"
                href={route.path}
            >
                {route.name}
            </a>
        </li>
    );
};

export default Links;