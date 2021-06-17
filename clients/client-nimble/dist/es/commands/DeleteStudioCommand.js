import { __extends } from "tslib";
import { DeleteStudioRequest, DeleteStudioResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteStudioCommand, serializeAws_restJson1DeleteStudioCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a studio resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStudioCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStudioCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStudioCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStudioCommand = /** @class */ (function (_super) {
    __extends(DeleteStudioCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStudioCommand(input) {
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
    DeleteStudioCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "DeleteStudioCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStudioRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStudioResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStudioCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteStudioCommand(input, context);
    };
    DeleteStudioCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteStudioCommand(output, context);
    };
    return DeleteStudioCommand;
}($Command));
export { DeleteStudioCommand };
//# sourceMappingURL=DeleteStudioCommand.js.map