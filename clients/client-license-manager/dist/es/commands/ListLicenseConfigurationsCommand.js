import { __extends } from "tslib";
import { ListLicenseConfigurationsRequest, ListLicenseConfigurationsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListLicenseConfigurationsCommand, serializeAws_json1_1ListLicenseConfigurationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the license configurations for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseConfigurationsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseConfigurationsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicenseConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicenseConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLicenseConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListLicenseConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListLicenseConfigurationsCommand(input) {
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
    ListLicenseConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListLicenseConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListLicenseConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListLicenseConfigurationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListLicenseConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListLicenseConfigurationsCommand(input, context);
    };
    ListLicenseConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListLicenseConfigurationsCommand(output, context);
    };
    return ListLicenseConfigurationsCommand;
}($Command));
export { ListLicenseConfigurationsCommand };
//# sourceMappingURL=ListLicenseConfigurationsCommand.js.map