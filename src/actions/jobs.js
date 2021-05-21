export const fetchJobs = () => async (dispatch, getState) => {
  dispatch({ type: "GET_JOBS_LOADING" });
  try {
    const res = await fetch(
      "https://api.allorigins.win/raw?url=https://jobs.github.com/positions.json"
    );
    if (res.ok) {
      const data = await res.json();
      dispatch({ type: "GET_JOBS_SUCCESS", payload: data });
    } else {
      dispatch({ type: "GET_JOBS_FAILURE" });
    }
  } catch (error) {
    dispatch({ type: "GET_JOBS_FAILURE" });
    console.log(error);
  }
};

export const searchJob = (position, area) => async (dispatch, getState) => {
  dispatch({ type: "GET_JOBS_LOADING" });
  try {
    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/jobs?description=${position}&location=${area}`
    );
    if (res.ok) {
      const data = await res.json();
      dispatch({ type: "GET_JOBS_SUCCESS", payload: data });
    } else {
      dispatch({ type: "GET_JOBS_FAILURE" });
    }
  } catch (error) {
    dispatch({ type: "GET_JOBS_FAILURE" });
    console.log(error);
  }
};
