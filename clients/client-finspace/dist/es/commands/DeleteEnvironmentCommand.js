import { __extends } from "tslib";
import { DeleteEnvironmentRequest, DeleteEnvironmentResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteEnvironmentCommand, serializeAws_restJson1DeleteEnvironmentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete an FinSpace environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, DeleteEnvironmentCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, DeleteEnvironmentCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const command = new DeleteEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEnvironmentCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEnvironmentCommand = /** @class */ (function (_super) {
    __extends(DeleteEnvironmentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEnvironmentCommand(input) {
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
    DeleteEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FinspaceClient";
        var commandName = "DeleteEnvironmentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEnvironmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteEnvironmentResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEnvironmentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteEnvironmentCommand(input, context);
    };
    DeleteEnvironmentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteEnvironmentCommand(output, context);
    };
    return DeleteEnvironmentCommand;
}($Command));
export { DeleteEnvironmentCommand };
//# sourceMappingURL=DeleteEnvironmentCommand.js.map