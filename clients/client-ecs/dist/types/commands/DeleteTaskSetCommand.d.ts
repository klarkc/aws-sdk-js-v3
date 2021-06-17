import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DeleteTaskSetRequest, DeleteTaskSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTaskSetCommandInput extends DeleteTaskSetRequest {
}
export interface DeleteTaskSetCommandOutput extends DeleteTaskSetResponse, __MetadataBearer {
}
/**
 * <p>Deletes a specified task set within a service. This is used when a service uses the
 * 				<code>EXTERNAL</code> deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, DeleteTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, DeleteTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new DeleteTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTaskSetCommandInput} for command's `input` shape.
 * @see {@link DeleteTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTaskSetCommand extends $Command<DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput, ECSClientResolvedConfig> {
    readonly input: DeleteTaskSetCommandInput;
    constructor(input: DeleteTaskSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput>;
    private serialize;
    private deserialize;
}
