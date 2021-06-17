import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { PurchaseReservedDBInstancesOfferingMessage, PurchaseReservedDBInstancesOfferingResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseReservedDBInstancesOfferingCommandInput extends PurchaseReservedDBInstancesOfferingMessage {
}
export interface PurchaseReservedDBInstancesOfferingCommandOutput extends PurchaseReservedDBInstancesOfferingResult, __MetadataBearer {
}
/**
 * <p>Purchases a reserved DB instance offering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, PurchaseReservedDBInstancesOfferingCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, PurchaseReservedDBInstancesOfferingCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new PurchaseReservedDBInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedDBInstancesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedDBInstancesOfferingCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseReservedDBInstancesOfferingCommand extends $Command<PurchaseReservedDBInstancesOfferingCommandInput, PurchaseReservedDBInstancesOfferingCommandOutput, RDSClientResolvedConfig> {
    readonly input: PurchaseReservedDBInstancesOfferingCommandInput;
    constructor(input: PurchaseReservedDBInstancesOfferingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseReservedDBInstancesOfferingCommandInput, PurchaseReservedDBInstancesOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
