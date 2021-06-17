import { __extends } from "tslib";
import { ListDetectMitigationActionsExecutionsRequest, ListDetectMitigationActionsExecutionsResponse, } from "../models/models_1";
import { deserializeAws_restJson1ListDetectMitigationActionsExecutionsCommand, serializeAws_restJson1ListDetectMitigationActionsExecutionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Lists mitigation actions executions for a Device Defender ML Detect Security Profile.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListDetectMitigationActionsExecutionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListDetectMitigationActionsExecutionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListDetectMitigationActionsExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDetectMitigationActionsExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListDetectMitigationActionsExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDetectMitigationActionsExecutionsCommand = /** @class */ (function (_super) {
    __extends(ListDetectMitigationActionsExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDetectMitigationActionsExecutionsCommand(input) {
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
    ListDetectMitigationActionsExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListDetectMitigationActionsExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDetectMitigationActionsExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDetectMitigationActionsExecutionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDetectMitigationActionsExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDetectMitigationActionsExecutionsCommand(input, context);
    };
    ListDetectMitigationActionsExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDetectMitigationActionsExecutionsCommand(output, context);
    };
    return ListDetectMitigationActionsExecutionsCommand;
}($Command));
export { ListDetectMitigationActionsExecutionsCommand };
//# sourceMappingURL=ListDetectMitigationActionsExecutionsCommand.js.map