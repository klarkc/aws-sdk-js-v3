import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateArtifactRequest, UpdateArtifactResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateArtifactCommandInput extends UpdateArtifactRequest {
}
export interface UpdateArtifactCommandOutput extends UpdateArtifactResponse, __MetadataBearer {
}
/**
 * <p>Updates an artifact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateArtifactCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateArtifactCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateArtifactCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateArtifactCommandInput} for command's `input` shape.
 * @see {@link UpdateArtifactCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateArtifactCommand extends $Command<UpdateArtifactCommandInput, UpdateArtifactCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateArtifactCommandInput;
    constructor(input: UpdateArtifactCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateArtifactCommandInput, UpdateArtifactCommandOutput>;
    private serialize;
    private deserialize;
}
