import { __extends } from "tslib";
import { UpdateDimensionRequest, UpdateDimensionResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateDimensionCommand, serializeAws_restJson1UpdateDimensionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the definition for a dimension. You
 *       cannot
 *       change the type of a dimension after
 *       it is created (you can delete it and
 *       recreate
 *       it).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateDimensionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateDimensionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateDimensionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDimensionCommandInput} for command's `input` shape.
 * @see {@link UpdateDimensionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDimensionCommand = /** @class */ (function (_super) {
    __extends(UpdateDimensionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDimensionCommand(input) {
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
    UpdateDimensionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateDimensionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDimensionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateDimensionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDimensionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDimensionCommand(input, context);
    };
    UpdateDimensionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDimensionCommand(output, context);
    };
    return UpdateDimensionCommand;
}($Command));
export { UpdateDimensionCommand };
//# sourceMappingURL=UpdateDimensionCommand.js.map