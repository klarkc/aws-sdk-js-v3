import { __extends } from "tslib";
import { DeleteWorkloadShareInput } from "../models/models_0";
import { deserializeAws_restJson1DeleteWorkloadShareCommand, serializeAws_restJson1DeleteWorkloadShareCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a workload share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, DeleteWorkloadShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, DeleteWorkloadShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new DeleteWorkloadShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkloadShareCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkloadShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWorkloadShareCommand = /** @class */ (function (_super) {
    __extends(DeleteWorkloadShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWorkloadShareCommand(input) {
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
    DeleteWorkloadShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WellArchitectedClient";
        var commandName = "DeleteWorkloadShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWorkloadShareInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWorkloadShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteWorkloadShareCommand(input, context);
    };
    DeleteWorkloadShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteWorkloadShareCommand(output, context);
    };
    return DeleteWorkloadShareCommand;
}($Command));
export { DeleteWorkloadShareCommand };
//# sourceMappingURL=DeleteWorkloadShareCommand.js.map