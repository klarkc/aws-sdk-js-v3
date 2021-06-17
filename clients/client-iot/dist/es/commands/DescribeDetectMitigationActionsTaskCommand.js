import { __extends } from "tslib";
import { DescribeDetectMitigationActionsTaskRequest, DescribeDetectMitigationActionsTaskResponse, } from "../models/models_1";
import { deserializeAws_restJson1DescribeDetectMitigationActionsTaskCommand, serializeAws_restJson1DescribeDetectMitigationActionsTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *       Gets information about a Device Defender ML Detect mitigation action.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeDetectMitigationActionsTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeDetectMitigationActionsTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeDetectMitigationActionsTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDetectMitigationActionsTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeDetectMitigationActionsTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDetectMitigationActionsTaskCommand = /** @class */ (function (_super) {
    __extends(DescribeDetectMitigationActionsTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDetectMitigationActionsTaskCommand(input) {
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
    DescribeDetectMitigationActionsTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeDetectMitigationActionsTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDetectMitigationActionsTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDetectMitigationActionsTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDetectMitigationActionsTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDetectMitigationActionsTaskCommand(input, context);
    };
    DescribeDetectMitigationActionsTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDetectMitigationActionsTaskCommand(output, context);
    };
    return DescribeDetectMitigationActionsTaskCommand;
}($Command));
export { DescribeDetectMitigationActionsTaskCommand };
//# sourceMappingURL=DescribeDetectMitigationActionsTaskCommand.js.map