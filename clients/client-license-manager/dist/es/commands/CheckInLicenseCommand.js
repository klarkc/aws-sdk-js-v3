import { __extends } from "tslib";
import { CheckInLicenseRequest, CheckInLicenseResponse } from "../models/models_0";
import { deserializeAws_json1_1CheckInLicenseCommand, serializeAws_json1_1CheckInLicenseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Checks in the specified license. Check in a license when it is no longer in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckInLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckInLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckInLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckInLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckInLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckInLicenseCommand = /** @class */ (function (_super) {
    __extends(CheckInLicenseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckInLicenseCommand(input) {
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
    CheckInLicenseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CheckInLicenseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckInLicenseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CheckInLicenseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckInLicenseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CheckInLicenseCommand(input, context);
    };
    CheckInLicenseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CheckInLicenseCommand(output, context);
    };
    return CheckInLicenseCommand;
}($Command));
export { CheckInLicenseCommand };
//# sourceMappingURL=CheckInLicenseCommand.js.map