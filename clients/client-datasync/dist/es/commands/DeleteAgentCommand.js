import { __extends } from "tslib";
import { DeleteAgentRequest, DeleteAgentResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteAgentCommand, serializeAws_json1_1DeleteAgentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an agent. To specify which agent to delete, use the Amazon Resource Name (ARN)
 *       of the agent in your request. The operation disassociates the agent from your AWS account.
 *       However, it doesn't delete the agent virtual machine (VM) from your on-premises
 *       environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataSyncClient, DeleteAgentCommand } from "@aws-sdk/client-datasync"; // ES Modules import
 * // const { DataSyncClient, DeleteAgentCommand } = require("@aws-sdk/client-datasync"); // CommonJS import
 * const client = new DataSyncClient(config);
 * const command = new DeleteAgentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAgentCommandInput} for command's `input` shape.
 * @see {@link DeleteAgentCommandOutput} for command's `response` shape.
 * @see {@link DataSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAgentCommand = /** @class */ (function (_super) {
    __extends(DeleteAgentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAgentCommand(input) {
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
    DeleteAgentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataSyncClient";
        var commandName = "DeleteAgentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAgentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAgentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAgentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAgentCommand(input, context);
    };
    DeleteAgentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAgentCommand(output, context);
    };
    return DeleteAgentCommand;
}($Command));
export { DeleteAgentCommand };
//# sourceMappingURL=DeleteAgentCommand.js.map