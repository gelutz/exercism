FOLDERS=$(ls -D)

for folder in "${FOLDERS[@]}"; do
    INNER=$(ls -D $folder)
    for inner in "${INNER[@]}"; do
        ln -s ./.vscode "$folder/$inner/.vscode"
    done
done
