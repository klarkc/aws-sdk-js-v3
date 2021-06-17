import { __extends } from "tslib";
import { DescribePipelineRequest, DescribePipelineResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribePipelineCommand, serializeAws_restJson1DescribePipelineCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTAnalyticsClient, DescribePipelineCommand } from "@aws-sdk/client-iotanalytics"; // ES Modules import
 * // const { IoTAnalyticsClient, DescribePipelineCommand } = require("@aws-sdk/client-iotanalytics"); // CommonJS import
 * const client = new IoTAnalyticsClient(config);
 * const command = new DescribePipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePipelineCommandInput} for command's `input` shape.
 * @see {@link DescribePipelineCommandOutput} for command's `response` shape.
 * @see {@link IoTAnalyticsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePipelineCommand = /** @class */ (function (_super) {
    __extends(DescribePipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePipelineCommand(input) {
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
    DescribePipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTAnalyticsClient";
        var commandName = "DescribePipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePipelineRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePipelineResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribePipelineCommand(input, context);
    };
    DescribePipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribePipelineCommand(output, context);
    };
    return DescribePipelineCommand;
}($Command));
export { DescribePipelineCommand };
//# sourceMappingURL=DescribePipelineCommand.js.map