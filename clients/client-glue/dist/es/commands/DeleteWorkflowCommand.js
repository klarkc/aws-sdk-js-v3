import { __extends } from "tslib";
import { DeleteWorkflowRequest, DeleteWorkflowResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteWorkflowCommand, serializeAws_json1_1DeleteWorkflowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteWorkflowCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteWorkflowCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteWorkflowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkflowCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkflowCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWorkflowCommand = /** @class */ (function (_super) {
    __extends(DeleteWorkflowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWorkflowCommand(input) {
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
    DeleteWorkflowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteWorkflowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWorkflowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWorkflowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWorkflowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteWorkflowCommand(input, context);
    };
    DeleteWorkflowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteWorkflowCommand(output, context);
    };
    return DeleteWorkflowCommand;
}($Command));
export { DeleteWorkflowCommand };
//# sourceMappingURL=DeleteWorkflowCommand.js.map