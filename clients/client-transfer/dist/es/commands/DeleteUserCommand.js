import { __extends } from "tslib";
import { DeleteUserRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteUserCommand, serializeAws_json1_1DeleteUserCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the user belonging to a file transfer protocol-enabled server you specify.</p>
 *
 *          <p>No response returns from this operation.</p>
 *
 *          <note>
 *             <p>When you delete a user from a server, the user's information is lost.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DeleteUserCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DeleteUserCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DeleteUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUserCommandInput} for command's `input` shape.
 * @see {@link DeleteUserCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUserCommand = /** @class */ (function (_super) {
    __extends(DeleteUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUserCommand(input) {
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
    DeleteUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "TransferClient";
        var commandName = "DeleteUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteUserCommand(input, context);
    };
    DeleteUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteUserCommand(output, context);
    };
    return DeleteUserCommand;
}($Command));
export { DeleteUserCommand };
//# sourceMappingURL=DeleteUserCommand.js.map