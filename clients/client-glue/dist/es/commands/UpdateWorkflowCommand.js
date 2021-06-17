import { __extends } from "tslib";
import { UpdateWorkflowRequest, UpdateWorkflowResponse } from "../models/models_1";
import { deserializeAws_json1_1UpdateWorkflowCommand, serializeAws_json1_1UpdateWorkflowCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateWorkflowCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateWorkflowCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateWorkflowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkflowCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkflowCommand = /** @class */ (function (_super) {
    __extends(UpdateWorkflowCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateWorkflowCommand(input) {
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
    UpdateWorkflowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "UpdateWorkflowCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateWorkflowRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateWorkflowResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateWorkflowCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateWorkflowCommand(input, context);
    };
    UpdateWorkflowCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateWorkflowCommand(output, context);
    };
    return UpdateWorkflowCommand;
}($Command));
export { UpdateWorkflowCommand };
//# sourceMappingURL=UpdateWorkflowCommand.js.map