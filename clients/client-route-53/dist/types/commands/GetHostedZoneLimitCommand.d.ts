import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetHostedZoneLimitRequest, GetHostedZoneLimitResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetHostedZoneLimitCommandInput extends GetHostedZoneLimitRequest {
}
export interface GetHostedZoneLimitCommandOutput extends GetHostedZoneLimitResponse, __MetadataBearer {
}
/**
 * <p>Gets the specified limit for a specified hosted zone, for example, the maximum number of records that you
 * 			can create in the hosted zone. </p>
 * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetHostedZoneLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetHostedZoneLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetHostedZoneLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetHostedZoneLimitCommandInput} for command's `input` shape.
 * @see {@link GetHostedZoneLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetHostedZoneLimitCommand extends $Command<GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetHostedZoneLimitCommandInput;
    constructor(input: GetHostedZoneLimitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput>;
    private serialize;
    private deserialize;
}
