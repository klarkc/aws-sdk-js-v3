import { __extends } from "tslib";
import { ListAuditMitigationActionsTasksRequest, ListAuditMitigationActionsTasksResponse } from "../models/models_1";
import { deserializeAws_restJson1ListAuditMitigationActionsTasksCommand, serializeAws_restJson1ListAuditMitigationActionsTasksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of audit mitigation action tasks that match the specified filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditMitigationActionsTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditMitigationActionsTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditMitigationActionsTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditMitigationActionsTasksCommandInput} for command's `input` shape.
 * @see {@link ListAuditMitigationActionsTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAuditMitigationActionsTasksCommand = /** @class */ (function (_super) {
    __extends(ListAuditMitigationActionsTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAuditMitigationActionsTasksCommand(input) {
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
    ListAuditMitigationActionsTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListAuditMitigationActionsTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAuditMitigationActionsTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAuditMitigationActionsTasksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAuditMitigationActionsTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAuditMitigationActionsTasksCommand(input, context);
    };
    ListAuditMitigationActionsTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAuditMitigationActionsTasksCommand(output, context);
    };
    return ListAuditMitigationActionsTasksCommand;
}($Command));
export { ListAuditMitigationActionsTasksCommand };
//# sourceMappingURL=ListAuditMitigationActionsTasksCommand.js.map