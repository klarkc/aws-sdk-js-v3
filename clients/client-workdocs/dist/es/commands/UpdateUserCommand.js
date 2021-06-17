import { __extends } from "tslib";
import { UpdateUserRequest, UpdateUserResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateUserCommand, serializeAws_restJson1UpdateUserCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified attributes of the specified user, and grants or revokes
 *             administrative privileges to the Amazon WorkDocs site.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateUserCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateUserCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new UpdateUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateUserCommandInput} for command's `input` shape.
 * @see {@link UpdateUserCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateUserCommand = /** @class */ (function (_super) {
    __extends(UpdateUserCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateUserCommand(input) {
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
    UpdateUserCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "UpdateUserCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateUserRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateUserResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateUserCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateUserCommand(input, context);
    };
    UpdateUserCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateUserCommand(output, context);
    };
    return UpdateUserCommand;
}($Command));
export { UpdateUserCommand };
//# sourceMappingURL=UpdateUserCommand.js.map