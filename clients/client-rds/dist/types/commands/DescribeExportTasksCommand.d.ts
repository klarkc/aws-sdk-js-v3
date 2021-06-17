import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeExportTasksMessage, ExportTasksMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeExportTasksCommandInput extends DescribeExportTasksMessage {
}
export interface DescribeExportTasksCommandOutput extends ExportTasksMessage, __MetadataBearer {
}
/**
 * <p>Returns information about a snapshot export to Amazon S3. This API operation supports
 *             pagination. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeExportTasksCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeExportTasksCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeExportTasksCommand extends $Command<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeExportTasksCommandInput;
    constructor(input: DescribeExportTasksCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExportTasksCommandInput, DescribeExportTasksCommandOutput>;
    private serialize;
    private deserialize;
}
