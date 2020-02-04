
'use strict';

const DEFAULT_COMMAND = `--help`;

const USER_ARGV_INDEX = 2;

const EXIT_CODE = {
    ERROR: 1,
    SUCCESS: 0,
};

const HTTP_CODE = {
    OK: 200,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
};

module.exports = {
    DEFAULT_COMMAND,
    USER_ARGV_INDEX,
    EXIT_CODE,
    HTTP_CODE
}
