import React, { useState } from 'react'

function AddSkill() {
    function addSkill() {

    }
    return (
        <>
           <h3>Add Skill</h3>
            Skill :
            <input type="text" id="txtSkill" />
            <p></p>
            <button onClick={addSkill}>Add</button>
        </>
    )
}

function ListSkills({skills}){
    return (
        <>
          <h3>Skills</h3>
          <ul>
                {
                    skills.map(skill =>
                        <li key={skill}>
                            {skill}
                            &nbsp;
                            <button>Del</button>
                        </li>)
                }
            </ul>
        </>
    )
}

export default function TechSkills() {
    var [skills, setSkills] = useState([])

    // function addSkill() {
    //     let skill = document.getElementById("txtSkill").value
    //     setSkills([...skills, skill])
    // }

    // function deleteSkill(skillToDelete) {
    //     // take all skills except the one to delete 
    //     var skillsToRetain = skills.filter((skill) => skill !== skillToDelete)
    //     setSkills([...skillsToRetain])
    // }

    return (
        <>
         <AddSkill />
         <p></p>
         <hr/>
         <p></p>
         <ListSkills skills={skills} />
        </>
    )
}
