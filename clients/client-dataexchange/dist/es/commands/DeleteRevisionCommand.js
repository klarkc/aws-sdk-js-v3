import { __extends } from "tslib";
import { DeleteRevisionRequest } from "../models/models_0";
import { deserializeAws_restJson1DeleteRevisionCommand, serializeAws_restJson1DeleteRevisionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation deletes a revision.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, DeleteRevisionCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, DeleteRevisionCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new DeleteRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRevisionCommandInput} for command's `input` shape.
 * @see {@link DeleteRevisionCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRevisionCommand = /** @class */ (function (_super) {
    __extends(DeleteRevisionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRevisionCommand(input) {
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
    DeleteRevisionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "DeleteRevisionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRevisionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRevisionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRevisionCommand(input, context);
    };
    DeleteRevisionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRevisionCommand(output, context);
    };
    return DeleteRevisionCommand;
}($Command));
export { DeleteRevisionCommand };
//# sourceMappingURL=DeleteRevisionCommand.js.map