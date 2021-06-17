import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { CreateTaskSetRequest, CreateTaskSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateTaskSetCommandInput extends CreateTaskSetRequest {
}
export interface CreateTaskSetCommandOutput extends CreateTaskSetResponse, __MetadataBearer {
}
/**
 * <p>Create a task set in the specified cluster and service. This is used when a service
 * 			uses the <code>EXTERNAL</code> deployment controller type. For more information, see
 * 				<a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, CreateTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, CreateTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new CreateTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTaskSetCommandInput} for command's `input` shape.
 * @see {@link CreateTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateTaskSetCommand extends $Command<CreateTaskSetCommandInput, CreateTaskSetCommandOutput, ECSClientResolvedConfig> {
    readonly input: CreateTaskSetCommandInput;
    constructor(input: CreateTaskSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTaskSetCommandInput, CreateTaskSetCommandOutput>;
    private serialize;
    private deserialize;
}
