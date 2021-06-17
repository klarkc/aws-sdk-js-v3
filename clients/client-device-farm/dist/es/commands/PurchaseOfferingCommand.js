import { __extends } from "tslib";
import { PurchaseOfferingRequest, PurchaseOfferingResult } from "../models/models_0";
import { deserializeAws_json1_1PurchaseOfferingCommand, serializeAws_json1_1PurchaseOfferingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Immediately purchases offerings for an AWS account. Offerings renew with the latest total purchased
 *             quantity for an offering, unless the renewal was overridden. The API returns a <code>NotEligible</code>
 *             error if the user is not permitted to invoke the operation. If you must be able to invoke this operation,
 *             contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, PurchaseOfferingCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, PurchaseOfferingCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PurchaseOfferingCommand = /** @class */ (function (_super) {
    __extends(PurchaseOfferingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseOfferingCommand(input) {
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
    PurchaseOfferingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "PurchaseOfferingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseOfferingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseOfferingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseOfferingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PurchaseOfferingCommand(input, context);
    };
    PurchaseOfferingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PurchaseOfferingCommand(output, context);
    };
    return PurchaseOfferingCommand;
}($Command));
export { PurchaseOfferingCommand };
//# sourceMappingURL=PurchaseOfferingCommand.js.map