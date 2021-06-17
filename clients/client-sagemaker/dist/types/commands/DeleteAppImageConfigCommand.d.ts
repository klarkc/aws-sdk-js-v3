import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteAppImageConfigRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteAppImageConfigCommandInput extends DeleteAppImageConfigRequest {
}
export interface DeleteAppImageConfigCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes an AppImageConfig.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteAppImageConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteAppImageConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteAppImageConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppImageConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteAppImageConfigCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteAppImageConfigCommand extends $Command<DeleteAppImageConfigCommandInput, DeleteAppImageConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteAppImageConfigCommandInput;
    constructor(input: DeleteAppImageConfigCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppImageConfigCommandInput, DeleteAppImageConfigCommandOutput>;
    private serialize;
    private deserialize;
}
