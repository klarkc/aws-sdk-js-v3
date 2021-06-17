import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateProcessingJobRequest, CreateProcessingJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateProcessingJobCommandInput extends CreateProcessingJobRequest {
}
export interface CreateProcessingJobCommandOutput extends CreateProcessingJobResponse, __MetadataBearer {
}
/**
 * <p>Creates a processing job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateProcessingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateProcessingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateProcessingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProcessingJobCommandInput} for command's `input` shape.
 * @see {@link CreateProcessingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateProcessingJobCommand extends $Command<CreateProcessingJobCommandInput, CreateProcessingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateProcessingJobCommandInput;
    constructor(input: CreateProcessingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProcessingJobCommandInput, CreateProcessingJobCommandOutput>;
    private serialize;
    private deserialize;
}
