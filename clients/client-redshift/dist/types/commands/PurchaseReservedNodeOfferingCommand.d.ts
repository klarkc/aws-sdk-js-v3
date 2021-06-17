import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { PurchaseReservedNodeOfferingMessage, PurchaseReservedNodeOfferingResult } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PurchaseReservedNodeOfferingCommandInput extends PurchaseReservedNodeOfferingMessage {
}
export interface PurchaseReservedNodeOfferingCommandOutput extends PurchaseReservedNodeOfferingResult, __MetadataBearer {
}
/**
 * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of
 *             reserved node offerings. You can purchase one or more of the offerings. You can call the
 *                 <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved
 *             node offerings. You can call this API by providing a specific reserved node offering and
 *             the number of nodes you want to reserve. </p>
 *         <p>
 * For more information about reserved node offerings, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, PurchaseReservedNodeOfferingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, PurchaseReservedNodeOfferingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new PurchaseReservedNodeOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedNodeOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedNodeOfferingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PurchaseReservedNodeOfferingCommand extends $Command<PurchaseReservedNodeOfferingCommandInput, PurchaseReservedNodeOfferingCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: PurchaseReservedNodeOfferingCommandInput;
    constructor(input: PurchaseReservedNodeOfferingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PurchaseReservedNodeOfferingCommandInput, PurchaseReservedNodeOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
