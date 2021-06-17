import { __extends } from "tslib";
import { UpdateCustomMetricRequest, UpdateCustomMetricResponse } from "../models/models_2";
import { deserializeAws_restJson1UpdateCustomMetricCommand, serializeAws_restJson1UpdateCustomMetricCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a
 *       Device Defender detect custom metric. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateCustomMetricCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateCustomMetricCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateCustomMetricCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomMetricCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomMetricCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateCustomMetricCommand = /** @class */ (function (_super) {
    __extends(UpdateCustomMetricCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateCustomMetricCommand(input) {
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
    UpdateCustomMetricCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateCustomMetricCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateCustomMetricRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateCustomMetricResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateCustomMetricCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateCustomMetricCommand(input, context);
    };
    UpdateCustomMetricCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateCustomMetricCommand(output, context);
    };
    return UpdateCustomMetricCommand;
}($Command));
export { UpdateCustomMetricCommand };
//# sourceMappingURL=UpdateCustomMetricCommand.js.map