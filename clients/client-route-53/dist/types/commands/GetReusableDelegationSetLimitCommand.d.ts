import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetReusableDelegationSetLimitRequest, GetReusableDelegationSetLimitResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetReusableDelegationSetLimitCommandInput extends GetReusableDelegationSetLimitRequest {
}
export interface GetReusableDelegationSetLimitCommandOutput extends GetReusableDelegationSetLimitResponse, __MetadataBearer {
}
/**
 * <p>Gets the maximum number of hosted zones that you can associate with the specified reusable delegation set.</p>
 * 		       <p>For the default limit, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/DNSLimitations.html">Limits</a>
 * 			in the <i>Amazon Route 53 Developer Guide</i>. To request a higher limit,
 * 			<a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-route53">open a case</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetReusableDelegationSetLimitCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetReusableDelegationSetLimitCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetReusableDelegationSetLimitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReusableDelegationSetLimitCommandInput} for command's `input` shape.
 * @see {@link GetReusableDelegationSetLimitCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetReusableDelegationSetLimitCommand extends $Command<GetReusableDelegationSetLimitCommandInput, GetReusableDelegationSetLimitCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetReusableDelegationSetLimitCommandInput;
    constructor(input: GetReusableDelegationSetLimitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReusableDelegationSetLimitCommandInput, GetReusableDelegationSetLimitCommandOutput>;
    private serialize;
    private deserialize;
}
