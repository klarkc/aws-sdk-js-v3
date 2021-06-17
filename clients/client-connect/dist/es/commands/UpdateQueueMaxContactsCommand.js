import { __extends } from "tslib";
import { UpdateQueueMaxContactsRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateQueueMaxContactsCommand, serializeAws_restJson1UpdateQueueMaxContactsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is in preview release for Amazon Connect and is subject to change.</p>
 *          <p>Updates the maximum number of contacts allowed in a queue before it is considered
 *    full.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateQueueMaxContactsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateQueueMaxContactsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new UpdateQueueMaxContactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateQueueMaxContactsCommandInput} for command's `input` shape.
 * @see {@link UpdateQueueMaxContactsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateQueueMaxContactsCommand = /** @class */ (function (_super) {
    __extends(UpdateQueueMaxContactsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateQueueMaxContactsCommand(input) {
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
    UpdateQueueMaxContactsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "UpdateQueueMaxContactsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateQueueMaxContactsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateQueueMaxContactsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateQueueMaxContactsCommand(input, context);
    };
    UpdateQueueMaxContactsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateQueueMaxContactsCommand(output, context);
    };
    return UpdateQueueMaxContactsCommand;
}($Command));
export { UpdateQueueMaxContactsCommand };
//# sourceMappingURL=UpdateQueueMaxContactsCommand.js.map