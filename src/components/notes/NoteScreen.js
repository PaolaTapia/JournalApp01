import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
     return (
          <div className="notes_main-content">
               <NotesAppBar/>
               <div className="notes_content">
                    <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    />

                    <textarea
                    placeholder="What happened today"
                    className="notes_textarea"
                    ></textarea>

                    <div className="notes_image">
                         <img 
                         src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png"
                         alt="paisaje"
                         />

                    </div>

                    
               </div>
          </div>
     )
}
