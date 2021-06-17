import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeregisterTaskDefinitionRequest, DeregisterTaskDefinitionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeregisterTaskDefinitionCommandInput extends DeregisterTaskDefinitionRequest {
}
export interface DeregisterTaskDefinitionCommandOutput extends DeregisterTaskDefinitionResponse, __MetadataBearer {
}
/**
 * <p>Deregisters the specified task definition by family and revision. Upon deregistration,
 * 			the task definition is marked as <code>INACTIVE</code>. Existing tasks and services that
 * 			reference an <code>INACTIVE</code> task definition continue to run without disruption.
 * 			Existing services that reference an <code>INACTIVE</code> task definition can still
 * 			scale up or down by modifying the service's desired count.</p>
 * 		       <p>You cannot use an <code>INACTIVE</code> task definition to run new tasks or create new
 * 			services, and you cannot update an existing service to reference an
 * 				<code>INACTIVE</code> task definition. However, there may be up to a 10-minute
 * 			window following deregistration where these restrictions have not yet taken
 * 			effect.</p>
 * 		       <note>
 * 			         <p>At this time, <code>INACTIVE</code> task definitions remain discoverable in your
 * 				account indefinitely. However, this behavior is subject to change in the future, so
 * 				you should not rely on <code>INACTIVE</code> task definitions persisting beyond the
 * 				lifecycle of any associated tasks and services.</p>
 * 		       </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeregisterTaskDefinitionCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeregisterTaskDefinitionCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeregisterTaskDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterTaskDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeregisterTaskDefinitionCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeregisterTaskDefinitionCommand extends $Command<DeregisterTaskDefinitionCommandInput, DeregisterTaskDefinitionCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeregisterTaskDefinitionCommandInput;
    constructor(input: DeregisterTaskDefinitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTaskDefinitionCommandInput, DeregisterTaskDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
