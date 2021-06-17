import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrainingJobsRequest, ListTrainingJobsResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTrainingJobsCommandInput extends ListTrainingJobsRequest {
}
export interface ListTrainingJobsCommandOutput extends ListTrainingJobsResponse, __MetadataBearer {
}
/**
 * <p>Lists training jobs.</p>
 *         <note>
 *             <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same
 *                 time, the <code>MaxResults</code> number of training jobs are first retrieved
 *                 ignoring the <code>StatusEquals</code> parameter and then they are filtered by the
 *                 <code>StatusEquals</code> parameter, which is returned as a response.</p>
 *             <p>For example, if <code>ListTrainingJobs</code> is invoked with the following parameters:</p>
 *             <p>
 *                <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code>
 *             </p>
 *             <p>First, 100 trainings jobs with any status, including those other than
 *                 <code>InProgress</code>, are selected (sorted according to the creation time,
 *                 from the most current to the oldest). Next, those with a status of
 *                 <code>InProgress</code> are returned.</p>
 *             <p>You can quickly test the API using the following AWS CLI code.</p>
 *             <p>
 *                <code>aws sagemaker list-training-jobs --max-results 100 --status-equals
 *                     InProgress</code>
 *             </p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListTrainingJobsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListTrainingJobsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListTrainingJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTrainingJobsCommandInput} for command's `input` shape.
 * @see {@link ListTrainingJobsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTrainingJobsCommand extends $Command<ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTrainingJobsCommandInput;
    constructor(input: ListTrainingJobsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput>;
    private serialize;
    private deserialize;
}
