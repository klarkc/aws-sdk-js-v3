import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { CreateDatasetImportJobRequest, CreateDatasetImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateDatasetImportJobCommandInput extends CreateDatasetImportJobRequest {
}
export interface CreateDatasetImportJobCommandOutput extends CreateDatasetImportJobResponse, __MetadataBearer {
}
/**
 * <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your
 *       training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset
 *       that you want to import the data to.</p>
 *          <p>You must specify a <a>DataSource</a> object that includes an AWS Identity and Access Management (IAM)
 *       role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and
 *       processes it in an internal AWS system. For more information, see <a>aws-forecast-iam-roles</a>.</p>
 *          <p>The training data must be in CSV format. The delimiter must be a comma (,).</p>
 *          <p>You can specify the path to a specific CSV file, the S3 bucket, or to a folder in the S3
 *       bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000
 *       files.</p>
 *
 *
 *          <p>Because dataset imports are not aggregated, your most recent dataset import is the one
 *       that is used when training a predictor or generating a forecast. Make sure that your most
 *       recent dataset import contains all of the data you want to model off of, and not just the new
 *       data collected since the previous import.</p>
 *
 *
 *          <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the
 *         <a>ListDatasetImportJobs</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, CreateDatasetImportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, CreateDatasetImportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new CreateDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetImportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateDatasetImportJobCommand extends $Command<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput, ForecastClientResolvedConfig> {
    readonly input: CreateDatasetImportJobCommandInput;
    constructor(input: CreateDatasetImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDatasetImportJobCommandInput, CreateDatasetImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
