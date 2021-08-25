import React from "react";
import { Tick, MTLModel } from "react-3d-viewer";
function Tank_model() {
    return (
        <>
            <div>
                <MTLModel
                    
                    texPath=""
                    mtl="https://ipfs.io/ipfs/QmWXD7Z3ZgymJ4eGRqrsP8j4atBARmXeDqTgUYRacu731Y?filename=Tank_Rig.mtl"
                    src="https://ipfs.io/ipfs/QmbANMrQsUs72m7ZQxS7rEH8nzQ9D5wNWQJEwsf57gTjyF?filename=Tank_Rig.obj"
                />
            </div>
        </>
    );
}

export default Tank_model;
