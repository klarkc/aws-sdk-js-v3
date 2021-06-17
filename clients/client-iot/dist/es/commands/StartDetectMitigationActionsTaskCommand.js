import { __extends } from "tslib";
import { StartDetectMitigationActionsTaskRequest, StartDetectMitigationActionsTaskResponse } from "../models/models_2";
import { deserializeAws_restJson1StartDetectMitigationActionsTaskCommand, serializeAws_restJson1StartDetectMitigationActionsTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Starts a Device Defender ML Detect mitigation actions task.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartDetectMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartDetectMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StartDetectMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDetectMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link StartDetectMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDetectMitigationActionsTaskCommand = /** @class */ (function (_super) {
    __extends(StartDetectMitigationActionsTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartDetectMitigationActionsTaskCommand(input) {
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
    StartDetectMitigationActionsTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "StartDetectMitigationActionsTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartDetectMitigationActionsTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartDetectMitigationActionsTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartDetectMitigationActionsTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartDetectMitigationActionsTaskCommand(input, context);
    };
    StartDetectMitigationActionsTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartDetectMitigationActionsTaskCommand(output, context);
    };
    return StartDetectMitigationActionsTaskCommand;
}($Command));
export { StartDetectMitigationActionsTaskCommand };
//# sourceMappingURL=StartDetectMitigationActionsTaskCommand.js.map