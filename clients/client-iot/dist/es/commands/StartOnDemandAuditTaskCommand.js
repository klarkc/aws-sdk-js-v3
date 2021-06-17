import { __extends } from "tslib";
import { StartOnDemandAuditTaskRequest, StartOnDemandAuditTaskResponse } from "../models/models_2";
import { deserializeAws_restJson1StartOnDemandAuditTaskCommand, serializeAws_restJson1StartOnDemandAuditTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts an on-demand Device Defender audit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, StartOnDemandAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, StartOnDemandAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new StartOnDemandAuditTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartOnDemandAuditTaskCommandInput} for command's `input` shape.
 * @see {@link StartOnDemandAuditTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartOnDemandAuditTaskCommand = /** @class */ (function (_super) {
    __extends(StartOnDemandAuditTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartOnDemandAuditTaskCommand(input) {
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
    StartOnDemandAuditTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "StartOnDemandAuditTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartOnDemandAuditTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartOnDemandAuditTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartOnDemandAuditTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartOnDemandAuditTaskCommand(input, context);
    };
    StartOnDemandAuditTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartOnDemandAuditTaskCommand(output, context);
    };
    return StartOnDemandAuditTaskCommand;
}($Command));
export { StartOnDemandAuditTaskCommand };
//# sourceMappingURL=StartOnDemandAuditTaskCommand.js.map