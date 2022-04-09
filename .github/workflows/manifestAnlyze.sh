
rm -rf ./lhci/github_output.json



#出力
echo { >>  ./lhci/github_output.json
echo `cat $1 | grep performance` >> ./lhci/github_output.json
echo \"result\": true >> ./lhci/github_output.json
echo } >>  ./lhci/github_output.json