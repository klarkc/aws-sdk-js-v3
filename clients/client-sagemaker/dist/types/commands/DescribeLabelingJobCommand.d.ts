import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeLabelingJobRequest, DescribeLabelingJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeLabelingJobCommandInput extends DescribeLabelingJobRequest {
}
export interface DescribeLabelingJobCommandOutput extends DescribeLabelingJobResponse, __MetadataBearer {
}
/**
 * <p>Gets information about a labeling job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeLabelingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeLabelingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeLabelingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLabelingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeLabelingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeLabelingJobCommand extends $Command<DescribeLabelingJobCommandInput, DescribeLabelingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeLabelingJobCommandInput;
    constructor(input: DescribeLabelingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLabelingJobCommandInput, DescribeLabelingJobCommandOutput>;
    private serialize;
    private deserialize;
}
