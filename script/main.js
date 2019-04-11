const storyChoices = {
  1: 'You wake up in the morning, you crawl out of bed all groggy, no memory of the night before. Will you make yourself a cup of coffee or a cup of tea?',
  2: "You take a few quick gulps out of your cup and rush to the bathroom. Wow, you're looking pretty beat up ... Will you brush your teeth or comb your hair? Careful now, there can only be one.",
  3: 'After your difficult morning routine, you head out for your day at work. Will you take your car or the public transit? Be very weary of your decision.',
  4: 'You finally arrive at work after a long journey. You walk up to the entrance and are debating how to get upstairs. Will you take the elevator or the stairs?',
  5: "You reach your office floor. There's a lot of noise in your office, but the lounge seems to be empty. However, lounge dwellers are often looked down upon. What will you choose?",
  6: 'As you begin walking, your boss steps up to you and begins pitching a new idea he would like you to work on. Do you listen to his rambling, or do you ignore him?',
  7: "Once your one sided-discussion ends, you finally set yourself up to work. You're not really in the mood to be productive. Do you simply put off your work, or do you actually get something done for once?",
  8: "As you're busy doing whatever it is you're doing, you overhear coworkers gossiping about you. Do you confront them or do you keep your silence?",
  9: "You pack up to leave work all shook up from today's events. Do you stop along the way for food or will you simply make something at home?",
  10: 'You finally get home and try to relax. Do you sit in front of the television or do you jump online for a gaming session?',
  11: 'After a few hours, your eyes become heavy. You head to bed and try to fall alseep. However, thoughts about your day keep playing in your head.',
  12: 'Wake up.',
  13: 'Wake up. Wake up. Wake up. Wake up!',
};

const storyOptions = {
  1: { choice1: 'Coffee', choice2: 'Tea' },
  2: { choice1: 'Brush teeth', choice2: 'Comb hair' },
  3: { choice1: 'Car', choice2: 'Public transit' },
  4: { choice1: 'Elevator', choice2: 'Stairs' },
  5: { choice1: 'Lounge', choice2: 'Office' },
  6: { choice1: 'Listen', choice2: 'Ignore' },
  7: { choice1: 'Work', choice2: 'Procrastinate' },
  8: { choice1: 'Confront', choice2: 'Stay Silent' },
  9: { choice1: 'Take out', choice2: 'Home made' },
  10: { choice1: 'Television', choice2: 'Gaming' },
  11: { choice1: 'Sleep', choice2: 'Sleep' },
  12: { choice1: 'Wake up', choice2: 'Wake up' },
  13: { choice1: 'Wake up', choice2: 'Slumber' },
};

const sassyReplies = {
  1: 'Rise and shine.',
  2: 'Oh ... sure, I guess that is good enough to wake up.',
  3: "Well, you tried your best. Let's just hope no one important sees you like this.",
  4: "I guess it doesn't really matter. You're going to be late anyway.",
  5: "Hmm ... That's an odd choice for someone so picky as yourself.",
  6: "Of course you'd pick that. You wouldn't have it any other way...",
  7: 'Wow, such a bold choice for someone in your ... position.',
  8: 'Do you count this as work? Are you achieving anything?',
  9: "How do you feel now? Do you think you're better than them?",
  10: 'Does it really matter what you eat? Food is food, right?',
  11: 'Do it, sit in front of a screen again ... Ironic.',
  12: "Your choices are limited, aren't they? So meaningless",
  13: 'Wake up. Wake up. Wake up.',
};

const days = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  7: 'Sunday',
};

const backgroundColor = {
  1: '#FFFFFF',
  2: '#F0F0F0',
  3: '#D8D8D8',
  4: '#C0C0C0',
  5: '#A9A9A9',
  6: '#909090',
  7: '#707070',
  8: '#585858',
  9: '#383838',
  10: '#202020',
  11: '#101010',
  12: '#000000',
  13: '#000000',
};

const textColor = {
  1: '#000000',
  2: '#000000',
  3: '#000000',
  4: '#000000',
  5: '#000000',
  6: '#000000',
  7: '#000000',
  8: '#000000',
  9: '#ffffff',
  10: '#ffffff',
  11: '#ffffff',
  12: '#ffffff',
  13: '#ffffff',
};

var points = 0;
var progression = 1;
var dayCounter = 1;

var dayElement;
var pointsElement;
var sassElement;
var storyElement;
var Button1;
var Button2;

function init() {
  dayElement = document.getElementById('dayContainer');
  pointsElement = document.getElementById('pointsContainer');
  sassElement = document.getElementById('sassContainer');
  storyElement = document.getElementById('storyElement');
  Button1 = document.getElementById('button1');
  Button2 = document.getElementById('button2');

  dayElement.innerHTML = days[dayCounter];
  dayElement.style.color = textColor[progression];
  document.body.style.backgroundColor = backgroundColor[progression];
  pointsElement.innerHTML = 'points: ' + points;
  pointsElement.style.color = textColor[progression];
  sassElement.innerHTML = sassyReplies[progression];
  sassElement.style.color = textColor[progression];
  storyElement.innerHTML = storyChoices[progression];
  storyElement.style.color = textColor[progression];
  Button1.innerHTML = storyOptions[progression].choice1;
  Button1.style.color = textColor[progression];
  Button2.innerHTML = storyOptions[progression].choice2;
  Button2.style.color = textColor[progression];
}

function updateContent() {
  progression++;
  if (progression === 14) {
    window.addEventListener('click', finalChoiceHandler(event));
  } else {
    dayElement.style.color = textColor[progression];
    document.body.style.backgroundColor = backgroundColor[progression];
    pointsElement.innerHTML = 'points: ' + generatePoints();
    pointsElement.style.color = textColor[progression];
    sassElement.innerHTML = sassyReplies[progression];
    sassElement.style.color = textColor[progression];
    storyElement.innerHTML = storyChoices[progression];
    storyElement.style.color = textColor[progression];
    Button1.innerHTML = storyOptions[progression].choice1;
    Button1.style.color = textColor[progression];
    Button2.innerHTML = storyOptions[progression].choice2;
    Button2.style.color = textColor[progression];
  }
}

function generatePoints() {
  return (points = Math.floor(Math.random() * 16) - 8);
}

function incrementDay() {
  if (dayCounter === 7) {
    dayCounter = 1;
  } else {
    dayCounter++;
  }
}

function wakeUp() {
  progression = 1;
  incrementDay();
  init();
}

function slumber() {
  dayElement.style.display = 'none';
  Button1.style.display = 'none';
  Button2.style.display = 'none';
  pointsElement.style.display = 'none';
  storyElement.style.display = 'none';
  sassElement.innerHTML = 'This ended too soon ... Were you not having fun?';
}

function finalChoiceHandler(e) {
  if (e.target.id === 'button1') {
    wakeUp();
  } else {
    slumber();
  }
}
