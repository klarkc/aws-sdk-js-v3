import { __extends } from "tslib";
import { DeleteLicenseConfigurationRequest, DeleteLicenseConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteLicenseConfigurationCommand, serializeAws_json1_1DeleteLicenseConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified license configuration.</p>
 *          <p>You cannot delete a license configuration that is in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLicenseConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteLicenseConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLicenseConfigurationCommand(input) {
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
    DeleteLicenseConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "DeleteLicenseConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLicenseConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLicenseConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLicenseConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLicenseConfigurationCommand(input, context);
    };
    DeleteLicenseConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLicenseConfigurationCommand(output, context);
    };
    return DeleteLicenseConfigurationCommand;
}($Command));
export { DeleteLicenseConfigurationCommand };
//# sourceMappingURL=DeleteLicenseConfigurationCommand.js.map