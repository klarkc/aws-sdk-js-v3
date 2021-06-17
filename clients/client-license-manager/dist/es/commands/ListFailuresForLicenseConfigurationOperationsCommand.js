import { __extends } from "tslib";
import { ListFailuresForLicenseConfigurationOperationsRequest, ListFailuresForLicenseConfigurationOperationsResponse, } from "../models/models_0";
import { deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand, serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the license configuration operations that failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListFailuresForLicenseConfigurationOperationsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListFailuresForLicenseConfigurationOperationsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListFailuresForLicenseConfigurationOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFailuresForLicenseConfigurationOperationsCommandInput} for command's `input` shape.
 * @see {@link ListFailuresForLicenseConfigurationOperationsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFailuresForLicenseConfigurationOperationsCommand = /** @class */ (function (_super) {
    __extends(ListFailuresForLicenseConfigurationOperationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFailuresForLicenseConfigurationOperationsCommand(input) {
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
    ListFailuresForLicenseConfigurationOperationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ListFailuresForLicenseConfigurationOperationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFailuresForLicenseConfigurationOperationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFailuresForLicenseConfigurationOperationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFailuresForLicenseConfigurationOperationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(input, context);
    };
    ListFailuresForLicenseConfigurationOperationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFailuresForLicenseConfigurationOperationsCommand(output, context);
    };
    return ListFailuresForLicenseConfigurationOperationsCommand;
}($Command));
export { ListFailuresForLicenseConfigurationOperationsCommand };
//# sourceMappingURL=ListFailuresForLicenseConfigurationOperationsCommand.js.map