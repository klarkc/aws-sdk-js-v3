import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeDatasetImportJobRequest, DescribeDatasetImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeDatasetImportJobCommandInput extends DescribeDatasetImportJobRequest {
}
export interface DescribeDatasetImportJobCommandOutput extends DescribeDatasetImportJobResponse, __MetadataBearer {
}
/**
 * <p>Describes a dataset import job created using the <a>CreateDatasetImportJob</a>
 *       operation.</p>
 *          <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code>
 *       request, this operation includes the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DataSize</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FieldStatistics</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeDatasetImportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeDatasetImportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetImportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeDatasetImportJobCommand extends $Command<DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput, ForecastClientResolvedConfig> {
    readonly input: DescribeDatasetImportJobCommandInput;
    constructor(input: DescribeDatasetImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ForecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDatasetImportJobCommandInput, DescribeDatasetImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
