import { __extends } from "tslib";
import { UpdateStreamRequest, UpdateStreamResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateStreamCommand, serializeAws_restJson1UpdateStreamCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an existing stream. The stream version will be incremented by one.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateStreamCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateStreamCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateStreamCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateStreamCommand = /** @class */ (function (_super) {
    __extends(UpdateStreamCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateStreamCommand(input) {
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
    UpdateStreamCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateStreamCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateStreamRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateStreamResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateStreamCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateStreamCommand(input, context);
    };
    UpdateStreamCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateStreamCommand(output, context);
    };
    return UpdateStreamCommand;
}($Command));
export { UpdateStreamCommand };
//# sourceMappingURL=UpdateStreamCommand.js.map