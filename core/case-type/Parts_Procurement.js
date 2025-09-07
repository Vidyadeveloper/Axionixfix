const BlazeCase = require("@blaze-case-ai/blaze-engine/core/case-type/blaze-case");

class PartsProcurementCase extends BlazeCase {
  constructor() {
    super(
      "Parts_Procurement",
      "Parts Procurement",
      [
        {
          id: "Request",
          label: "Request",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "parts-procurement-request-start",
              dataModelReference: { models: [] }
            },
            {
              id: "raise_parts_request",
              label: "Raise Parts Request",
              type: "manual",
              status: "pending",
              view: "parts-procurement-request-raise-parts-request",
              dataModelReference: { models: ["order_id", "parts_list", "device_id", "model_number", "repair_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "parts-procurement-request-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Vendor_Quote",
          label: "Vendor Quote",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "parts-procurement-vendor-quote-start",
              dataModelReference: { models: [] }
            },
            {
              id: "collect_quotes",
              label: "Collect Vendor Quotes",
              type: "manual",
              status: "pending",
              view: "parts-procurement-vendor-quote-collect-vendor-quotes",
              dataModelReference: { models: ["parts_list", "supplier", "total_cost"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "parts-procurement-vendor-quote-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Order_Placement",
          label: "Order Placement",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "parts-procurement-order-placement-start",
              dataModelReference: { models: [] }
            },
            {
              id: "place_order",
              label: "Place Order with Supplier",
              type: "manual",
              status: "pending",
              view: "parts-procurement-order-placement-place-order-with-supplier",
              dataModelReference: { models: ["order_id", "supplier", "total_cost", "expected_lead_time", "order_status"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "parts-procurement-order-placement-end",
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
              view: "parts-procurement-fulfillment-start",
              dataModelReference: { models: [] }
            },
            {
              id: "track_shipment",
              label: "Track Shipment & Receive",
              type: "manual",
              status: "pending",
              view: "parts-procurement-fulfillment-track-shipment-&-receive",
              dataModelReference: { models: ["order_id", "order_status", "expected_lead_time"] }
            },
            {
              id: "update_inventory",
              label: "Update Inventory & Link to Repair",
              type: "manual",
              status: "pending",
              view: "parts-procurement-fulfillment-update-inventory-&-link-to-repair",
              dataModelReference: { models: ["order_id", "parts_list", "repair_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "parts-procurement-fulfillment-end",
              dataModelReference: { models: [] }
            }
          ]
        },
        {
          id: "Reconciliation",
          label: "Reconciliation",
          steps: [
            {
              id: "start",
              label: "Start",
              type: "start",
              status: "pending",
              view: "parts-procurement-reconciliation-start",
              dataModelReference: { models: [] }
            },
            {
              id: "reconcile_costs",
              label: "Reconcile Costs & Close Order",
              type: "manual",
              status: "pending",
              view: "parts-procurement-reconciliation-reconcile-costs-&-close-order",
              dataModelReference: { models: ["order_id", "total_cost", "repair_id"] }
            },
            {
              id: "end",
              label: "End",
              type: "end",
              status: "pending",
              view: "parts-procurement-reconciliation-end",
              dataModelReference: { models: [] }
            }
          ]
        }
      ]
    );
  }
}

module.exports = new PartsProcurementCase();