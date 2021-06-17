import { __extends } from "tslib";
import { ExportClientVpnClientCertificateRevocationListRequest, ExportClientVpnClientCertificateRevocationListResult, } from "../models/models_4";
import { deserializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand, serializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Downloads the client certificate revocation list for the specified Client VPN endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ExportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ExportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ExportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExportClientVpnClientCertificateRevocationListCommand = /** @class */ (function (_super) {
    __extends(ExportClientVpnClientCertificateRevocationListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExportClientVpnClientCertificateRevocationListCommand(input) {
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
    ExportClientVpnClientCertificateRevocationListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ExportClientVpnClientCertificateRevocationListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExportClientVpnClientCertificateRevocationListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExportClientVpnClientCertificateRevocationListResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExportClientVpnClientCertificateRevocationListCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand(input, context);
    };
    ExportClientVpnClientCertificateRevocationListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ExportClientVpnClientCertificateRevocationListCommand(output, context);
    };
    return ExportClientVpnClientCertificateRevocationListCommand;
}($Command));
export { ExportClientVpnClientCertificateRevocationListCommand };
//# sourceMappingURL=ExportClientVpnClientCertificateRevocationListCommand.js.map