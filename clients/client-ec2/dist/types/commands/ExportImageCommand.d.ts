import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ExportImageRequest, ExportImageResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportImageCommandInput extends ExportImageRequest {
}
export interface ExportImageCommandOutput extends ExportImageResult, __MetadataBearer {
}
/**
 * <p>Exports an Amazon Machine Image (AMI) to a VM file. For more information, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport_image.html">Exporting a VM
 *     directly from an Amazon Machine Image (AMI)</a> in the
 *     <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportImageCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportImageCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportImageCommandInput} for command's `input` shape.
 * @see {@link ExportImageCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportImageCommand extends $Command<ExportImageCommandInput, ExportImageCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ExportImageCommandInput;
    constructor(input: ExportImageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportImageCommandInput, ExportImageCommandOutput>;
    private serialize;
    private deserialize;
}
