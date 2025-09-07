const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class TestingcaseCase extends BlazeCase {
  constructor() {
    super(
      "testingcase",
      "testingcase",
      [
        {
          id: "stage1",
          label: "Stage 1",
          steps: [
            {
              id: "step1",
              label: "Step 1",
              type: "manual",
              status: "pending",
              view: "summary",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "trestine",
          label: "trestine",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "testingcase-trestine-start",
              dataModelReference: { models: [] }
            },
            {
              id: "ste",
              label: "ste",
              type: "manual",
              status: "pending",
              view: "testingcase-trestine-ste",
              dataModelReference: { models: [] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "testingcase-trestine-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new TestingcaseCase();