import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFleetRequest, CreateFleetResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateFleetCommandInput extends CreateFleetRequest {
}
export interface CreateFleetCommandOutput extends CreateFleetResult, __MetadataBearer {
}
/**
 * <p>Launches an EC2 Fleet.</p>
 *          <p>You can create a single EC2 Fleet that includes multiple launch specifications that vary by
 *          instance type, AMI, Availability Zone, or subnet.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet.html">Launching an EC2 Fleet</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateFleetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateFleetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateFleetCommandInput} for command's `input` shape.
 * @see {@link CreateFleetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateFleetCommand extends $Command<CreateFleetCommandInput, CreateFleetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateFleetCommandInput;
    constructor(input: CreateFleetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFleetCommandInput, CreateFleetCommandOutput>;
    private serialize;
    private deserialize;
}
