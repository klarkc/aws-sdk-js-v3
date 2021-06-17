import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { DeleteReusableDelegationSetRequest, DeleteReusableDelegationSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteReusableDelegationSetCommandInput extends DeleteReusableDelegationSetRequest {
}
export interface DeleteReusableDelegationSetCommandOutput extends DeleteReusableDelegationSetResponse, __MetadataBearer {
}
/**
 * <p>Deletes a reusable delegation set.</p>
 * 		       <important>
 * 			         <p>You can delete a reusable delegation set only if it isn't associated with any hosted zones.</p>
 * 		       </important>
 * 		       <p>To verify that the reusable delegation set is not associated with any hosted zones, submit a
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/APIReference/API_GetReusableDelegationSet.html">GetReusableDelegationSet</a>
 * 			request and specify the ID of the reusable delegation set that you want to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, DeleteReusableDelegationSetCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, DeleteReusableDelegationSetCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new DeleteReusableDelegationSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteReusableDelegationSetCommandInput} for command's `input` shape.
 * @see {@link DeleteReusableDelegationSetCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteReusableDelegationSetCommand extends $Command<DeleteReusableDelegationSetCommandInput, DeleteReusableDelegationSetCommandOutput, Route53ClientResolvedConfig> {
    readonly input: DeleteReusableDelegationSetCommandInput;
    constructor(input: DeleteReusableDelegationSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteReusableDelegationSetCommandInput, DeleteReusableDelegationSetCommandOutput>;
    private serialize;
    private deserialize;
}
