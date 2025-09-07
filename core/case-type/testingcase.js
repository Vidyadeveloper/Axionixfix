// Case Type: testingcase
module.exports = {
  "caseType": {
    "id": "testingcase",
    "label": "testingcase"
  },
  "stages": [
    {
      "id": "stage1",
      "label": "Stage 1",
      "steps": [
        {
          "id": "step1",
          "label": "Step 1",
          "status": "pending",
          "view": "summary",
          "type": "manual"
        }
      ]
    },
    {
      "id": "trestine",
      "label": "trestine",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "view": "testingcase-trestine-start"
        },
        {
          "id": "ste",
          "label": "ste",
          "type": "manual",
          "status": "pending",
          "view": "testingcase-trestine-ste"
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "view": "testingcase-trestine-end"
        }
      ]
    }
  ]
};