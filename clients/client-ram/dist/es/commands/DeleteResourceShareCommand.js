import { __extends } from "tslib";
import { DeleteResourceShareRequest, DeleteResourceShareResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteResourceShareCommand, serializeAws_restJson1DeleteResourceShareCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified resource share.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RAMClient, DeleteResourceShareCommand } from "@aws-sdk/client-ram"; // ES Modules import
 * // const { RAMClient, DeleteResourceShareCommand } = require("@aws-sdk/client-ram"); // CommonJS import
 * const client = new RAMClient(config);
 * const command = new DeleteResourceShareCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourceShareCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceShareCommandOutput} for command's `response` shape.
 * @see {@link RAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourceShareCommand = /** @class */ (function (_super) {
    __extends(DeleteResourceShareCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourceShareCommand(input) {
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
    DeleteResourceShareCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RAMClient";
        var commandName = "DeleteResourceShareCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourceShareRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResourceShareResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourceShareCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteResourceShareCommand(input, context);
    };
    DeleteResourceShareCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteResourceShareCommand(output, context);
    };
    return DeleteResourceShareCommand;
}($Command));
export { DeleteResourceShareCommand };
//# sourceMappingURL=DeleteResourceShareCommand.js.map