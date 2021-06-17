"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDhcpOptionsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates a set of DHCP options for your VPC. After creating the set, you must
 * 				associate it with the VPC, causing all existing and new instances that you launch in
 * 				the VPC to use this set of DHCP options. The following are the individual DHCP
 * 				options you can specify. For more information about the options, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>domain-name-servers</code> - The IP addresses of up to four domain name
 *                     servers, or AmazonProvidedDNS. The default DHCP option set specifies
 *                     AmazonProvidedDNS. If specifying more than one domain name server, specify the
 *                     IP addresses in a single parameter, separated by commas. To have your instance
 *                     receive a custom DNS hostname as specified in <code>domain-name</code>, you must
 *                     set <code>domain-name-servers</code> to a custom DNS server.</p>
 *            </li>
 *             <li>
 *                <p>
 *                   <code>domain-name</code> - If you're using AmazonProvidedDNS in
 *                    <code>us-east-1</code>, specify <code>ec2.internal</code>. If you're using
 *                    AmazonProvidedDNS in another Region, specify
 *                    <code>region.compute.internal</code> (for example,
 *                    <code>ap-northeast-1.compute.internal</code>). Otherwise, specify a domain
 *                    name (for example, <code>ExampleCompany.com</code>). This value is used to complete
 *                    unqualified DNS hostnames. <b>Important</b>: Some
 *                    Linux operating systems accept multiple domain names separated by spaces.
 *                    However, Windows and other Linux operating systems treat the value as a single
 *                    domain, which results in unexpected behavior. If your DHCP options set is
 *                    associated with a VPC that has instances with multiple operating systems,
 *                    specify only one domain name.</p>
 *            </li>
 *             <li>
 *                <p>
 *                   <code>ntp-servers</code> - The IP addresses of up to four Network Time Protocol (NTP)
 *                    servers.</p>
 *            </li>
 *             <li>
 *                <p>
 *                   <code>netbios-name-servers</code> - The IP addresses of up to four NetBIOS name
 *                    servers.</p>
 *            </li>
 *             <li>
 *                <p>
 *                   <code>netbios-node-type</code> - The NetBIOS node type (1, 2, 4, or 8). We recommend that
 *                    you specify 2 (broadcast and multicast are not currently supported). For more information
 *                    about these node types, see <a href="http://www.ietf.org/rfc/rfc2132.txt">RFC 2132</a>.</p>
 *            </li>
 *          </ul>
 *
 *          <p>Your VPC automatically starts out with a set of DHCP options that includes only a DNS
 * 			server that we provide (AmazonProvidedDNS). If you create a set of options, and if your
 * 			VPC has an internet gateway, make sure to set the <code>domain-name-servers</code>
 * 			option either to <code>AmazonProvidedDNS</code> or to a domain name server of your
 * 			choice. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the
 * 			<i>Amazon Virtual Private Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateDhcpOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateDhcpOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateDhcpOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDhcpOptionsCommandInput} for command's `input` shape.
 * @see {@link CreateDhcpOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateDhcpOptionsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "CreateDhcpOptionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateDhcpOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateDhcpOptionsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateDhcpOptionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateDhcpOptionsCommand(output, context);
    }
}
exports.CreateDhcpOptionsCommand = CreateDhcpOptionsCommand;
//# sourceMappingURL=CreateDhcpOptionsCommand.js.map