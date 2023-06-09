import React from 'react';
import useClasses from '../../hooks/useClasses';

const PopularClass = () => {
    const [classes, classesLoading, refetch] = useClasses()
    console.log(classes)
    const sortedData = classes.sort((a, b) => b.students - a.students).slice(0,6);
    return (
        <div>
          
            <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular classes</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {sortedData.map((cl) => (
            <div key={cl.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={cl.image}
                  alt={cl.image}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={cl.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {cl.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{cl.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">students : {cl.students}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    );
};

export default PopularClass;