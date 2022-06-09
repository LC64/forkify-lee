// We will basically put all the variables that should be constants and should be reused across the project in this file, with the goal of being able to easily configure our project by simply changing some of the data that is in this configuration file.

export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes/'; // using uppercase for the name here is a convention to indicate that this is a constant that will never change and/or that it is a config file variable.

// A timeout variable is a good thing to put in the config file, as you might want to adjust it in the future.
export const TIMEOUT_SEC = 10;

export const RES_PER_PAGE = 10;

export const KEY = '14d3700b-35c1-416e-8e29-ad6259b7c587';
export const MODAL_CLOSE_SEC = 2.5;

export const HOME = 'http://localhost:1234';
