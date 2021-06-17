import { __extends } from "tslib";
import { DeleteDimensionRequest, DeleteDimensionResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteDimensionCommand, serializeAws_restJson1DeleteDimensionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified dimension from your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteDimensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDimensionCommandInput} for command's `input` shape.
 * @see {@link DeleteDimensionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDimensionCommand = /** @class */ (function (_super) {
    __extends(DeleteDimensionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDimensionCommand(input) {
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
    DeleteDimensionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteDimensionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDimensionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDimensionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDimensionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDimensionCommand(input, context);
    };
    DeleteDimensionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDimensionCommand(output, context);
    };
    return DeleteDimensionCommand;
}($Command));
export { DeleteDimensionCommand };
//# sourceMappingURL=DeleteDimensionCommand.js.map