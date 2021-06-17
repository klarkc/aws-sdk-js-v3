import { __extends } from "tslib";
import { CheckoutBorrowLicenseRequest, CheckoutBorrowLicenseResponse } from "../models/models_0";
import { deserializeAws_json1_1CheckoutBorrowLicenseCommand, serializeAws_json1_1CheckoutBorrowLicenseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Checks out the specified license for offline use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutBorrowLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutBorrowLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckoutBorrowLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckoutBorrowLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutBorrowLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CheckoutBorrowLicenseCommand = /** @class */ (function (_super) {
    __extends(CheckoutBorrowLicenseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CheckoutBorrowLicenseCommand(input) {
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
    CheckoutBorrowLicenseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "CheckoutBorrowLicenseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CheckoutBorrowLicenseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CheckoutBorrowLicenseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CheckoutBorrowLicenseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CheckoutBorrowLicenseCommand(input, context);
    };
    CheckoutBorrowLicenseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CheckoutBorrowLicenseCommand(output, context);
    };
    return CheckoutBorrowLicenseCommand;
}($Command));
export { CheckoutBorrowLicenseCommand };
//# sourceMappingURL=CheckoutBorrowLicenseCommand.js.map