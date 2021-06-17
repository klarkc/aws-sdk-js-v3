import { __extends } from "tslib";
import { ExportClientVpnClientConfigurationRequest, ExportClientVpnClientConfigurationResult, } from "../models/models_4";
import { deserializeAws_ec2ExportClientVpnClientConfigurationCommand, serializeAws_ec2ExportClientVpnClientConfigurationCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Downloads the contents of the Client VPN endpoint configuration file for the specified Client VPN endpoint. The Client VPN endpoint configuration
 * 			file includes the Client VPN endpoint and certificate information clients need to establish a connection
 * 			with the Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportClientVpnClientConfigurationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportClientVpnClientConfigurationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportClientVpnClientConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportClientVpnClientConfigurationCommandInput} for command's `input` shape.
 * @see {@link ExportClientVpnClientConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportClientVpnClientConfigurationCommand = /** @class */ (function (_super) {
    __extends(ExportClientVpnClientConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportClientVpnClientConfigurationCommand(input) {
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
    ExportClientVpnClientConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ExportClientVpnClientConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportClientVpnClientConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportClientVpnClientConfigurationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportClientVpnClientConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ExportClientVpnClientConfigurationCommand(input, context);
    };
    ExportClientVpnClientConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ExportClientVpnClientConfigurationCommand(output, context);
    };
    return ExportClientVpnClientConfigurationCommand;
}($Command));
export { ExportClientVpnClientConfigurationCommand };
//# sourceMappingURL=ExportClientVpnClientConfigurationCommand.js.map