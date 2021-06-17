import { __extends } from "tslib";
import { DescribePendingMaintenanceActionsMessage, PendingMaintenanceActionsMessage } from "../models/models_1";
import { deserializeAws_queryDescribePendingMaintenanceActionsCommand, serializeAws_queryDescribePendingMaintenanceActionsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of resources (for example, DB instances) that have at least one pending maintenance action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribePendingMaintenanceActionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribePendingMaintenanceActionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribePendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePendingMaintenanceActionsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingMaintenanceActionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePendingMaintenanceActionsCommand = /** @class */ (function (_super) {
    __extends(DescribePendingMaintenanceActionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePendingMaintenanceActionsCommand(input) {
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
    DescribePendingMaintenanceActionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribePendingMaintenanceActionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePendingMaintenanceActionsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PendingMaintenanceActionsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePendingMaintenanceActionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribePendingMaintenanceActionsCommand(input, context);
    };
    DescribePendingMaintenanceActionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribePendingMaintenanceActionsCommand(output, context);
    };
    return DescribePendingMaintenanceActionsCommand;
}($Command));
export { DescribePendingMaintenanceActionsCommand };
//# sourceMappingURL=DescribePendingMaintenanceActionsCommand.js.map