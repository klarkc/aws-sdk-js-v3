import { __extends } from "tslib";
import { GetMetricWidgetImageInput, GetMetricWidgetImageOutput } from "../models/models_0";
import { deserializeAws_queryGetMetricWidgetImageCommand, serializeAws_queryGetMetricWidgetImageCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>You can use the <code>GetMetricWidgetImage</code> API to retrieve a snapshot graph of
 * 			one or more Amazon CloudWatch metrics as a bitmap image. You can then embed this
 * 			image into your services and products, such as wiki pages, reports, and documents.
 * 			You could also retrieve images regularly, such as every minute, and create your own
 * 			custom live dashboard.</p>
 *
 * 		       <p>The graph you retrieve can include all CloudWatch metric graph features, including metric math
 * 		and horizontal and vertical annotations.</p>
 *
 * 		       <p>There is a limit of 20 transactions per second for this API. Each <code>GetMetricWidgetImage</code> action has the following limits:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>As many as 100 metrics in the graph.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Up to 100 KB uncompressed payload.</p>
 * 			         </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetMetricWidgetImageCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetMetricWidgetImageCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new GetMetricWidgetImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMetricWidgetImageCommandInput} for command's `input` shape.
 * @see {@link GetMetricWidgetImageCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMetricWidgetImageCommand = /** @class */ (function (_super) {
    __extends(GetMetricWidgetImageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMetricWidgetImageCommand(input) {
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
    GetMetricWidgetImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "GetMetricWidgetImageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMetricWidgetImageInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetMetricWidgetImageOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMetricWidgetImageCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryGetMetricWidgetImageCommand(input, context);
    };
    GetMetricWidgetImageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryGetMetricWidgetImageCommand(output, context);
    };
    return GetMetricWidgetImageCommand;
}($Command));
export { GetMetricWidgetImageCommand };
//# sourceMappingURL=GetMetricWidgetImageCommand.js.map