import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeReservedNodeOfferingsMessage, ReservedNodeOfferingsMessage } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeReservedNodeOfferingsCommandInput extends DescribeReservedNodeOfferingsMessage {
}
export interface DescribeReservedNodeOfferingsCommandOutput extends ReservedNodeOfferingsMessage, __MetadataBearer {
}
/**
 * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their
 *             descriptions including the node type, the fixed and recurring costs of reserving the
 *             node and duration the node will be reserved for you. These descriptions help you
 *             determine which reserve node offering you want to purchase. You then use the unique
 *             offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one
 *             or more nodes for your Amazon Redshift cluster. </p>
 *         <p>
 * For more information about reserved node offerings, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeReservedNodeOfferingsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeReservedNodeOfferingsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeReservedNodeOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedNodeOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedNodeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeReservedNodeOfferingsCommand extends $Command<DescribeReservedNodeOfferingsCommandInput, DescribeReservedNodeOfferingsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeReservedNodeOfferingsCommandInput;
    constructor(input: DescribeReservedNodeOfferingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedNodeOfferingsCommandInput, DescribeReservedNodeOfferingsCommandOutput>;
    private serialize;
    private deserialize;
}
