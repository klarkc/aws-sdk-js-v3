import { __extends } from "tslib";
import { DeleteDatasetImportJobRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteDatasetImportJobCommand, serializeAws_json1_1DeleteDatasetImportJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a dataset import job created using the <a>CreateDatasetImportJob</a>
 *       operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code>
 *       or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeDatasetImportJob</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DeleteDatasetImportJobCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DeleteDatasetImportJobCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new DeleteDatasetImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDatasetImportJobCommandInput} for command's `input` shape.
 * @see {@link DeleteDatasetImportJobCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDatasetImportJobCommand = /** @class */ (function (_super) {
    __extends(DeleteDatasetImportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDatasetImportJobCommand(input) {
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
    DeleteDatasetImportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "DeleteDatasetImportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDatasetImportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDatasetImportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDatasetImportJobCommand(input, context);
    };
    DeleteDatasetImportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDatasetImportJobCommand(output, context);
    };
    return DeleteDatasetImportJobCommand;
}($Command));
export { DeleteDatasetImportJobCommand };
//# sourceMappingURL=DeleteDatasetImportJobCommand.js.map