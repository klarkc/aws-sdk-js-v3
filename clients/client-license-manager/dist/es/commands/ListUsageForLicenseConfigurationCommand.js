import { __extends } from "tslib";
import { ListUsageForLicenseConfigurationRequest, ListUsageForLicenseConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1ListUsageForLicenseConfigurationCommand, serializeAws_json1_1ListUsageForLicenseConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all license usage records for a license configuration, displaying license
 *          consumption details by resource at a selected point in time. Use this action to audit the
 *          current license consumption for any license inventory and configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListUsageForLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListUsageForLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListUsageForLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUsageForLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListUsageForLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUsageForLicenseConfigurationCommand = /** @class */ (function (_super) {
    __extends(ListUsageForLicenseConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUsageForLicenseConfigurationCommand(input) {
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
    ListUsageForLicenseConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListUsageForLicenseConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUsageForLicenseConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUsageForLicenseConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUsageForLicenseConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListUsageForLicenseConfigurationCommand(input, context);
    };
    ListUsageForLicenseConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListUsageForLicenseConfigurationCommand(output, context);
    };
    return ListUsageForLicenseConfigurationCommand;
}($Command));
export { ListUsageForLicenseConfigurationCommand };
//# sourceMappingURL=ListUsageForLicenseConfigurationCommand.js.map