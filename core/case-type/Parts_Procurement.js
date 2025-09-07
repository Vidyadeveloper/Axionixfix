// Case Type: Parts_Procurement
module.exports = {
  "caseType": {
    "id": "Parts_Procurement",
    "label": "Parts Procurement"
  },
  "stages": [
    {
      "id": "Request",
      "label": "Request",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "parts-procurement-request-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "raise_parts_request",
          "label": "Raise Parts Request",
          "type": "manual",
          "status": "pending",
          "view": "parts-procurement-request-raise-parts-request",
          "dataModelReference": {
            "attributes": [
              "order_id",
              "parts_list",
              "device_id",
              "model_number",
              "repair_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "parts-procurement-request-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Vendor_Quote",
      "label": "Vendor Quote",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "parts-procurement-vendor-quote-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "collect_quotes",
          "label": "Collect Vendor Quotes",
          "type": "manual",
          "status": "pending",
          "view": "parts-procurement-vendor-quote-collect-vendor-quotes",
          "dataModelReference": {
            "attributes": [
              "parts_list",
              "supplier",
              "total_cost"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "parts-procurement-vendor-quote-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Order_Placement",
      "label": "Order Placement",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "parts-procurement-order-placement-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "place_order",
          "label": "Place Order with Supplier",
          "type": "manual",
          "status": "pending",
          "view": "parts-procurement-order-placement-place-order-with-supplier",
          "dataModelReference": {
            "attributes": [
              "order_id",
              "supplier",
              "total_cost",
              "expected_lead_time",
              "order_status"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "parts-procurement-order-placement-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Fulfillment",
      "label": "Fulfillment",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "parts-procurement-fulfillment-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "track_shipment",
          "label": "Track Shipment & Receive",
          "type": "manual",
          "status": "pending",
          "view": "parts-procurement-fulfillment-track-shipment-&-receive",
          "dataModelReference": {
            "attributes": [
              "order_id",
              "order_status",
              "expected_lead_time"
            ]
          }
        },
        {
          "id": "update_inventory",
          "label": "Update Inventory & Link to Repair",
          "type": "manual",
          "status": "pending",
          "view": "parts-procurement-fulfillment-update-inventory-&-link-to-repair",
          "dataModelReference": {
            "attributes": [
              "order_id",
              "parts_list",
              "repair_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "parts-procurement-fulfillment-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    },
    {
      "id": "Reconciliation",
      "label": "Reconciliation",
      "steps": [
        {
          "id": "start",
          "label": "Start",
          "type": "start",
          "status": "pending",
          "view": "parts-procurement-reconciliation-start",
          "dataModelReference": {
            "attributes": []
          }
        },
        {
          "id": "reconcile_costs",
          "label": "Reconcile Costs & Close Order",
          "type": "manual",
          "status": "pending",
          "view": "parts-procurement-reconciliation-reconcile-costs-&-close-order",
          "dataModelReference": {
            "attributes": [
              "order_id",
              "total_cost",
              "repair_id"
            ]
          }
        },
        {
          "id": "end",
          "label": "End",
          "type": "end",
          "status": "pending",
          "view": "parts-procurement-reconciliation-end",
          "dataModelReference": {
            "attributes": []
          }
        }
      ]
    }
  ]
};