import Note from "../models/note.js";



export const createNote=async (request,response)=>{

    try{
        const note=await new Note(request.body)
        note.save()
        return response.status(200).json("Note saved")
    }catch(error){
        return response.status(500).json({msg:error.message});
    }

}

export const getNotes= async (request,response) =>{
    let notes;
    try{
        notes=await Note.find({})  
        return response.status(200).json(notes)
    }catch(error){
        response.status(500).json({msg:"Internal Server Error"})
    }
}

export const getNote= async (request,response)=>{
    try{
        const note=await Note.findById(request.params.id)
        if(note){
            response.status(200).json(note)
        }else{
            response.status(404).json("Note not found")
        }
    }catch(error){
        response.status(200).json({msg:error.message})
    }
}

export const updateNote= async(request,response)=>{
    try{
        const  note=await Note.findById(request.params.id)

        if(!note){
            return response.status(404).json({msg:error.message})
        }

        await Note.findByIdAndUpdate(request.params.id,{$set:request.body})
        response.status(200).json({msg:"Note Updated Successfully"})
    }catch(error){
        response.status(500).json({msg:error.message})
    }

}


export const deleteNote=async(request,response)=>{
    try{
        const deletedNote = await Note.findByIdAndDelete(request.params.id);

        if(!deletedNote){
            return response.status(404).json({msg:"Note Not Found"})
        }

        console.log(deletedNote)

        return response.status(200).json({msg:"Note Deleted Successfully"})
    }catch(error){
        console.log("error from here")
        response.status(500).json({msg:error.message})
    }
}
