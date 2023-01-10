import throttle from 'lodash.throttle';

const FEEDBACK_FORM_STATE_KEY = 'feedback-form-state';

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('form input'),
  messageTextarea: document.querySelector('form textarea')
}

refs.emailInput.addEventListener('input', throttle(onEmailInputHandler, 500));
refs.messageTextarea.addEventListener('input', throttle(onMessageInputHandler, 500));
refs.feedbackForm.addEventListener('submit', onFormSubmitHandler);

const currentFeedbackFormState = getCurrentFeedbackFormState();
refs.emailInput.value = currentFeedbackFormState.email;
refs.messageTextarea.value = currentFeedbackFormState.message;

function onEmailInputHandler(event) {
  const currentFeedbackFormState = getCurrentFeedbackFormState();

  currentFeedbackFormState.email = event.target.value;

  saveFeedbackFormState(currentFeedbackFormState);
}

function onMessageInputHandler(event) {
  const currentFeedbackFormState = getCurrentFeedbackFormState();

  currentFeedbackFormState.message = event.target.value;

  saveFeedbackFormState(currentFeedbackFormState);
}

function onFormSubmitHandler(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value.trim() && message.value.trim()) {
    const myForm = {
      email: email.value,
      password: message.value,
    };

    console.log(myForm);

    event.currentTarget.reset();
    localStorage.removeItem(FEEDBACK_FORM_STATE_KEY);
  }
}

function getCurrentFeedbackFormState() {
  const currentFeedbackFormStateJSON = localStorage.getItem(
    FEEDBACK_FORM_STATE_KEY
  );

  if (currentFeedbackFormStateJSON) {
    return JSON.parse(currentFeedbackFormStateJSON);
  } else {
    return {
      email: '',
      message: '',
    };
  }
}

function saveFeedbackFormState(currentFeedbackFormState) {
  const formDataJSON = JSON.stringify(currentFeedbackFormState);
  localStorage.setItem(FEEDBACK_FORM_STATE_KEY, formDataJSON);
}
