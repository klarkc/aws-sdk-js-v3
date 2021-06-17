import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { UpdateTrafficPolicyInstanceRequest, UpdateTrafficPolicyInstanceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTrafficPolicyInstanceCommandInput extends UpdateTrafficPolicyInstanceRequest {
}
export interface UpdateTrafficPolicyInstanceCommandOutput extends UpdateTrafficPolicyInstanceResponse, __MetadataBearer {
}
/**
 * <p>Updates the resource record sets in a specified hosted zone that were created based on the settings in a specified traffic policy version.</p>
 * 		       <p>When you update a traffic policy instance, Amazon Route 53 continues to respond to DNS queries for the root resource record set name
 * 			(such as example.com) while it replaces one group of resource record sets with another. Route 53 performs the following operations:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Route 53 creates a new group of resource record sets based on the specified traffic policy. This is true regardless of how significant
 * 					the differences are between the existing resource record sets and the new resource record sets. </p>
 * 			         </li>
 *             <li>
 * 				           <p>When all of the new resource record sets have been created, Route 53 starts to respond to DNS queries for the root resource record set name
 * 					(such as example.com) by using the new resource record sets.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Route 53 deletes the old group of resource record sets that are associated with the root resource record set name.</p>
 * 			         </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, UpdateTrafficPolicyInstanceCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, UpdateTrafficPolicyInstanceCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const command = new UpdateTrafficPolicyInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTrafficPolicyInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateTrafficPolicyInstanceCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTrafficPolicyInstanceCommand extends $Command<UpdateTrafficPolicyInstanceCommandInput, UpdateTrafficPolicyInstanceCommandOutput, Route53ClientResolvedConfig> {
    readonly input: UpdateTrafficPolicyInstanceCommandInput;
    constructor(input: UpdateTrafficPolicyInstanceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrafficPolicyInstanceCommandInput, UpdateTrafficPolicyInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
