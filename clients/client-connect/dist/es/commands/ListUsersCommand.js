import { __extends } from "tslib";
import { ListUsersRequest, ListUsersResponse } from "../models/models_0";
import { deserializeAws_restJson1ListUsersCommand, serializeAws_restJson1ListUsersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides summary information about the users for the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListUsersCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListUsersCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ConnectClient";
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