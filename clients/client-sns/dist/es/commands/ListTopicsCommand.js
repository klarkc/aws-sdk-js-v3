import { __extends } from "tslib";
import { ListTopicsInput, ListTopicsResponse } from "../models/models_0";
import { deserializeAws_queryListTopicsCommand, serializeAws_queryListTopicsCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the requester's topics. Each call returns a limited list of topics,
 *             up to 100. If there are more topics, a <code>NextToken</code> is also returned. Use the
 *                 <code>NextToken</code> parameter in a new <code>ListTopics</code> call to get
 *             further results.</p>
 *         <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListTopicsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListTopicsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ListTopicsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTopicsCommandInput} for command's `input` shape.
 * @see {@link ListTopicsCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTopicsCommand = /** @class */ (function (_super) {
    __extends(ListTopicsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTopicsCommand(input) {
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
    ListTopicsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "ListTopicsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTopicsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListTopicsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTopicsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryListTopicsCommand(input, context);
    };
    ListTopicsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryListTopicsCommand(output, context);
    };
    return ListTopicsCommand;
}($Command));
export { ListTopicsCommand };
//# sourceMappingURL=ListTopicsCommand.js.map