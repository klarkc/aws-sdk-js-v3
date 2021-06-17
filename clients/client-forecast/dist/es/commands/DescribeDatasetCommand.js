import { __extends } from "tslib";
import { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDatasetCommand, serializeAws_json1_1DescribeDatasetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an Amazon Forecast dataset created using the <a>CreateDataset</a>
 *       operation.</p>
 *          <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request,
 *       this operation includes the following dataset properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>LastModificationTime</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeDatasetCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeDatasetCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "ForecastClient";
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
        return serializeAws_json1_1DescribeDatasetCommand(input, context);
    };
    DescribeDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDatasetCommand(output, context);
    };
    return DescribeDatasetCommand;
}($Command));
export { DescribeDatasetCommand };
//# sourceMappingURL=DescribeDatasetCommand.js.map