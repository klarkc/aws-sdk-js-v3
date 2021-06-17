import { __extends } from "tslib";
import { ModifyVpnTunnelCertificateRequest, ModifyVpnTunnelCertificateResult } from "../models/models_4";
import { deserializeAws_ec2ModifyVpnTunnelCertificateCommand, serializeAws_ec2ModifyVpnTunnelCertificateCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the VPN tunnel endpoint certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpnTunnelCertificateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpnTunnelCertificateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpnTunnelCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpnTunnelCertificateCommandInput} for command's `input` shape.
 * @see {@link ModifyVpnTunnelCertificateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyVpnTunnelCertificateCommand = /** @class */ (function (_super) {
    __extends(ModifyVpnTunnelCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyVpnTunnelCertificateCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    ModifyVpnTunnelCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ModifyVpnTunnelCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyVpnTunnelCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyVpnTunnelCertificateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyVpnTunnelCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ModifyVpnTunnelCertificateCommand(input, context);
    };
    ModifyVpnTunnelCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ModifyVpnTunnelCertificateCommand(output, context);
    };
    return ModifyVpnTunnelCertificateCommand;
}($Command));
export { ModifyVpnTunnelCertificateCommand };
//# sourceMappingURL=ModifyVpnTunnelCertificateCommand.js.map