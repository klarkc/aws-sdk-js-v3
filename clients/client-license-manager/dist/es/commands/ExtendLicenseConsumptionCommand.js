import { __extends } from "tslib";
import { ExtendLicenseConsumptionRequest, ExtendLicenseConsumptionResponse } from "../models/models_0";
import { deserializeAws_json1_1ExtendLicenseConsumptionCommand, serializeAws_json1_1ExtendLicenseConsumptionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Extends the expiration date for license consumption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ExtendLicenseConsumptionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ExtendLicenseConsumptionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ExtendLicenseConsumptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExtendLicenseConsumptionCommandInput} for command's `input` shape.
 * @see {@link ExtendLicenseConsumptionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ExtendLicenseConsumptionCommand = /** @class */ (function (_super) {
    __extends(ExtendLicenseConsumptionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ExtendLicenseConsumptionCommand(input) {
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
    ExtendLicenseConsumptionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "ExtendLicenseConsumptionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ExtendLicenseConsumptionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ExtendLicenseConsumptionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ExtendLicenseConsumptionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ExtendLicenseConsumptionCommand(input, context);
    };
    ExtendLicenseConsumptionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ExtendLicenseConsumptionCommand(output, context);
    };
    return ExtendLicenseConsumptionCommand;
}($Command));
export { ExtendLicenseConsumptionCommand };
//# sourceMappingURL=ExtendLicenseConsumptionCommand.js.map