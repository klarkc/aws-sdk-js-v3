import { __extends } from "tslib";
import { DescribeDatasetGroupRequest, DescribeDatasetGroupResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDatasetGroupCommand, serializeAws_json1_1DescribeDatasetGroupCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a dataset group created using the <a>CreateDatasetGroup</a>
 *       operation.</p>
 *          <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code>
 *       request, this operation includes the following properties:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DatasetArns</code> - The datasets belonging to the group.</p>
 *             </li>
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
 * import { ForecastClient, DescribeDatasetGroupCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeDatasetGroupCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DescribeDatasetGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDatasetGroupCommand = /** @class */ (function (_super) {
    __extends(DescribeDatasetGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDatasetGroupCommand(input) {
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
    DescribeDatasetGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DescribeDatasetGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDatasetGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDatasetGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDatasetGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDatasetGroupCommand(input, context);
    };
    DescribeDatasetGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDatasetGroupCommand(output, context);
    };
    return DescribeDatasetGroupCommand;
}($Command));
export { DescribeDatasetGroupCommand };
//# sourceMappingURL=DescribeDatasetGroupCommand.js.map