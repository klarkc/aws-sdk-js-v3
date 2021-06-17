import { __extends } from "tslib";
import { AddUserToGroupRequest } from "../models/models_0";
import { deserializeAws_queryAddUserToGroupCommand, serializeAws_queryAddUserToGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds the specified user to the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, AddUserToGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, AddUserToGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new AddUserToGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddUserToGroupCommandInput} for command's `input` shape.
 * @see {@link AddUserToGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddUserToGroupCommand = /** @class */ (function (_super) {
    __extends(AddUserToGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddUserToGroupCommand(input) {
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
    AddUserToGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "AddUserToGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddUserToGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddUserToGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryAddUserToGroupCommand(input, context);
    };
    AddUserToGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryAddUserToGroupCommand(output, context);
    };
    return AddUserToGroupCommand;
}($Command));
export { AddUserToGroupCommand };
//# sourceMappingURL=AddUserToGroupCommand.js.map