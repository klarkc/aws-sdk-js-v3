import { __extends } from "tslib";
import { DeleteGroupRequest, DeleteGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteGroupCommand, serializeAws_json1_1DeleteGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a group from Amazon WorkMail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, DeleteGroupCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, DeleteGroupCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new DeleteGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "WorkMailClient";
        var commandName = "DeleteGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteGroupCommand(input, context);
    };
    DeleteGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteGroupCommand(output, context);
    };
    return DeleteGroupCommand;
}($Command));
export { DeleteGroupCommand };
//# sourceMappingURL=DeleteGroupCommand.js.map