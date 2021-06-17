import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UnmonitorInstancesRequest, UnmonitorInstancesResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UnmonitorInstancesCommandInput extends UnmonitorInstancesRequest {
}
export interface UnmonitorInstancesCommandOutput extends UnmonitorInstancesResult, __MetadataBearer {
}
/**
 * <p>Disables detailed monitoring for a running instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch.html">Monitoring
 *             your instances and volumes</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, UnmonitorInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, UnmonitorInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new UnmonitorInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnmonitorInstancesCommandInput} for command's `input` shape.
 * @see {@link UnmonitorInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UnmonitorInstancesCommand extends $Command<UnmonitorInstancesCommandInput, UnmonitorInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UnmonitorInstancesCommandInput;
    constructor(input: UnmonitorInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnmonitorInstancesCommandInput, UnmonitorInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
