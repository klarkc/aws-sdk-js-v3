import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StartVpcEndpointServicePrivateDnsVerificationRequest, StartVpcEndpointServicePrivateDnsVerificationResult } from "../models/models_5";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartVpcEndpointServicePrivateDnsVerificationCommandInput extends StartVpcEndpointServicePrivateDnsVerificationRequest {
}
export interface StartVpcEndpointServicePrivateDnsVerificationCommandOutput extends StartVpcEndpointServicePrivateDnsVerificationResult, __MetadataBearer {
}
/**
 * <p>Initiates the verification process to prove that the service provider owns the private
 *             DNS name domain for the endpoint service.</p>
 *         <p>The service provider must successfully perform the verification before the consumer can use the name to access the service.</p>
 *         <p>Before the service provider runs this command, they must add a record to the DNS server. For more information, see  <a href="https://docs.aws.amazon.com/vpc/latest/userguide/endpoint-services-dns-validation.html#add-dns-txt-record">Adding a TXT Record to Your Domain's DNS Server </a> in the <i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, StartVpcEndpointServicePrivateDnsVerificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, StartVpcEndpointServicePrivateDnsVerificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new StartVpcEndpointServicePrivateDnsVerificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommandInput} for command's `input` shape.
 * @see {@link StartVpcEndpointServicePrivateDnsVerificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartVpcEndpointServicePrivateDnsVerificationCommand extends $Command<StartVpcEndpointServicePrivateDnsVerificationCommandInput, StartVpcEndpointServicePrivateDnsVerificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: StartVpcEndpointServicePrivateDnsVerificationCommandInput;
    constructor(input: StartVpcEndpointServicePrivateDnsVerificationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartVpcEndpointServicePrivateDnsVerificationCommandInput, StartVpcEndpointServicePrivateDnsVerificationCommandOutput>;
    private serialize;
    private deserialize;
}
