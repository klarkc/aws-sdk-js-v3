import { __extends } from "tslib";
import { ListAuditTasksRequest, ListAuditTasksResponse } from "../models/models_1";
import { deserializeAws_restJson1ListAuditTasksCommand, serializeAws_restJson1ListAuditTasksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Device Defender audits that have been performed during a given
 *           time period.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListAuditTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListAuditTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListAuditTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAuditTasksCommandInput} for command's `input` shape.
 * @see {@link ListAuditTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAuditTasksCommand = /** @class */ (function (_super) {
    __extends(ListAuditTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAuditTasksCommand(input) {
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
    ListAuditTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListAuditTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAuditTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAuditTasksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAuditTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAuditTasksCommand(input, context);
    };
    ListAuditTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAuditTasksCommand(output, context);
    };
    return ListAuditTasksCommand;
}($Command));
export { ListAuditTasksCommand };
//# sourceMappingURL=ListAuditTasksCommand.js.map