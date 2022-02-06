# Node weather API

API for registering keywords and current conditions with timestamp in MongoDB.

## Version

1.0.0

## Usage

Install packages with `npm install`

## Start

Start application with `npm start`

## Endpoints

# GET `/keywords` // Get all keywords registered from MongoDB collection: keywords.

# GET `/keywords/save/:keyword` // Send keyword to MongoDB.

# GET `/conditions` // Get all conditions registered with timestamps from MongoDB collection: conditions.

# GET `/conditions/save/:condition/:timestamp` // Send condition and timestamp to MongoDB.
