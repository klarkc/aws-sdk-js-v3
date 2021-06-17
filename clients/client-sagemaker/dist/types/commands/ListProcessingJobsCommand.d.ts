import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListProcessingJobsRequest, ListProcessingJobsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListProcessingJobsCommandInput extends ListProcessingJobsRequest {
}
export interface ListProcessingJobsCommandOutput extends ListProcessingJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists processing jobs that satisfy various filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListProcessingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListProcessingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListProcessingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProcessingJobsCommandInput} for command's `input` shape.
 * @see {@link ListProcessingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListProcessingJobsCommand extends $Command<ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListProcessingJobsCommandInput;
    constructor(input: ListProcessingJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput>;
    private serialize;
    private deserialize;
}
