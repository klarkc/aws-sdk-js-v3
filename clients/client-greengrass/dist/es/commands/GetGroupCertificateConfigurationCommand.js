import { __extends } from "tslib";
import { GetGroupCertificateConfigurationRequest, GetGroupCertificateConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetGroupCertificateConfigurationCommand, serializeAws_restJson1GetGroupCertificateConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves the current configuration for the CA used by the group.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetGroupCertificateConfigurationCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetGroupCertificateConfigurationCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetGroupCertificateConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGroupCertificateConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetGroupCertificateConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetGroupCertificateConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetGroupCertificateConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetGroupCertificateConfigurationCommand(input) {
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
    GetGroupCertificateConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetGroupCertificateConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetGroupCertificateConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetGroupCertificateConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetGroupCertificateConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetGroupCertificateConfigurationCommand(input, context);
    };
    GetGroupCertificateConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetGroupCertificateConfigurationCommand(output, context);
    };
    return GetGroupCertificateConfigurationCommand;
}($Command));
export { GetGroupCertificateConfigurationCommand };
//# sourceMappingURL=GetGroupCertificateConfigurationCommand.js.map