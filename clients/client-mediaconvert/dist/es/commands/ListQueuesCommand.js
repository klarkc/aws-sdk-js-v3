import { __extends } from "tslib";
import { ListQueuesRequest, ListQueuesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListQueuesCommand, serializeAws_restJson1ListQueuesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieve a JSON array of up to twenty of your queues. This will return the queues themselves, not just a list of them. To retrieve the next twenty queues, use the nextToken string returned with the array.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, ListQueuesCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, ListQueuesCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListQueuesCommand = /** @class */ (function (_super) {
    __extends(ListQueuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListQueuesCommand(input) {
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
    ListQueuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConvertClient";
        var commandName = "ListQueuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListQueuesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListQueuesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListQueuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListQueuesCommand(input, context);
    };
    ListQueuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListQueuesCommand(output, context);
    };
    return ListQueuesCommand;
}($Command));
export { ListQueuesCommand };
//# sourceMappingURL=ListQueuesCommand.js.map