import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { GetReusableDelegationSetRequest, GetReusableDelegationSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetReusableDelegationSetCommandInput extends GetReusableDelegationSetRequest {
}
export interface GetReusableDelegationSetCommandOutput extends GetReusableDelegationSetResponse, __MetadataBearer {
}
/**
 * <p>Retrieves information about a specified reusable delegation set, including the four name servers that are assigned
 * 			to the delegation set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, GetReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, GetReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new GetReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link GetReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetReusableDelegationSetCommand extends $Command<GetReusableDelegationSetCommandInput, GetReusableDelegationSetCommandOutput, Route53ClientResolvedConfig> {
    readonly input: GetReusableDelegationSetCommandInput;
    constructor(input: GetReusableDelegationSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetReusableDelegationSetCommandInput, GetReusableDelegationSetCommandOutput>;
    private serialize;
    private deserialize;
}
