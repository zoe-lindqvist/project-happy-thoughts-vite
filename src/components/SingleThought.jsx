/* eslint-disable react/prop-types */

/* Imports a helper function from the 'date-fns' library,
  to format a date to show how much time has passed since it occurred. */
import { formatDistanceToNow } from "date-fns";

export const SingleThought = ({ thought, onLike }) => {
  return (
    <div className="thought">
      {/* Displays the 'message' property of the 'thought' object, which contains the user's message. */}
      <p>{thought.message}</p>
      {/* Footer section for the thought, which includes the heart button, likes count, and the time */}
      <div className="thought-footer">
        {/* Separate the heart button and likes count */}
        <button className="heart-button" onClick={() => onLike(thought._id)}>
          {/* Emoji displayed as a heart in the button */}
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
        {/* Displays the number of likes the thought has.
          - 'thought.hearts' contains the count of likes the thought has received.
        */}
        <span className="likes-count">x {thought.hearts}</span>

        <p>
          {/* Displays how long ago the thought was posted.
          - 'thought.createdAt' is the timestamp when the thought was created.
          - 'formatDistanceToNow' from 'date-fns' formats the time,
            like "2 minutes ago".
           */}
          {formatDistanceToNow(new Date(thought.createdAt), {
            // adds the "ago" suffix to the time
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
};
