import { __extends } from "tslib";
import { RemoveUserFromGroupRequest } from "../models/models_0";
import { deserializeAws_queryRemoveUserFromGroupCommand, serializeAws_queryRemoveUserFromGroupCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified user from the specified group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveUserFromGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveUserFromGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new RemoveUserFromGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveUserFromGroupCommandInput} for command's `input` shape.
 * @see {@link RemoveUserFromGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveUserFromGroupCommand = /** @class */ (function (_super) {
    __extends(RemoveUserFromGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveUserFromGroupCommand(input) {
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
    RemoveUserFromGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "RemoveUserFromGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveUserFromGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveUserFromGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryRemoveUserFromGroupCommand(input, context);
    };
    RemoveUserFromGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryRemoveUserFromGroupCommand(output, context);
    };
    return RemoveUserFromGroupCommand;
}($Command));
export { RemoveUserFromGroupCommand };
//# sourceMappingURL=RemoveUserFromGroupCommand.js.map