DEEP_LINK=$(firebase hosting:channel:list --json | jq --raw-output '.result.channels[] | select(.name | contains("permissible")) | .url') \
if [$DEEP_LINK]; then \
    echo "The channel exists" \
else \
    echo "The channel doesn't exist" \
fi