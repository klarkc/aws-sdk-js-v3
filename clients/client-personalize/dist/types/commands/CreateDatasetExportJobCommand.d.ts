import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDatasetExportJobRequest, CreateDatasetExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDatasetExportJobCommandInput extends CreateDatasetExportJobRequest {
}
export interface CreateDatasetExportJobCommandOutput extends CreateDatasetExportJobResponse, __MetadataBearer {
}
/**
 * <p>
 *       Creates a job that exports data from your dataset to an Amazon S3 bucket.
 *       To allow Amazon Personalize to export the training data, you must specify an
 *       service-linked AWS Identity and Access Management (IAM) role that gives Amazon Personalize <code>PutObject</code> permissions for your Amazon S3 bucket.
 *       For information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/export-data.html">Exporting a dataset</a>
 *       in the Amazon Personalize developer guide.
 *     </p>
 *          <p>
 *             <b>Status</b>
 *          </p>
 *          <p>A dataset export job can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED</p>
 *             </li>
 *          </ul>
 *          <p>
 *       To get the status of the export job, call <a>DescribeDatasetExportJob</a>,
 *       and specify the Amazon Resource Name (ARN) of the dataset export job. The dataset export is
 *       complete when the status shows as ACTIVE. If the status shows as CREATE FAILED, the response
 *       includes a <code>failureReason</code> key, which describes why the job failed.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetExportJobCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetExportJobCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new CreateDatasetExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetExportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDatasetExportJobCommand extends $Command<CreateDatasetExportJobCommandInput, CreateDatasetExportJobCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateDatasetExportJobCommandInput;
    constructor(input: CreateDatasetExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatasetExportJobCommandInput, CreateDatasetExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
