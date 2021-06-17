import { __extends } from "tslib";
import { ListDetectMitigationActionsTasksRequest, ListDetectMitigationActionsTasksResponse } from "../models/models_1";
import { deserializeAws_restJson1ListDetectMitigationActionsTasksCommand, serializeAws_restJson1ListDetectMitigationActionsTasksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       List of Device Defender ML Detect mitigation actions tasks.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDetectMitigationActionsTasksCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDetectMitigationActionsTasksCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListDetectMitigationActionsTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectMitigationActionsTasksCommandInput} for command's `input` shape.
 * @see {@link ListDetectMitigationActionsTasksCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDetectMitigationActionsTasksCommand = /** @class */ (function (_super) {
    __extends(ListDetectMitigationActionsTasksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDetectMitigationActionsTasksCommand(input) {
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
    ListDetectMitigationActionsTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListDetectMitigationActionsTasksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDetectMitigationActionsTasksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDetectMitigationActionsTasksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDetectMitigationActionsTasksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDetectMitigationActionsTasksCommand(input, context);
    };
    ListDetectMitigationActionsTasksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDetectMitigationActionsTasksCommand(output, context);
    };
    return ListDetectMitigationActionsTasksCommand;
}($Command));
export { ListDetectMitigationActionsTasksCommand };
//# sourceMappingURL=ListDetectMitigationActionsTasksCommand.js.map