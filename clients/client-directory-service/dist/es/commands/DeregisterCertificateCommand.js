import { __extends } from "tslib";
import { DeregisterCertificateRequest, DeregisterCertificateResult } from "../models/models_0";
import { deserializeAws_json1_1DeregisterCertificateCommand, serializeAws_json1_1DeregisterCertificateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes from the system the certificate that was registered for secure LDAP or client certificate authentication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DeregisterCertificateCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DeregisterCertificateCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DeregisterCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterCertificateCommandInput} for command's `input` shape.
 * @see {@link DeregisterCertificateCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterCertificateCommand = /** @class */ (function (_super) {
    __extends(DeregisterCertificateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterCertificateCommand(input) {
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
    DeregisterCertificateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DeregisterCertificateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterCertificateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterCertificateResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterCertificateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterCertificateCommand(input, context);
    };
    DeregisterCertificateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterCertificateCommand(output, context);
    };
    return DeregisterCertificateCommand;
}($Command));
export { DeregisterCertificateCommand };
//# sourceMappingURL=DeregisterCertificateCommand.js.map