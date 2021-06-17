"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModifyVpnTunnelOptionsCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Modifies the options for a VPN tunnel in an AWS Site-to-Site VPN connection. You can modify
 *             multiple options for a tunnel in a single request, but you can only modify one tunnel at
 *             a time. For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPNTunnels.html">Site-to-Site VPN Tunnel Options for Your Site-to-Site VPN
 *                 Connection</a> in the <i>AWS Site-to-Site VPN User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnTunnelOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnTunnelOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnTunnelOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnTunnelOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnTunnelOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ModifyVpnTunnelOptionsCommand extends smithy_client_1.Command {
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
        const commandName = "ModifyVpnTunnelOptionsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.ModifyVpnTunnelOptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.ModifyVpnTunnelOptionsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2ModifyVpnTunnelOptionsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2ModifyVpnTunnelOptionsCommand(output, context);
    }
}
exports.ModifyVpnTunnelOptionsCommand = ModifyVpnTunnelOptionsCommand;
//# sourceMappingURL=ModifyVpnTunnelOptionsCommand.js.map