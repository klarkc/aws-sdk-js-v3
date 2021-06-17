import { __extends } from "tslib";
import { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeDatasetCommand, serializeAws_restJson1DescribeDatasetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribeDatasetCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribeDatasetCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DescribeDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDatasetCommand = /** @class */ (function (_super) {
    __extends(DescribeDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDatasetCommand(input) {
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
    DescribeDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "DescribeDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDatasetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeDatasetCommand(input, context);
    };
    DescribeDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeDatasetCommand(output, context);
    };
    return DescribeDatasetCommand;
}($Command));
export { DescribeDatasetCommand };
//# sourceMappingURL=DescribeDatasetCommand.js.map