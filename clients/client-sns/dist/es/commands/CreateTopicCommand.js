import { __extends } from "tslib";
import { CreateTopicInput, CreateTopicResponse } from "../models/models_0";
import { deserializeAws_queryCreateTopicCommand, serializeAws_queryCreateTopicCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a topic to which notifications can be published. Users can create at most
 *             100,000 standard topics (at most 1,000 FIFO topics). For more information, see <a href="http://aws.amazon.com/sns/">https://aws.amazon.com/sns</a>. This action is
 *             idempotent, so if the requester already owns a topic with the specified name, that
 *             topic's ARN is returned without creating a new topic.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, CreateTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, CreateTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new CreateTopicCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTopicCommandInput} for command's `input` shape.
 * @see {@link CreateTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTopicCommand = /** @class */ (function (_super) {
    __extends(CreateTopicCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateTopicCommand(input) {
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
    CreateTopicCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "CreateTopicCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateTopicInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateTopicResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateTopicCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateTopicCommand(input, context);
    };
    CreateTopicCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateTopicCommand(output, context);
    };
    return CreateTopicCommand;
}($Command));
export { CreateTopicCommand };
//# sourceMappingURL=CreateTopicCommand.js.map