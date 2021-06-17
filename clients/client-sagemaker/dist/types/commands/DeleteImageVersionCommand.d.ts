import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteImageVersionRequest, DeleteImageVersionResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteImageVersionCommandInput extends DeleteImageVersionRequest {
}
export interface DeleteImageVersionCommandOutput extends DeleteImageVersionResponse, __MetadataBearer {
}
/**
 * <p>Deletes a version of a SageMaker image. The container image the version represents isn't
 *         deleted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteImageVersionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteImageVersionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteImageVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImageVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteImageVersionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteImageVersionCommand extends $Command<DeleteImageVersionCommandInput, DeleteImageVersionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteImageVersionCommandInput;
    constructor(input: DeleteImageVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteImageVersionCommandInput, DeleteImageVersionCommandOutput>;
    private serialize;
    private deserialize;
}
