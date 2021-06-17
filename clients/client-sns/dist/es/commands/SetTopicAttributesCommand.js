import { __extends } from "tslib";
import { SetTopicAttributesInput } from "../models/models_0";
import { deserializeAws_querySetTopicAttributesCommand, serializeAws_querySetTopicAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows a topic owner to set an attribute of the topic to a new value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetTopicAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetTopicAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetTopicAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetTopicAttributesCommandInput} for command's `input` shape.
 * @see {@link SetTopicAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetTopicAttributesCommand = /** @class */ (function (_super) {
    __extends(SetTopicAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetTopicAttributesCommand(input) {
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
    SetTopicAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "SetTopicAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetTopicAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetTopicAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetTopicAttributesCommand(input, context);
    };
    SetTopicAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetTopicAttributesCommand(output, context);
    };
    return SetTopicAttributesCommand;
}($Command));
export { SetTopicAttributesCommand };
//# sourceMappingURL=SetTopicAttributesCommand.js.map