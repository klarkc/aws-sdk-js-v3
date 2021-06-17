import { __extends } from "tslib";
import { DeleteAppRequest, DeleteAppResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteAppCommand, serializeAws_restJson1DeleteAppCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteAppCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteAppCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppCommand = /** @class */ (function (_super) {
    __extends(DeleteAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAppCommand(input) {
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
    DeleteAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "DeleteAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteAppCommand(input, context);
    };
    DeleteAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteAppCommand(output, context);
    };
    return DeleteAppCommand;
}($Command));
export { DeleteAppCommand };
//# sourceMappingURL=DeleteAppCommand.js.map