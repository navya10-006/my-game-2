class Question{
    constructor(){
        this.title = createElement('h1')
        this.input = createInput("Enter Correct Option No..");
        this.button = createButton('Submit');
        this.question = createElement('h3');
    }

    hide(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        this.title.html("The Zodiacs 1");
        this.title.position(350, 0);
        this.question.html("Question:- " );
        this.question.position(150, 80);
        this.input.position(150, 230);
        this.button.position(290, 300);
    }
}