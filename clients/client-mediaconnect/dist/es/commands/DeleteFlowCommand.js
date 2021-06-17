import { __extends } from "tslib";
import { DeleteFlowRequest, DeleteFlowResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteFlowCommand, serializeAws_restJson1DeleteFlowCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Deletes a flow. Before you can delete a flow, you must stop the flow.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DeleteFlowCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DeleteFlowCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const command = new DeleteFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFlowCommandInput} for command's `input` shape.
 * @see {@link DeleteFlowCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFlowCommand = /** @class */ (function (_super) {
    __extends(DeleteFlowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFlowCommand(input) {
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
    DeleteFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaConnectClient";
        var commandName = "DeleteFlowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFlowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFlowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFlowCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFlowCommand(input, context);
    };
    DeleteFlowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFlowCommand(output, context);
    };
    return DeleteFlowCommand;
}($Command));
export { DeleteFlowCommand };
//# sourceMappingURL=DeleteFlowCommand.js.map