import { __extends } from "tslib";
import { DeleteTopicRuleRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteTopicRuleCommand, serializeAws_restJson1DeleteTopicRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTopicRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTopicRuleCommand = /** @class */ (function (_super) {
    __extends(DeleteTopicRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTopicRuleCommand(input) {
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
    DeleteTopicRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteTopicRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTopicRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTopicRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteTopicRuleCommand(input, context);
    };
    DeleteTopicRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteTopicRuleCommand(output, context);
    };
    return DeleteTopicRuleCommand;
}($Command));
export { DeleteTopicRuleCommand };
//# sourceMappingURL=DeleteTopicRuleCommand.js.map