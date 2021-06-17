import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelReservedInstancesListingRequest, CancelReservedInstancesListingResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelReservedInstancesListingCommandInput extends CancelReservedInstancesListingRequest {
}
export interface CancelReservedInstancesListingCommandOutput extends CancelReservedInstancesListingResult, __MetadataBearer {
}
/**
 * <p>Cancels the specified Reserved Instance listing in the Reserved Instance Marketplace.</p>
 *          <p>For more information, see
 *         <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelReservedInstancesListingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelReservedInstancesListingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelReservedInstancesListingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelReservedInstancesListingCommandInput} for command's `input` shape.
 * @see {@link CancelReservedInstancesListingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelReservedInstancesListingCommand extends $Command<CancelReservedInstancesListingCommandInput, CancelReservedInstancesListingCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelReservedInstancesListingCommandInput;
    constructor(input: CancelReservedInstancesListingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelReservedInstancesListingCommandInput, CancelReservedInstancesListingCommandOutput>;
    private serialize;
    private deserialize;
}
