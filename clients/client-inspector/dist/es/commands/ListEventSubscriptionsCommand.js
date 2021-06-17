import { __extends } from "tslib";
import { ListEventSubscriptionsRequest, ListEventSubscriptionsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListEventSubscriptionsCommand, serializeAws_json1_1ListEventSubscriptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all the event subscriptions for the assessment template that is specified by
 *          the ARN of the assessment template. For more information, see <a>SubscribeToEvent</a> and <a>UnsubscribeFromEvent</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InspectorClient, ListEventSubscriptionsCommand } from "@aws-sdk/client-inspector"; // ES Modules import
 * // const { InspectorClient, ListEventSubscriptionsCommand } = require("@aws-sdk/client-inspector"); // CommonJS import
 * const client = new InspectorClient(config);
 * const command = new ListEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link ListEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link InspectorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEventSubscriptionsCommand = /** @class */ (function (_super) {
    __extends(ListEventSubscriptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEventSubscriptionsCommand(input) {
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
    ListEventSubscriptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "InspectorClient";
        var commandName = "ListEventSubscriptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEventSubscriptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEventSubscriptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEventSubscriptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListEventSubscriptionsCommand(input, context);
    };
    ListEventSubscriptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListEventSubscriptionsCommand(output, context);
    };
    return ListEventSubscriptionsCommand;
}($Command));
export { ListEventSubscriptionsCommand };
//# sourceMappingURL=ListEventSubscriptionsCommand.js.map