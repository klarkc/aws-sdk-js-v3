import { __extends } from "tslib";
import { ListDatasetImportJobsRequest, ListDatasetImportJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDatasetImportJobsCommand, serializeAws_json1_1ListDatasetImportJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of dataset import jobs that use the given dataset. When a dataset is not
 *       specified, all the dataset import jobs associated with the account are listed. The response
 *       provides the properties for each dataset import job, including the Amazon Resource Name (ARN).
 *       For more information on dataset import jobs, see <a>CreateDatasetImportJob</a>. For
 *       more information on datasets, see <a>CreateDataset</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetImportJobsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetImportJobsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetImportJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetImportJobsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetImportJobsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatasetImportJobsCommand = /** @class */ (function (_super) {
    __extends(ListDatasetImportJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetImportJobsCommand(input) {
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
    ListDatasetImportJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PersonalizeClient";
        var commandName = "ListDatasetImportJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetImportJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetImportJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetImportJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDatasetImportJobsCommand(input, context);
    };
    ListDatasetImportJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDatasetImportJobsCommand(output, context);
    };
    return ListDatasetImportJobsCommand;
}($Command));
export { ListDatasetImportJobsCommand };
//# sourceMappingURL=ListDatasetImportJobsCommand.js.map