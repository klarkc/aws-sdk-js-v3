import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeCompilationJobRequest, DescribeCompilationJobResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeCompilationJobCommandInput extends DescribeCompilationJobRequest {
}
export interface DescribeCompilationJobCommandOutput extends DescribeCompilationJobResponse, __MetadataBearer {
}
/**
 * <p>Returns information about a model compilation job.</p>
 *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
 *             information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeCompilationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeCompilationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DescribeCompilationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeCompilationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeCompilationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeCompilationJobCommand extends $Command<DescribeCompilationJobCommandInput, DescribeCompilationJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeCompilationJobCommandInput;
    constructor(input: DescribeCompilationJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCompilationJobCommandInput, DescribeCompilationJobCommandOutput>;
    private serialize;
    private deserialize;
}
