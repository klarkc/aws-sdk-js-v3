import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CancelConversionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelConversionTaskCommandInput extends CancelConversionRequest {
}
export interface CancelConversionTaskCommandOutput extends __MetadataBearer {
}
/**
 * <p>Cancels an active conversion task. The task can be the import of an instance or volume. The action removes all
 *    artifacts of the conversion, including a partially uploaded volume or instance. If the conversion is complete or is
 *    in the process of transferring the final disk image, the command fails and returns an exception.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/CommandLineReference/ec2-cli-vmimport-export.html">Importing a Virtual Machine Using the Amazon
 *     EC2 CLI</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelConversionTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelConversionTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelConversionTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelConversionTaskCommandInput} for command's `input` shape.
 * @see {@link CancelConversionTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelConversionTaskCommand extends $Command<CancelConversionTaskCommandInput, CancelConversionTaskCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CancelConversionTaskCommandInput;
    constructor(input: CancelConversionTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelConversionTaskCommandInput, CancelConversionTaskCommandOutput>;
    private serialize;
    private deserialize;
}
