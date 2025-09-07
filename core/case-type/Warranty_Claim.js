const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class WarrantyClaimCase extends BlazeCase {
  constructor() {
    super(
      "Warranty_Claim",
      "Warranty Claim",
      [
        {
          id: "Submission",
          label: "Submission",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "warranty-claim-submission-start",
              dataModelReference: { models: [] }
            },
            {
              id: "submit_claim",
              label: "Submit Claim",
              type: "manual",
              status: "pending",
              view: "warranty-claim-submission-submit-claim",
              dataModelReference: { models: ["claim_id", "customer_id", "serial_number", "purchase_date", "issue_summary", "diagnostic_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "warranty-claim-submission-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Validation",
          label: "Validation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "warranty-claim-validation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "validate_eligibility",
              label: "Validate Eligibility",
              type: "manual",
              status: "pending",
              view: "warranty-claim-validation-validate-eligibility",
              dataModelReference: { models: ["serial_number", "purchase_date", "warranty_status", "coverage_type", "error_codes"] }
            },
            {
              id: "gather_supporting_data",
              label: "Gather Supporting Data",
              type: "manual",
              status: "pending",
              view: "warranty-claim-validation-gather-supporting-data",
              dataModelReference: { models: ["logs_link", "reported_symptoms", "diagnostic_timestamp", "diagnostic_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "warranty-claim-validation-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Decision",
          label: "Decision",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "warranty-claim-decision-start",
              dataModelReference: { models: [] }
            },
            {
              id: "claim_review",
              label: "Claims Review",
              type: "manual",
              status: "pending",
              view: "warranty-claim-decision-claims-review",
              dataModelReference: { models: ["claim_id", "claim_decision", "claim_decision_date", "claim_decision"] }
            },
            {
              id: "notify_customer",
              label: "Notify Customer of Decision",
              type: "manual",
              status: "pending",
              view: "warranty-claim-decision-notify-customer-of-decision",
              dataModelReference: { models: ["customer_id", "email", "claim_decision", "claim_decision_date"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "warranty-claim-decision-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Fulfillment",
          label: "Fulfillment",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "warranty-claim-fulfillment-start",
              dataModelReference: { models: [] }
            },
            {
              id: "authorise_repair",
              label: "Authorize Repair / Parts",
              type: "manual",
              status: "pending",
              view: "warranty-claim-fulfillment-authorize-repair-/-parts",
              dataModelReference: { models: ["claim_id", "repair_id", "order_id", "order_status"] }
            },
            {
              id: "arrange_service",
              label: "Arrange Service Delivery",
              type: "manual",
              status: "pending",
              view: "warranty-claim-fulfillment-arrange-service-delivery",
              dataModelReference: { models: ["assignment_id", "technician_name", "scheduled_start"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "warranty-claim-fulfillment-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Closure",
          label: "Closure",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "warranty-claim-closure-start",
              dataModelReference: { models: [] }
            },
            {
              id: "record_resolution",
              label: "Record Resolution & Close Claim",
              type: "manual",
              status: "pending",
              view: "warranty-claim-closure-record-resolution-&-close-claim",
              dataModelReference: { models: ["claim_id", "repair_status", "claim_decision"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "warranty-claim-closure-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new WarrantyClaimCase();