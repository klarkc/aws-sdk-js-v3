import { __extends } from "tslib";
import { RenewOfferingRequest, RenewOfferingResult } from "../models/models_0";
import { deserializeAws_json1_1RenewOfferingCommand, serializeAws_json1_1RenewOfferingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Explicitly sets the quantity of devices to renew for an offering, starting from the
 *                 <code>effectiveDate</code> of the next period. The API returns a <code>NotEligible</code> error if the
 *             user is not permitted to invoke the operation. If you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, RenewOfferingCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, RenewOfferingCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new RenewOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RenewOfferingCommandInput} for command's `input` shape.
 * @see {@link RenewOfferingCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RenewOfferingCommand = /** @class */ (function (_super) {
    __extends(RenewOfferingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RenewOfferingCommand(input) {
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
    RenewOfferingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "RenewOfferingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RenewOfferingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RenewOfferingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RenewOfferingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RenewOfferingCommand(input, context);
    };
    RenewOfferingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RenewOfferingCommand(output, context);
    };
    return RenewOfferingCommand;
}($Command));
export { RenewOfferingCommand };
//# sourceMappingURL=RenewOfferingCommand.js.map