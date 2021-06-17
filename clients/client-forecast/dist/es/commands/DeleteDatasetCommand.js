import { __extends } from "tslib";
import { DeleteDatasetRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteDatasetCommand, serializeAws_json1_1DeleteDatasetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an Amazon Forecast dataset that was created using the <a>CreateDataset</a>
 *       operation. You can only delete datasets that have a status of <code>ACTIVE</code> or
 *         <code>CREATE_FAILED</code>. To get the status use the <a>DescribeDataset</a>
 *       operation.</p>
 *          <note>
 *             <p>Forecast does not automatically update any dataset groups that contain the deleted dataset.
 *         In order to update the dataset group, use the
 *         operation, omitting the deleted dataset's ARN.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteDatasetCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteDatasetCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteDatasetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDatasetCommand = /** @class */ (function (_super) {
    __extends(DeleteDatasetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDatasetCommand(input) {
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
    DeleteDatasetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DeleteDatasetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatasetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatasetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDatasetCommand(input, context);
    };
    DeleteDatasetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDatasetCommand(output, context);
    };
    return DeleteDatasetCommand;
}($Command));
export { DeleteDatasetCommand };
//# sourceMappingURL=DeleteDatasetCommand.js.map