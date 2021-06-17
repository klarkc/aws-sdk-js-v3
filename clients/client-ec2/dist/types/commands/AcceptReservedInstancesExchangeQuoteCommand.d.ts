import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptReservedInstancesExchangeQuoteRequest, AcceptReservedInstancesExchangeQuoteResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AcceptReservedInstancesExchangeQuoteCommandInput extends AcceptReservedInstancesExchangeQuoteRequest {
}
export interface AcceptReservedInstancesExchangeQuoteCommandOutput extends AcceptReservedInstancesExchangeQuoteResult, __MetadataBearer {
}
/**
 * <p>Accepts the Convertible Reserved Instance exchange quote described in the <a>GetReservedInstancesExchangeQuote</a> call.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptReservedInstancesExchangeQuoteCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptReservedInstancesExchangeQuoteCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AcceptReservedInstancesExchangeQuoteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptReservedInstancesExchangeQuoteCommandInput} for command's `input` shape.
 * @see {@link AcceptReservedInstancesExchangeQuoteCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AcceptReservedInstancesExchangeQuoteCommand extends $Command<AcceptReservedInstancesExchangeQuoteCommandInput, AcceptReservedInstancesExchangeQuoteCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptReservedInstancesExchangeQuoteCommandInput;
    constructor(input: AcceptReservedInstancesExchangeQuoteCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptReservedInstancesExchangeQuoteCommandInput, AcceptReservedInstancesExchangeQuoteCommandOutput>;
    private serialize;
    private deserialize;
}
