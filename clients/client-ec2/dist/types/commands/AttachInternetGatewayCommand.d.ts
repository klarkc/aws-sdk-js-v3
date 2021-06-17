import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachInternetGatewayRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AttachInternetGatewayCommandInput extends AttachInternetGatewayRequest {
}
export interface AttachInternetGatewayCommandOutput extends __MetadataBearer {
}
/**
 * <p>Attaches an internet gateway or a virtual private gateway to a VPC, enabling connectivity between the internet and
 * 			the VPC. For more information about your VPC and internet gateway, see the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon Virtual Private Cloud User Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AttachInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AttachInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new AttachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AttachInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link AttachInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AttachInternetGatewayCommand extends $Command<AttachInternetGatewayCommandInput, AttachInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AttachInternetGatewayCommandInput;
    constructor(input: AttachInternetGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachInternetGatewayCommandInput, AttachInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
