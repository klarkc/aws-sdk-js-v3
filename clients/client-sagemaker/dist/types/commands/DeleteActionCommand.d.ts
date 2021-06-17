import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteActionRequest, DeleteActionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteActionCommandInput extends DeleteActionRequest {
}
export interface DeleteActionCommandOutput extends DeleteActionResponse, __MetadataBearer {
}
/**
 * <p>Deletes an action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteActionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteActionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteActionCommandInput} for command's `input` shape.
 * @see {@link DeleteActionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteActionCommand extends $Command<DeleteActionCommandInput, DeleteActionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteActionCommandInput;
    constructor(input: DeleteActionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteActionCommandInput, DeleteActionCommandOutput>;
    private serialize;
    private deserialize;
}
