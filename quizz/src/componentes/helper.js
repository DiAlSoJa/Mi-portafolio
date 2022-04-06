export const suffleAnswers = (question) => {
    const unshuffledAnswers = [
        question.Correcta,...question.Incorrectas
    ];
    return unshuffledAnswers.map(answer => ({sort: Math.random(),value: answer}))
    .sort((a,b)=>a.sort - b.sort).map(obj => obj.value);
}