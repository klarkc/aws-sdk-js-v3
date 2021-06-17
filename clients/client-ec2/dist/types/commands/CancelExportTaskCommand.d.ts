import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelExportTaskRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelExportTaskCommandInput extends CancelExportTaskRequest {
}
export interface CancelExportTaskCommandOutput extends __MetadataBearer {
}
/**
 * <p>Cancels an active export task. The request removes all artifacts of the export, including any partially-created
 *    Amazon S3 objects. If the export task is complete or is in the process of transferring the final disk image, the
 *    command fails and returns an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelExportTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelExportTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelExportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelExportTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelExportTaskCommand extends $Command<CancelExportTaskCommandInput, CancelExportTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelExportTaskCommandInput;
    constructor(input: CancelExportTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelExportTaskCommandInput, CancelExportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
