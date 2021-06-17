import { __extends } from "tslib";
import { CreateTopicRuleRequest } from "../models/models_0";
import { deserializeAws_restJson1CreateTopicRuleCommand, serializeAws_restJson1CreateTopicRuleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a rule. Creating rules is an administrator-level action. Any user who has
 *          permission to create rules will be able to access data processed by the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateTopicRuleCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateTopicRuleCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateTopicRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTopicRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTopicRuleCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTopicRuleCommand = /** @class */ (function (_super) {
    __extends(CreateTopicRuleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTopicRuleCommand(input) {
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
    CreateTopicRuleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CreateTopicRuleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTopicRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTopicRuleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateTopicRuleCommand(input, context);
    };
    CreateTopicRuleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateTopicRuleCommand(output, context);
    };
    return CreateTopicRuleCommand;
}($Command));
export { CreateTopicRuleCommand };
//# sourceMappingURL=CreateTopicRuleCommand.js.map