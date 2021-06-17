import { __extends } from "tslib";
import { DescribeDatasetImportJobRequest, DescribeDatasetImportJobResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDatasetImportJobCommand, serializeAws_json1_1DescribeDatasetImportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a dataset import job created using the <a>CreateDatasetImportJob</a>
 *       operation.</p>
 *          <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code>
 *       request, this operation includes the following properties:</p>
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
 *                   <code>DataSize</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FieldStatistics</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Status</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Message</code> - If an error occurred, information about the error.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeDatasetImportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeDatasetImportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetImportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDatasetImportJobCommand = /** @class */ (function (_super) {
    __extends(DescribeDatasetImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDatasetImportJobCommand(input) {
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
    DescribeDatasetImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DescribeDatasetImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDatasetImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDatasetImportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDatasetImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDatasetImportJobCommand(input, context);
    };
    DescribeDatasetImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDatasetImportJobCommand(output, context);
    };
    return DescribeDatasetImportJobCommand;
}($Command));
export { DescribeDatasetImportJobCommand };
//# sourceMappingURL=DescribeDatasetImportJobCommand.js.map