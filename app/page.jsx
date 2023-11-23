import Image from 'next/image';
import React, { ReactElement } from 'react';

// interface MenuProps {
//   menu: string[];
// }

const menu1 = [
  {
    name: "Dashboard",
    icon: ReactElement | null,
    isActive: false
  },
  {
    name: "Analytics",
    icon: ReactElement | null,
    isActive: false
  },
  {
    name: "Notivication",
    icon: ReactElement | null,
    isActive: false
  },
]

function Menus({ menu }) {
  return (
    <div>
      <ul>
        {menu.map((val, index) => {
          return (
            <li key={index} className='px-3 py-2 flex'>
              {val.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <div className="App">
      <section className="w-64 bg-slate-100 h-screen">
        <div className="border-b p-5">
          Dashboard UI
        </div>

        <div className="p-5 border-b text-sm">
          <h6>BUSSINES</h6>
          <Menus menu={menu1} />
        </div>
      </section>
    </div>
  );
}


