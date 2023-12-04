const formatedData = json => {
    const result = json.map(item => {
        const questions = { question: item.question };
        const answre = [...item.incorrect_answers];
        const correct_answer = Math.floor(Math.random() * 4);
        answre.splice(correct_answer, 0, item.correct_answer)
        questions.answre = answre;
        questions.correctanswer = correct_answer;
        return questions;
    })
    return result;
}

export default formatedData;