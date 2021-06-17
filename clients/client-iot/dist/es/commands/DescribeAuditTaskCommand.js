import { __extends } from "tslib";
import { DescribeAuditTaskRequest, DescribeAuditTaskResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeAuditTaskCommand, serializeAws_restJson1DescribeAuditTaskCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a Device Defender audit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeAuditTaskCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeAuditTaskCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeAuditTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAuditTaskCommandInput} for command's `input` shape.
 * @see {@link DescribeAuditTaskCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAuditTaskCommand = /** @class */ (function (_super) {
    __extends(DescribeAuditTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAuditTaskCommand(input) {
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
    DescribeAuditTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeAuditTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAuditTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAuditTaskResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAuditTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAuditTaskCommand(input, context);
    };
    DescribeAuditTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAuditTaskCommand(output, context);
    };
    return DescribeAuditTaskCommand;
}($Command));
export { DescribeAuditTaskCommand };
//# sourceMappingURL=DescribeAuditTaskCommand.js.map