import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetCheckerIpRangesRequest, GetCheckerIpRangesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetCheckerIpRangesCommandInput extends GetCheckerIpRangesRequest {
}
export interface GetCheckerIpRangesCommandOutput extends GetCheckerIpRangesResponse, __MetadataBearer {
}
/**
 * <p>Route 53 does not perform authorization for this API because it retrieves information that is already available to the public.</p>
 * 	        <important>
 * 			         <p>
 *                <code>GetCheckerIpRanges</code> still works, but we recommend that you download
 * 			ip-ranges.json, which includes IP address ranges for all AWS services. For more information, see
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/route-53-ip-addresses.html">IP Address Ranges of Amazon Route 53 Servers</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>.</p>
 * 		       </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetCheckerIpRangesCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetCheckerIpRangesCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetCheckerIpRangesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCheckerIpRangesCommandInput} for command's `input` shape.
 * @see {@link GetCheckerIpRangesCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetCheckerIpRangesCommand extends $Command<GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetCheckerIpRangesCommandInput;
    constructor(input: GetCheckerIpRangesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput>;
    private serialize;
    private deserialize;
}
