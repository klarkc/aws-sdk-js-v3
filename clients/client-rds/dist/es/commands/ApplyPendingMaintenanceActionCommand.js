import { __extends } from "tslib";
import { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult } from "../models/models_0";
import { deserializeAws_queryApplyPendingMaintenanceActionCommand, serializeAws_queryApplyPendingMaintenanceActionCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Applies a pending maintenance action to a resource (for example, to a DB instance).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ApplyPendingMaintenanceActionCommand = /** @class */ (function (_super) {
    __extends(ApplyPendingMaintenanceActionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ApplyPendingMaintenanceActionCommand(input) {
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
    ApplyPendingMaintenanceActionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "ApplyPendingMaintenanceActionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ApplyPendingMaintenanceActionMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ApplyPendingMaintenanceActionResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ApplyPendingMaintenanceActionCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryApplyPendingMaintenanceActionCommand(input, context);
    };
    ApplyPendingMaintenanceActionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryApplyPendingMaintenanceActionCommand(output, context);
    };
    return ApplyPendingMaintenanceActionCommand;
}($Command));
export { ApplyPendingMaintenanceActionCommand };
//# sourceMappingURL=ApplyPendingMaintenanceActionCommand.js.map