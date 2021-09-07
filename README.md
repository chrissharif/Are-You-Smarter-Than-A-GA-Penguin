# Are You Smarter Than a GA Penguin?

https://pages.git.generalassemb.ly/chrissharif/Are-You-Smarter-Than-a-GA-Penguin/index.html#answers

## Project Name

Are You Smarter Than a GA Penguin?

## Project Description

This game is an "Are You Smarter Than a 5th Grader" inspired game with trivia questions related to computer science. "Are You Smarter Than a GA Penguin?" has a similar play style to the original game where you earn points after each question the participant answers correct. Having at least seven points correct results in a winning game.

## API and Data Sample

[Open Trivia Database API](https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple)

This specific API will include 10 random computer science questions at an "easy" level.

```json
"response_code": 0,
    "results": [
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In any programming language, what is the most common way to iterate through an array?",
            "correct_answer": "&#039;For&#039; loops",
            "incorrect_answers": [
                "&#039;If&#039; Statements",
                "&#039;Do-while&#039; loops",
                "&#039;While&#039; loops"
            ]
        },
```

## Wireframes

[Wireframe](https://wireframe.cc/loi6P1)

### MVP/PostMVP

#### MVP

- Create a Start Game button
- Have functional questions which randomly generate a trivia question
- Add Win or Lose screen at end of game

#### PostMVP

- Allow player to refresh page and play again
- Add a pop-up explaining how the game is played
- Include multiple categories for the game
- Style answers to show correct answer
- Add correct answer counter

## Project Schedule

| Day     | Deliverable                                                     | Status   |
| ------- | --------------------------------------------------------------- | -------- |
| June 21 | Prompt / Wireframes / Priority Matrix / Timeframes              | Complete |
| June 22 | Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete |
| June 23 | JavaScript + Functionality                                      | Complete |
| June 24 | Finish JavaScript / CSS for Appearance                          | Complete |
| June 25 | MVP/PMVP / Final Functionality Check                            | Complete |
| June 28 | Presentations                                                   | Complete |

## Priority Matrix

[Priority Matrix](https://wireframe.cc/17I3Cw)

## Timeframes

| Component                                   | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Basic HTML                                  |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Basic CSS to Define Page Elements           |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Adding API to JavaScript                    |    H     |      1hrs      |     1hrs      |    1hrs     |
| Creating Start Game Button                  |    H     |      1hrs      |    0.5hrs     |   0.5hrs    |
| Start Coding Main Functionaliy w/ API       |    H     |      2hrs      |     2hrs      |    2hrs     |
| Add Event Listeners                         |    H     |      1hrs      |     2hrs      |    2hrs     |
| Create Elements and Append to DOM           |    H     |      3hrs      |     2hrs      |    2hrs     |
| Add Question and Answer Elements            |    H     |      2hrs      |     2hrs      |    2hrs     |
| Make Answer Elements Functional             |    H     |      3hrs      |     2hrs      |    2hrs     |
| Style Question and Answer Elements          |    M     |      2hrs      |     1hrs      |    1hrs     |
| Remove Elements after Question is Answered  |    H     |      1hrs      |     2hrs      |    2hrs     |
| Make Sure Game is Functionable + Debugging  |    H     |      2hrs      |     4hrs      |    4hrs     |
| Create Answer Counter and Make Functionable |    M     |      2hrs      |     1hrs      |    1hrs     |
| Add Answer Counters to Each Question        |    M     |      2hrs      |     1hrs      |    1hrs     |
| Add Win or Lose Message                     |    H     |      1hrs      |     1hrs      |    1hrs     |
| Flexbox with All Elements                   |    H     |      1hrs      |     1hrs      |    1hrs     |
| Finish Styling Webpage                      |    H     |      2hrs      |     2hrs      |    2hrs     |
| Review of Functionality and Design          |    H     |      1hrs      |     2hrs      |    2hrs     |
| PMVP Styling                                |    L     |      3hrs      |     5hrs      |    5hrs     |
| Final Review                                |    H     |      1hrs      |     2hrs      |    2hrs     |
| Total                                       |    H     |     33hrs      |    34.5hrs    |   34.5hrs   |

## Code Snippet

The API used included questions with imbedded HTML styling. Since JavaScript was used for the actual game, the styling showed up in a string instead of actually styling the words. Adding this code allowed the content of the elements to apply that HTML styling within JavaScript.

```
currentQuestion.textContent = decodeURIComponent(questionData[i].question)

answerDiv.textContent = decodeURIComponent(answer)

```

## Change Log

- Added API and started basic JavaScript

- Added some CSS styling

- Added question and answer elements once question box is clicked

- Added correct answer counter

- Styled question and answer elements

- Added a Finish Game button

- Added Win and Lose screens

- Finished styling webpage

- Added a How to Play

- Added links to each question to jump to the answers part of the page

- Fixed some CSS styling
