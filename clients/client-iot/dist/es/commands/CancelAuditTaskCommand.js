import { __extends } from "tslib";
import { CancelAuditTaskRequest, CancelAuditTaskResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelAuditTaskCommand, serializeAws_restJson1CancelAuditTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels an audit that is in progress. The audit can be either scheduled or on demand. If the audit isn't in progress, an "InvalidRequestException" occurs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelAuditTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelAuditTaskCommandInput} for command's `input` shape.
 * @see {@link CancelAuditTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelAuditTaskCommand = /** @class */ (function (_super) {
    __extends(CancelAuditTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelAuditTaskCommand(input) {
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
    CancelAuditTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CancelAuditTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelAuditTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelAuditTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelAuditTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelAuditTaskCommand(input, context);
    };
    CancelAuditTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelAuditTaskCommand(output, context);
    };
    return CancelAuditTaskCommand;
}($Command));
export { CancelAuditTaskCommand };
//# sourceMappingURL=CancelAuditTaskCommand.js.map