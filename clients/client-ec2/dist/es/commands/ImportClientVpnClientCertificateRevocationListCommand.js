import { __extends } from "tslib";
import { ImportClientVpnClientCertificateRevocationListRequest, ImportClientVpnClientCertificateRevocationListResult, } from "../models/models_4";
import { deserializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand, serializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uploads a client certificate revocation list to the specified Client VPN endpoint. Uploading a client certificate revocation list overwrites the existing client certificate revocation list.</p>
 * 		       <p>Uploading a client certificate revocation list resets existing client connections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportClientVpnClientCertificateRevocationListCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportClientVpnClientCertificateRevocationListCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportClientVpnClientCertificateRevocationListCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportClientVpnClientCertificateRevocationListCommandInput} for command's `input` shape.
 * @see {@link ImportClientVpnClientCertificateRevocationListCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportClientVpnClientCertificateRevocationListCommand = /** @class */ (function (_super) {
    __extends(ImportClientVpnClientCertificateRevocationListCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ImportClientVpnClientCertificateRevocationListCommand(input) {
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
    ImportClientVpnClientCertificateRevocationListCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "ImportClientVpnClientCertificateRevocationListCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ImportClientVpnClientCertificateRevocationListRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ImportClientVpnClientCertificateRevocationListResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ImportClientVpnClientCertificateRevocationListCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand(input, context);
    };
    ImportClientVpnClientCertificateRevocationListCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2ImportClientVpnClientCertificateRevocationListCommand(output, context);
    };
    return ImportClientVpnClientCertificateRevocationListCommand;
}($Command));
export { ImportClientVpnClientCertificateRevocationListCommand };
//# sourceMappingURL=ImportClientVpnClientCertificateRevocationListCommand.js.map