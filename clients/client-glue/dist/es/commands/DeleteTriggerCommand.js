import { __extends } from "tslib";
import { DeleteTriggerRequest, DeleteTriggerResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteTriggerCommand, serializeAws_json1_1DeleteTriggerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified trigger. If the trigger is not found, no
 *       exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new DeleteTriggerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTriggerCommandInput} for command's `input` shape.
 * @see {@link DeleteTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTriggerCommand = /** @class */ (function (_super) {
    __extends(DeleteTriggerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTriggerCommand(input) {
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
    DeleteTriggerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlueClient";
        var commandName = "DeleteTriggerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTriggerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTriggerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTriggerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTriggerCommand(input, context);
    };
    DeleteTriggerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTriggerCommand(output, context);
    };
    return DeleteTriggerCommand;
}($Command));
export { DeleteTriggerCommand };
//# sourceMappingURL=DeleteTriggerCommand.js.map