import { __extends } from "tslib";
import { DescribeJobRequest, DescribeJobResponse } from "../models/models_1";
import { deserializeAws_restJson1DescribeJobCommand, serializeAws_restJson1DescribeJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, DescribeJobCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, DescribeJobCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new DescribeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeJobCommandInput} for command's `input` shape.
 * @see {@link DescribeJobCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeJobCommand = /** @class */ (function (_super) {
    __extends(DescribeJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeJobCommand(input) {
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
    DescribeJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "DescribeJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeJobCommand(input, context);
    };
    DescribeJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeJobCommand(output, context);
    };
    return DescribeJobCommand;
}($Command));
export { DescribeJobCommand };
//# sourceMappingURL=DescribeJobCommand.js.map