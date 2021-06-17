import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeFleetsRequest, DescribeFleetsResult } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFleetsCommandInput extends DescribeFleetsRequest {
}
export interface DescribeFleetsCommandOutput extends DescribeFleetsResult, __MetadataBearer {
}
/**
 * <p>Describes the specified EC2 Fleets or all of your EC2 Fleets.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html#monitor-ec2-fleet">Monitoring your EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeFleetsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeFleetsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeFleetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetsCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFleetsCommand extends $Command<DescribeFleetsCommandInput, DescribeFleetsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeFleetsCommandInput;
    constructor(input: DescribeFleetsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFleetsCommandInput, DescribeFleetsCommandOutput>;
    private serialize;
    private deserialize;
}
