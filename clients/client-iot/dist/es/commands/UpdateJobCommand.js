import { __extends } from "tslib";
import { UpdateJobRequest } from "../models/models_2";
import { deserializeAws_restJson1UpdateJobCommand, serializeAws_restJson1UpdateJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates supported fields of the specified job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, UpdateJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, UpdateJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new UpdateJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobCommandInput} for command's `input` shape.
 * @see {@link UpdateJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateJobCommand = /** @class */ (function (_super) {
    __extends(UpdateJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateJobCommand(input) {
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
    UpdateJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "UpdateJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateJobCommand(input, context);
    };
    UpdateJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateJobCommand(output, context);
    };
    return UpdateJobCommand;
}($Command));
export { UpdateJobCommand };
//# sourceMappingURL=UpdateJobCommand.js.map