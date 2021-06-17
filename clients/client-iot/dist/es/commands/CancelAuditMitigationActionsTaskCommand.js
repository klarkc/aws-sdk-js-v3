import { __extends } from "tslib";
import { CancelAuditMitigationActionsTaskRequest, CancelAuditMitigationActionsTaskResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelAuditMitigationActionsTaskCommand, serializeAws_restJson1CancelAuditMitigationActionsTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a mitigation action task that is in progress. If the task
 *       is not
 *       in progress, an InvalidRequestException occurs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link CancelAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelAuditMitigationActionsTaskCommand = /** @class */ (function (_super) {
    __extends(CancelAuditMitigationActionsTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelAuditMitigationActionsTaskCommand(input) {
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
    CancelAuditMitigationActionsTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "CancelAuditMitigationActionsTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelAuditMitigationActionsTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelAuditMitigationActionsTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelAuditMitigationActionsTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelAuditMitigationActionsTaskCommand(input, context);
    };
    CancelAuditMitigationActionsTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelAuditMitigationActionsTaskCommand(output, context);
    };
    return CancelAuditMitigationActionsTaskCommand;
}($Command));
export { CancelAuditMitigationActionsTaskCommand };
//# sourceMappingURL=CancelAuditMitigationActionsTaskCommand.js.map