import { __extends } from "tslib";
import { DeleteMailboxPermissionsRequest, DeleteMailboxPermissionsResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteMailboxPermissionsCommand, serializeAws_json1_1DeleteMailboxPermissionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes permissions granted to a member (user or group).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteMailboxPermissionsCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteMailboxPermissionsCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeleteMailboxPermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMailboxPermissionsCommandInput} for command's `input` shape.
 * @see {@link DeleteMailboxPermissionsCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMailboxPermissionsCommand = /** @class */ (function (_super) {
    __extends(DeleteMailboxPermissionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMailboxPermissionsCommand(input) {
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
    DeleteMailboxPermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkMailClient";
        var commandName = "DeleteMailboxPermissionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMailboxPermissionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMailboxPermissionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMailboxPermissionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMailboxPermissionsCommand(input, context);
    };
    DeleteMailboxPermissionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMailboxPermissionsCommand(output, context);
    };
    return DeleteMailboxPermissionsCommand;
}($Command));
export { DeleteMailboxPermissionsCommand };
//# sourceMappingURL=DeleteMailboxPermissionsCommand.js.map