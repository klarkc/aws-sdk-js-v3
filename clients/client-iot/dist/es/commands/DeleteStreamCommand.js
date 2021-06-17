import { __extends } from "tslib";
import { DeleteStreamRequest, DeleteStreamResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteStreamCommand, serializeAws_restJson1DeleteStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DeleteStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DeleteStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DeleteStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStreamCommand = /** @class */ (function (_super) {
    __extends(DeleteStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStreamCommand(input) {
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
    DeleteStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DeleteStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteStreamCommand(input, context);
    };
    DeleteStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteStreamCommand(output, context);
    };
    return DeleteStreamCommand;
}($Command));
export { DeleteStreamCommand };
//# sourceMappingURL=DeleteStreamCommand.js.map