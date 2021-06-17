import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListCompilationJobsRequest, ListCompilationJobsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListCompilationJobsCommandInput extends ListCompilationJobsRequest {
}
export interface ListCompilationJobsCommandOutput extends ListCompilationJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists model compilation jobs that satisfy various filters.</p>
 *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
 *             information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCompilationJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCompilationJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListCompilationJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCompilationJobsCommandInput} for command's `input` shape.
 * @see {@link ListCompilationJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListCompilationJobsCommand extends $Command<ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListCompilationJobsCommandInput;
    constructor(input: ListCompilationJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput>;
    private serialize;
    private deserialize;
}
