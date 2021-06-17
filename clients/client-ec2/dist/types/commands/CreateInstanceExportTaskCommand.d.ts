import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateInstanceExportTaskRequest, CreateInstanceExportTaskResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateInstanceExportTaskCommandInput extends CreateInstanceExportTaskRequest {
}
export interface CreateInstanceExportTaskCommandOutput extends CreateInstanceExportTaskResult, __MetadataBearer {
}
/**
 * <p>Exports a running or stopped instance to an Amazon S3 bucket.</p>
 *          <p>For information about the supported operating systems, image formats, and known limitations
 *    for the types of instances you can export, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html">Exporting an instance as a VM Using VM Import/Export</a>
 *    in the <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInstanceExportTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInstanceExportTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateInstanceExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceExportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceExportTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateInstanceExportTaskCommand extends $Command<CreateInstanceExportTaskCommandInput, CreateInstanceExportTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateInstanceExportTaskCommandInput;
    constructor(input: CreateInstanceExportTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateInstanceExportTaskCommandInput, CreateInstanceExportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
