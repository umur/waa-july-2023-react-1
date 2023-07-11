import React, { FC, useState } from "react";

interface IOption {
  value: any;
  label: string;
}

interface SimpleMenuInputProps {
  id: string;
  name: string;
  placeholder: string;
  options: IOption[];
  label?: string;
  hint?: string;
  className?: string;
  onChange?: (value: any) => void;
}

const SimpleSelectMenu: FC<SimpleMenuInputProps> = ({
  id,
  name,
  placeholder,
  options,
  label,
  hint,
  className,
  onChange,
}) => {
  const [DDLOpened, setDDLOpened] = useState(false);

  function toggleDDL() {
    setDDLOpened(!DDLOpened);
  }

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={name}
          className="float-left block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}

      <div className="relative mt-2">
        <button
          type="button"
          className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
          aria-haspopup="listbox"
          aria-expanded="true"
          aria-labelledby="listbox-label"
          onClick={toggleDDL}
        >
          <span className="block truncate">Tom Cook</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {DDLOpened && (
          <ul
            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
          >
            <li
              className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
              id="listbox-option-0"
              role="option"
            >
              <span className="font-normal block truncate">Wade Cooper</span>
              <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SimpleSelectMenu;
