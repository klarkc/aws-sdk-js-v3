import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopEdgePackagingJobRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopEdgePackagingJobCommandInput extends StopEdgePackagingJobRequest {
}
export interface StopEdgePackagingJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>Request to stop an edge packaging job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link StopEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopEdgePackagingJobCommand extends $Command<StopEdgePackagingJobCommandInput, StopEdgePackagingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopEdgePackagingJobCommandInput;
    constructor(input: StopEdgePackagingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopEdgePackagingJobCommandInput, StopEdgePackagingJobCommandOutput>;
    private serialize;
    private deserialize;
}
