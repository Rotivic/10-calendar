import React from 'react'
import { useCalendarStore, useUiStore } from '../../hooks'
import { addHours } from 'date-fns';

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = ( ) => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(), 2 ),
            bgColor: '#fafafa',
            user: {
              _id: '123',
              name: 'Fernando'
            }
        });
        openDateModal();
    }

  return (
    <button
        className='btn btn-primary fab'
        onClick={handleClickNew}
    >
        <i className='fas fa-plus' />
    </button>
  )
}
