#!/bin/bash


API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
  "passwords": {
    "old":"'"${OLD}"'",
    "new":"'"${NEW}"'"
  }
}'

echo
