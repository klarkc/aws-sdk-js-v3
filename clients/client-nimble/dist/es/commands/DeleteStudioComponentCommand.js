import { __extends } from "tslib";
import { DeleteStudioComponentRequest, DeleteStudioComponentResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteStudioComponentCommand, serializeAws_restJson1DeleteStudioComponentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a studio component resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStudioComponentCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStudioComponentCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStudioComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioComponentCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStudioComponentCommand = /** @class */ (function (_super) {
    __extends(DeleteStudioComponentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStudioComponentCommand(input) {
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
    DeleteStudioComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "DeleteStudioComponentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStudioComponentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStudioComponentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStudioComponentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteStudioComponentCommand(input, context);
    };
    DeleteStudioComponentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteStudioComponentCommand(output, context);
    };
    return DeleteStudioComponentCommand;
}($Command));
export { DeleteStudioComponentCommand };
//# sourceMappingURL=DeleteStudioComponentCommand.js.map