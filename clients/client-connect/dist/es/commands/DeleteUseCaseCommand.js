import { __extends } from "tslib";
import { DeleteUseCaseRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteUseCaseCommand, serializeAws_restJson1DeleteUseCaseCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a use case from an AppIntegration association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DeleteUseCaseCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DeleteUseCaseCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const command = new DeleteUseCaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteUseCaseCommandInput} for command's `input` shape.
 * @see {@link DeleteUseCaseCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteUseCaseCommand = /** @class */ (function (_super) {
    __extends(DeleteUseCaseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteUseCaseCommand(input) {
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
    DeleteUseCaseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConnectClient";
        var commandName = "DeleteUseCaseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteUseCaseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteUseCaseCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteUseCaseCommand(input, context);
    };
    DeleteUseCaseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteUseCaseCommand(output, context);
    };
    return DeleteUseCaseCommand;
}($Command));
export { DeleteUseCaseCommand };
//# sourceMappingURL=DeleteUseCaseCommand.js.map