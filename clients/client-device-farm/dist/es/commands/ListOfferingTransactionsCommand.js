import { __extends } from "tslib";
import { ListOfferingTransactionsRequest, ListOfferingTransactionsResult } from "../models/models_0";
import { deserializeAws_json1_1ListOfferingTransactionsCommand, serializeAws_json1_1ListOfferingTransactionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all historical purchases, renewals, and system renewal transactions for an AWS
 *             account. The list is paginated and ordered by a descending timestamp (most recent transactions are first).
 *             The API returns a <code>NotEligible</code> error if the user is not permitted to invoke the operation. If
 *             you must be able to invoke this operation, contact <a href="mailto:aws-devicefarm-support@amazon.com">aws-devicefarm-support@amazon.com</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListOfferingTransactionsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListOfferingTransactionsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListOfferingTransactionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOfferingTransactionsCommandInput} for command's `input` shape.
 * @see {@link ListOfferingTransactionsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOfferingTransactionsCommand = /** @class */ (function (_super) {
    __extends(ListOfferingTransactionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOfferingTransactionsCommand(input) {
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
    ListOfferingTransactionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListOfferingTransactionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOfferingTransactionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOfferingTransactionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOfferingTransactionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOfferingTransactionsCommand(input, context);
    };
    ListOfferingTransactionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOfferingTransactionsCommand(output, context);
    };
    return ListOfferingTransactionsCommand;
}($Command));
export { ListOfferingTransactionsCommand };
//# sourceMappingURL=ListOfferingTransactionsCommand.js.map