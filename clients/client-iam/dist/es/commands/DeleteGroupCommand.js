import { __extends } from "tslib";
import { DeleteGroupRequest } from "../models/models_0";
import { deserializeAws_queryDeleteGroupCommand, serializeAws_queryDeleteGroupCommand } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified IAM group. The group must not contain any users or have any
 *             attached policies.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGroupCommand = /** @class */ (function (_super) {
    __extends(DeleteGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGroupCommand(input) {
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
    DeleteGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IAMClient";
        var commandName = "DeleteGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteGroupCommand(input, context);
    };
    DeleteGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteGroupCommand(output, context);
    };
    return DeleteGroupCommand;
}($Command));
export { DeleteGroupCommand };
//# sourceMappingURL=DeleteGroupCommand.js.map