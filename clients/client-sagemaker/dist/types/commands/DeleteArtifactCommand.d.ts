import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteArtifactRequest, DeleteArtifactResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteArtifactCommandInput extends DeleteArtifactRequest {
}
export interface DeleteArtifactCommandOutput extends DeleteArtifactResponse, __MetadataBearer {
}
/**
 * <p>Deletes an artifact. Either <code>ArtifactArn</code> or <code>Source</code> must be
 *         specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteArtifactCommandInput} for command's `input` shape.
 * @see {@link DeleteArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteArtifactCommand extends $Command<DeleteArtifactCommandInput, DeleteArtifactCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteArtifactCommandInput;
    constructor(input: DeleteArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteArtifactCommandInput, DeleteArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
