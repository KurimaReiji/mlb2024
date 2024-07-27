.PHONY: daily

daily: 
	node update_results.js > docs/mlb2024-results.json
