import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachInternetGatewayRequest } from "../models/models_3";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DetachInternetGatewayCommandInput extends DetachInternetGatewayRequest {
}
export interface DetachInternetGatewayCommandOutput extends __MetadataBearer {
}
/**
 * <p>Detaches an internet gateway from a VPC, disabling connectivity between the internet
 * 			and the VPC. The VPC must not contain any running instances with Elastic IP addresses or
 * 			public IPv4 addresses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DetachInternetGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DetachInternetGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DetachInternetGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetachInternetGatewayCommandInput} for command's `input` shape.
 * @see {@link DetachInternetGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetachInternetGatewayCommand extends $Command<DetachInternetGatewayCommandInput, DetachInternetGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DetachInternetGatewayCommandInput;
    constructor(input: DetachInternetGatewayCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachInternetGatewayCommandInput, DetachInternetGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
