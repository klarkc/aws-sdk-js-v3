import { __extends } from "tslib";
import { DescribeAuditMitigationActionsTaskRequest, DescribeAuditMitigationActionsTaskResponse, } from "../models/models_1";
import { deserializeAws_restJson1DescribeAuditMitigationActionsTaskCommand, serializeAws_restJson1DescribeAuditMitigationActionsTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about an audit mitigation task that is used to apply mitigation actions to a set of audit findings. Properties include the actions being applied, the audit checks to which they're being applied, the task status, and aggregated task statistics.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAuditMitigationActionsTaskCommand = /** @class */ (function (_super) {
    __extends(DescribeAuditMitigationActionsTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAuditMitigationActionsTaskCommand(input) {
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
    DescribeAuditMitigationActionsTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeAuditMitigationActionsTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAuditMitigationActionsTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAuditMitigationActionsTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAuditMitigationActionsTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAuditMitigationActionsTaskCommand(input, context);
    };
    DescribeAuditMitigationActionsTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAuditMitigationActionsTaskCommand(output, context);
    };
    return DescribeAuditMitigationActionsTaskCommand;
}($Command));
export { DescribeAuditMitigationActionsTaskCommand };
//# sourceMappingURL=DescribeAuditMitigationActionsTaskCommand.js.map