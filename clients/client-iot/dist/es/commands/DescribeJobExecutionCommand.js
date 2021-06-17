import { __extends } from "tslib";
import { DescribeJobExecutionRequest, DescribeJobExecutionResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeJobExecutionCommand, serializeAws_restJson1DescribeJobExecutionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a job execution.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeJobExecutionCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeJobExecutionCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeJobExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobExecutionCommandInput} for command's `input` shape.
 * @see {@link DescribeJobExecutionCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJobExecutionCommand = /** @class */ (function (_super) {
    __extends(DescribeJobExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeJobExecutionCommand(input) {
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
    DescribeJobExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeJobExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeJobExecutionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeJobExecutionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeJobExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeJobExecutionCommand(input, context);
    };
    DescribeJobExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeJobExecutionCommand(output, context);
    };
    return DescribeJobExecutionCommand;
}($Command));
export { DescribeJobExecutionCommand };
//# sourceMappingURL=DescribeJobExecutionCommand.js.map