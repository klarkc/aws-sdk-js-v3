import { __extends } from "tslib";
import { CheckoutLicenseRequest, CheckoutLicenseResponse } from "../models/models_0";
import { deserializeAws_json1_1CheckoutLicenseCommand, serializeAws_json1_1CheckoutLicenseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Checks out the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckoutLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckoutLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckoutLicenseCommand = /** @class */ (function (_super) {
    __extends(CheckoutLicenseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckoutLicenseCommand(input) {
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
    CheckoutLicenseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CheckoutLicenseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckoutLicenseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CheckoutLicenseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckoutLicenseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CheckoutLicenseCommand(input, context);
    };
    CheckoutLicenseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CheckoutLicenseCommand(output, context);
    };
    return CheckoutLicenseCommand;
}($Command));
export { CheckoutLicenseCommand };
//# sourceMappingURL=CheckoutLicenseCommand.js.map