import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeEdgePackagingJobRequest, DescribeEdgePackagingJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeEdgePackagingJobCommandInput extends DescribeEdgePackagingJobRequest {
}
export interface DescribeEdgePackagingJobCommandOutput extends DescribeEdgePackagingJobResponse, __MetadataBearer {
}
/**
 * <p>A description of edge packaging jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeEdgePackagingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeEdgePackagingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeEdgePackagingJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEdgePackagingJobCommandInput} for command's `input` shape.
 * @see {@link DescribeEdgePackagingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeEdgePackagingJobCommand extends $Command<DescribeEdgePackagingJobCommandInput, DescribeEdgePackagingJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeEdgePackagingJobCommandInput;
    constructor(input: DescribeEdgePackagingJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEdgePackagingJobCommandInput, DescribeEdgePackagingJobCommandOutput>;
    private serialize;
    private deserialize;
}
