import React from "react";
import DescriptionDisplay from './DescriptionDisplay';

const plo1 = {
    title: "PLO 1 The Learner & Learning",
    description: "Apply/Synthesize knowledge of learner development, learner differences, diverse students, and the learning environment to optimize learning for Early Childhood (ages 2 ½ to 8 years old) students. (InTASC 1-3)"
}
const plo2 = {
    title: "PLO 2 Content",
    description: "Describe/Evaluate central concepts, tools of inquiry, and structures of the subject matter disciplines for Early Childhood (ages 2 ½ to 8 years old) students. (InTASC 4,5)"
}
const plo3 = {
    title: "PLO 3 Instructional Practice",
    description: "Utilize formative and summative assessments, to determine, select, and implement effective instructional strategies for Early Childhood (ages 2 ½ to 8 years old) students. (InTASC 6-8)"
}
const plo4 = {
    title: "PLO 4 Professional Responsibility",
    description: "Analyze the history, values, commitments, and ethics of the teaching profession within the school community. (InTASC 9,10)"
}
const plo5 = {
    title: "PLO 5 Integral Quality Education",
    description: "Explain the Marianist tradition of providing an integral, quality education within diverse learning communities."
}

export default function DisplayPLO1() {
    return (
        <>
            <div>
                <DescriptionDisplay title={plo1.title} description={plo1.description} />
            </div>
        </>
    )
}
export default function DisplayPLO2() {
    return (
        <>
            <div>
                <DescriptionDisplay title={plo2.title} description={plo2.description} />
            </div>
        </>
    )
}
export default function DisplayPLO3() {
    return (
        <>
            <div>
                <DescriptionDisplay title={plo3.title} description={plo3.description} />
            </div>
        </>
    )
}
export default function DisplayPLO4() {
    return (
        <>
            <div>
                <DescriptionDisplay title={plo4.title} description={plo4.description} />
            </div>
        </>
    )
}
export default function DisplayPLO5() {
    return (
        <>
            <div>
                <DescriptionDisplay title={plo5.title} description={plo5.description} />
            </div>
        </>
    )
}
