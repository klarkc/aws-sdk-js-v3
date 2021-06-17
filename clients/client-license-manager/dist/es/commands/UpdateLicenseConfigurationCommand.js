import { __extends } from "tslib";
import { UpdateLicenseConfigurationRequest, UpdateLicenseConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateLicenseConfigurationCommand, serializeAws_json1_1UpdateLicenseConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the attributes of an existing license configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new UpdateLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLicenseConfigurationCommand = /** @class */ (function (_super) {
    __extends(UpdateLicenseConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateLicenseConfigurationCommand(input) {
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
    UpdateLicenseConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "UpdateLicenseConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateLicenseConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateLicenseConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateLicenseConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateLicenseConfigurationCommand(input, context);
    };
    UpdateLicenseConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateLicenseConfigurationCommand(output, context);
    };
    return UpdateLicenseConfigurationCommand;
}($Command));
export { UpdateLicenseConfigurationCommand };
//# sourceMappingURL=UpdateLicenseConfigurationCommand.js.map