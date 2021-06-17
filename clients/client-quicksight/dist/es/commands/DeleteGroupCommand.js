import { __extends } from "tslib";
import { DeleteGroupRequest, DeleteGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteGroupCommand, serializeAws_restJson1DeleteGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes a user group from Amazon QuickSight. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DeleteGroupCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DeleteGroupCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new DeleteGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteGroupCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "QuickSightClient";
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
        return serializeAws_restJson1DeleteGroupCommand(input, context);
    };
    DeleteGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteGroupCommand(output, context);
    };
    return DeleteGroupCommand;
}($Command));
export { DeleteGroupCommand };
//# sourceMappingURL=DeleteGroupCommand.js.map