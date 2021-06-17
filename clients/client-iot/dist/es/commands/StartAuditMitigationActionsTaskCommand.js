import { __extends } from "tslib";
import { StartAuditMitigationActionsTaskRequest, StartAuditMitigationActionsTaskResponse } from "../models/models_2";
import { deserializeAws_restJson1StartAuditMitigationActionsTaskCommand, serializeAws_restJson1StartAuditMitigationActionsTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a task that applies a set of mitigation actions to the specified target.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StartAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link StartAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartAuditMitigationActionsTaskCommand = /** @class */ (function (_super) {
    __extends(StartAuditMitigationActionsTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartAuditMitigationActionsTaskCommand(input) {
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
    StartAuditMitigationActionsTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "StartAuditMitigationActionsTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartAuditMitigationActionsTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartAuditMitigationActionsTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartAuditMitigationActionsTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartAuditMitigationActionsTaskCommand(input, context);
    };
    StartAuditMitigationActionsTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartAuditMitigationActionsTaskCommand(output, context);
    };
    return StartAuditMitigationActionsTaskCommand;
}($Command));
export { StartAuditMitigationActionsTaskCommand };
//# sourceMappingURL=StartAuditMitigationActionsTaskCommand.js.map