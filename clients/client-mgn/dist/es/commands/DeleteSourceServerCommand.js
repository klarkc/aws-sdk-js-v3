import { __extends } from "tslib";
import { DeleteSourceServerRequest, DeleteSourceServerResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSourceServerCommand, serializeAws_restJson1DeleteSourceServerCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a single source server by ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, DeleteSourceServerCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, DeleteSourceServerCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const command = new DeleteSourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSourceServerCommandInput} for command's `input` shape.
 * @see {@link DeleteSourceServerCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSourceServerCommand = /** @class */ (function (_super) {
    __extends(DeleteSourceServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSourceServerCommand(input) {
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
    DeleteSourceServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MgnClient";
        var commandName = "DeleteSourceServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSourceServerRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSourceServerResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSourceServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSourceServerCommand(input, context);
    };
    DeleteSourceServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSourceServerCommand(output, context);
    };
    return DeleteSourceServerCommand;
}($Command));
export { DeleteSourceServerCommand };
//# sourceMappingURL=DeleteSourceServerCommand.js.map