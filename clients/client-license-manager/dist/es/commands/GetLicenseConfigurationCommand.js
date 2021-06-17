import { __extends } from "tslib";
import { GetLicenseConfigurationRequest, GetLicenseConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1GetLicenseConfigurationCommand, serializeAws_json1_1GetLicenseConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets detailed information about the specified license configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLicenseConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetLicenseConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLicenseConfigurationCommand(input) {
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
    GetLicenseConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "GetLicenseConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLicenseConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLicenseConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLicenseConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetLicenseConfigurationCommand(input, context);
    };
    GetLicenseConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetLicenseConfigurationCommand(output, context);
    };
    return GetLicenseConfigurationCommand;
}($Command));
export { GetLicenseConfigurationCommand };
//# sourceMappingURL=GetLicenseConfigurationCommand.js.map