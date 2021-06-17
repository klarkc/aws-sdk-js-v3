import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateServicePrimaryTaskSetRequest, UpdateServicePrimaryTaskSetResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateServicePrimaryTaskSetCommandInput extends UpdateServicePrimaryTaskSetRequest {
}
export interface UpdateServicePrimaryTaskSetCommandOutput extends UpdateServicePrimaryTaskSetResponse, __MetadataBearer {
}
/**
 * <p>Modifies which task set in a service is the primary task set. Any parameters that are
 * 			updated on the primary task set in a service will transition to the service. This is
 * 			used when a service uses the <code>EXTERNAL</code> deployment controller type. For more
 * 			information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html">Amazon ECS Deployment
 * 				Types</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, UpdateServicePrimaryTaskSetCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, UpdateServicePrimaryTaskSetCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new UpdateServicePrimaryTaskSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateServicePrimaryTaskSetCommandInput} for command's `input` shape.
 * @see {@link UpdateServicePrimaryTaskSetCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateServicePrimaryTaskSetCommand extends $Command<UpdateServicePrimaryTaskSetCommandInput, UpdateServicePrimaryTaskSetCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateServicePrimaryTaskSetCommandInput;
    constructor(input: UpdateServicePrimaryTaskSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServicePrimaryTaskSetCommandInput, UpdateServicePrimaryTaskSetCommandOutput>;
    private serialize;
    private deserialize;
}
