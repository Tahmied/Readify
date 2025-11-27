'use client' 

import { Loader2, Trash2 } from 'lucide-react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { deleteBook } from './actions';

const DeleteBtn = ({ id }) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        });

        if (result.isConfirmed) {
            setIsDeleting(true);
            
            const response = await deleteBook(id);

            if (response.success) {
                Swal.fire(
                    'Deleted!',
                    'Your book has been deleted.',
                    'success'
                );
                
            } else {
                Swal.fire(
                    'Error!',
                    'Something went wrong.',
                    'error'
                );
            }
            setIsDeleting(false);
        }
    };

    return (
        <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="bg-red-50 text-red-600 px-3 py-2 rounded-lg font-medium hover:bg-red-100 transition-colors duration-200 flex items-center justify-center cursor-pointer disabled:opacity-50"
            title="Delete Book"
        >
            {isDeleting ? (
                <Loader2 size={16} className="animate-spin" />
            ) : (
                <Trash2 size={16} />
            )}
        </button>
    );
};

export default DeleteBtn;