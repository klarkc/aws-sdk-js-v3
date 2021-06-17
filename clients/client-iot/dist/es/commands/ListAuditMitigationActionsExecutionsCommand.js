import { __extends } from "tslib";
import { ListAuditMitigationActionsExecutionsRequest, ListAuditMitigationActionsExecutionsResponse, } from "../models/models_1";
import { deserializeAws_restJson1ListAuditMitigationActionsExecutionsCommand, serializeAws_restJson1ListAuditMitigationActionsExecutionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the status of audit mitigation action tasks that were
 *       executed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditMitigationActionsExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditMitigationActionsExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditMitigationActionsExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditMitigationActionsExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListAuditMitigationActionsExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAuditMitigationActionsExecutionsCommand = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAuditMitigationActionsExecutionsCommand(input) {
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
    ListAuditMitigationActionsExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListAuditMitigationActionsExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAuditMitigationActionsExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAuditMitigationActionsExecutionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAuditMitigationActionsExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAuditMitigationActionsExecutionsCommand(input, context);
    };
    ListAuditMitigationActionsExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAuditMitigationActionsExecutionsCommand(output, context);
    };
    return ListAuditMitigationActionsExecutionsCommand;
}($Command));
export { ListAuditMitigationActionsExecutionsCommand };
//# sourceMappingURL=ListAuditMitigationActionsExecutionsCommand.js.map