import { __extends } from "tslib";
import { ListOfferingPromotionsRequest, ListOfferingPromotionsResult } from "../models/models_0";
import { deserializeAws_json1_1ListOfferingPromotionsCommand, serializeAws_json1_1ListOfferingPromotionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of offering promotions. Each offering promotion record contains the ID and description
 *             of the promotion. The API returns a <code>NotEligible</code> error if the caller is not permitted to invoke
 *             the operation. Contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a> if you must be able to invoke this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingPromotionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingPromotionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListOfferingPromotionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingPromotionsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingPromotionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOfferingPromotionsCommand = /** @class */ (function (_super) {
    __extends(ListOfferingPromotionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOfferingPromotionsCommand(input) {
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
    ListOfferingPromotionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListOfferingPromotionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOfferingPromotionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOfferingPromotionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOfferingPromotionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOfferingPromotionsCommand(input, context);
    };
    ListOfferingPromotionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOfferingPromotionsCommand(output, context);
    };
    return ListOfferingPromotionsCommand;
}($Command));
export { ListOfferingPromotionsCommand };
//# sourceMappingURL=ListOfferingPromotionsCommand.js.map