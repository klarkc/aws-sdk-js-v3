import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDatasetImportJobRequest, CreateDatasetImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDatasetImportJobCommandInput extends CreateDatasetImportJobRequest {
}
export interface CreateDatasetImportJobCommandOutput extends CreateDatasetImportJobResponse, __MetadataBearer {
}
/**
 * <p>Creates a job that imports training data from your data source (an Amazon S3 bucket) to an
 *       Amazon Personalize dataset. To allow Amazon Personalize to import the training data, you must specify an
 *       AWS Identity and Access Management (IAM) service role that has permission to read from the data source, as Amazon Personalize makes a
 *       copy of your data and processes it in an internal AWS system. For information on granting access
 *       to your Amazon S3 bucket, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/granting-personalize-s3-access.html">Giving Amazon Personalize
 *       Access to Amazon S3 Resources</a>. </p>
 *          <important>
 *             <p>The dataset import job replaces any existing data in the dataset that you imported in bulk.</p>
 *          </important>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A dataset import job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the import job, call <a>DescribeDatasetImportJob</a>,
 *       providing the Amazon Resource Name (ARN) of the dataset import job. The dataset import is
 *       complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job failed.</p>
 *          <note>
 *             <p>Importing takes time. You must wait until the status shows as ACTIVE before training a
 *         model using the dataset.</p>
 *          </note>
 *
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListDatasetImportJobs</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeDatasetImportJob</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetImportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetImportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetImportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDatasetImportJobCommand extends $Command<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateDatasetImportJobCommandInput;
    constructor(input: CreateDatasetImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
