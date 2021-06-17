import { __extends } from "tslib";
import { ListDatasetExportJobsRequest, ListDatasetExportJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDatasetExportJobsCommand, serializeAws_json1_1ListDatasetExportJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of dataset export jobs that use the given dataset. When a dataset is not
 *       specified, all the dataset export jobs associated with the account are listed. The response
 *       provides the properties for each dataset export job, including the Amazon Resource Name (ARN).
 *       For more information on dataset export jobs, see <a>CreateDatasetExportJob</a>. For
 *       more information on datasets, see <a>CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetExportJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetExportJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetExportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetExportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetExportJobsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatasetExportJobsCommand = /** @class */ (function (_super) {
    __extends(ListDatasetExportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetExportJobsCommand(input) {
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
    ListDatasetExportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListDatasetExportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetExportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetExportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetExportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDatasetExportJobsCommand(input, context);
    };
    ListDatasetExportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDatasetExportJobsCommand(output, context);
    };
    return ListDatasetExportJobsCommand;
}($Command));
export { ListDatasetExportJobsCommand };
//# sourceMappingURL=ListDatasetExportJobsCommand.js.map