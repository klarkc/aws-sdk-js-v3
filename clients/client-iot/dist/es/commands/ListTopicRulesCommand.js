import { __extends } from "tslib";
import { ListTopicRulesRequest, ListTopicRulesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListTopicRulesCommand, serializeAws_restJson1ListTopicRulesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the rules for the specific topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListTopicRulesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListTopicRulesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListTopicRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTopicRulesCommandInput} for command's `input` shape.
 * @see {@link ListTopicRulesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTopicRulesCommand = /** @class */ (function (_super) {
    __extends(ListTopicRulesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTopicRulesCommand(input) {
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
    ListTopicRulesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListTopicRulesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTopicRulesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListTopicRulesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTopicRulesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListTopicRulesCommand(input, context);
    };
    ListTopicRulesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListTopicRulesCommand(output, context);
    };
    return ListTopicRulesCommand;
}($Command));
export { ListTopicRulesCommand };
//# sourceMappingURL=ListTopicRulesCommand.js.map