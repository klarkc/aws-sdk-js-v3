import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateTaskSetRequest, UpdateTaskSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateTaskSetCommandInput extends UpdateTaskSetRequest {
}
export interface UpdateTaskSetCommandOutput extends UpdateTaskSetResponse, __MetadataBearer {
}
/**
 * <p>Modifies a task set. This is used when a service uses the <code>EXTERNAL</code>
 * 			deployment controller type. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateTaskSetCommandInput} for command's `input` shape.
 * @see {@link UpdateTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateTaskSetCommand extends $Command<UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateTaskSetCommandInput;
    constructor(input: UpdateTaskSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput>;
    private serialize;
    private deserialize;
}
