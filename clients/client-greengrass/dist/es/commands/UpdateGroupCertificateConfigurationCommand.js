import { __extends } from "tslib";
import { UpdateGroupCertificateConfigurationRequest, UpdateGroupCertificateConfigurationResponse, } from "../models/models_0";
import { deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand, serializeAws_restJson1UpdateGroupCertificateConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates the Certificate expiry time for a group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateGroupCertificateConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateGroupCertificateConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new UpdateGroupCertificateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGroupCertificateConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCertificateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateGroupCertificateConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateGroupCertificateConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateGroupCertificateConfigurationCommand(input) {
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
    UpdateGroupCertificateConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "UpdateGroupCertificateConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateGroupCertificateConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateGroupCertificateConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateGroupCertificateConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateGroupCertificateConfigurationCommand(input, context);
    };
    UpdateGroupCertificateConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateGroupCertificateConfigurationCommand(output, context);
    };
    return UpdateGroupCertificateConfigurationCommand;
}($Command));
export { UpdateGroupCertificateConfigurationCommand };
//# sourceMappingURL=UpdateGroupCertificateConfigurationCommand.js.map