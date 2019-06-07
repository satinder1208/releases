current_dir=$(pwd)
script_dir=$(dirname $0)

if [ $script_dir = '.' ]
then
script_dir="$current_dir"
fi

cd $script_dir
git fetch --all
git reset --hard origin/master

cp -Rf ../builds ./builds

echo "Fetch complete"

pm2 start.sh