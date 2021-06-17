import { __extends } from "tslib";
import { ListDataSourceSyncJobsRequest, ListDataSourceSyncJobsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDataSourceSyncJobsCommand, serializeAws_json1_1ListDataSourceSyncJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets statistics about synchronizing Amazon Kendra with a data
 *       source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListDataSourceSyncJobsCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListDataSourceSyncJobsCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListDataSourceSyncJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSourceSyncJobsCommandInput} for command's `input` shape.
 * @see {@link ListDataSourceSyncJobsCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDataSourceSyncJobsCommand = /** @class */ (function (_super) {
    __extends(ListDataSourceSyncJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDataSourceSyncJobsCommand(input) {
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
    ListDataSourceSyncJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "ListDataSourceSyncJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDataSourceSyncJobsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDataSourceSyncJobsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDataSourceSyncJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDataSourceSyncJobsCommand(input, context);
    };
    ListDataSourceSyncJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDataSourceSyncJobsCommand(output, context);
    };
    return ListDataSourceSyncJobsCommand;
}($Command));
export { ListDataSourceSyncJobsCommand };
//# sourceMappingURL=ListDataSourceSyncJobsCommand.js.map