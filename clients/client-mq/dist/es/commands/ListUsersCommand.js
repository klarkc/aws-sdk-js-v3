import { __extends } from "tslib";
import { ListUsersRequest, ListUsersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListUsersCommand, serializeAws_restJson1ListUsersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a list of all ActiveMQ users.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MqClient, ListUsersCommand } from "@aws-sdk/client-mq"; // ES Modules import
 * // const { MqClient, ListUsersCommand } = require("@aws-sdk/client-mq"); // CommonJS import
 * const client = new MqClient(config);
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
 * @see {@link MqClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUsersCommand = /** @class */ (function (_super) {
    __extends(ListUsersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUsersCommand(input) {
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
    ListUsersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MqClient";
        var commandName = "ListUsersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUsersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUsersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUsersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListUsersCommand(input, context);
    };
    ListUsersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListUsersCommand(output, context);
    };
    return ListUsersCommand;
}($Command));
export { ListUsersCommand };
//# sourceMappingURL=ListUsersCommand.js.map