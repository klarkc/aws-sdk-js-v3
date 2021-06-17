import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeProcessingJobRequest, DescribeProcessingJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeProcessingJobCommandInput extends DescribeProcessingJobRequest {
}
export interface DescribeProcessingJobCommandOutput extends DescribeProcessingJobResponse, __MetadataBearer {
}
/**
 * <p>Returns a description of a processing job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeProcessingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeProcessingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeProcessingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProcessingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeProcessingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeProcessingJobCommand extends $Command<DescribeProcessingJobCommandInput, DescribeProcessingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeProcessingJobCommandInput;
    constructor(input: DescribeProcessingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProcessingJobCommandInput, DescribeProcessingJobCommandOutput>;
    private serialize;
    private deserialize;
}
