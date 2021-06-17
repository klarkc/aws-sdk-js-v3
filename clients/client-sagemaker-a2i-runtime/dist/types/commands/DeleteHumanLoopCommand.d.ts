import { SageMakerA2IRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerA2IRuntimeClient";
import { DeleteHumanLoopRequest, DeleteHumanLoopResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteHumanLoopCommandInput extends DeleteHumanLoopRequest {
}
export interface DeleteHumanLoopCommandOutput extends DeleteHumanLoopResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified human loop for a flow definition.</p>
 *          <p>If the human loop was deleted, this operation will return a
 *         <code>ResourceNotFoundException</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } from "@aws-sdk/client-sagemaker-a2i-runtime"; // ES Modules import
 * // const { SageMakerA2IRuntimeClient, DeleteHumanLoopCommand } = require("@aws-sdk/client-sagemaker-a2i-runtime"); // CommonJS import
 * const client = new SageMakerA2IRuntimeClient(config);
 * const command = new DeleteHumanLoopCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteHumanLoopCommandInput} for command's `input` shape.
 * @see {@link DeleteHumanLoopCommandOutput} for command's `response` shape.
 * @see {@link SageMakerA2IRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteHumanLoopCommand extends $Command<DeleteHumanLoopCommandInput, DeleteHumanLoopCommandOutput, SageMakerA2IRuntimeClientResolvedConfig> {
    readonly input: DeleteHumanLoopCommandInput;
    constructor(input: DeleteHumanLoopCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerA2IRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteHumanLoopCommandInput, DeleteHumanLoopCommandOutput>;
    private serialize;
    private deserialize;
}
