import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export default function Usuario({usuario}) {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
    } = useSortable({
        id: usuario.id
    });

    const style ={
        transform:CSS.Transform.toString(transform),
        transition
    };

    return(
        <div
          style= {style}
          ref={setNodeRef}
          {...attributes}
          {...listeners}


        className="bg-white p-4 rounded-md shadow-md text-black my-2">
         
            <h1 className= 'text-2xl font-bold'>{usuario.name}</h1>
        </div>
    )
}

