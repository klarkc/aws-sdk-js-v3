import { __extends } from "tslib";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDatasetGroupsCommand, serializeAws_json1_1ListDatasetGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of dataset groups created using the <a>CreateDatasetGroup</a>
 *       operation. For each dataset group, this operation returns a summary of its properties,
 *       including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by
 *       using the dataset group ARN with the <a>DescribeDatasetGroup</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, ListDatasetGroupsCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, ListDatasetGroupsCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const command = new ListDatasetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGroupsCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDatasetGroupsCommand = /** @class */ (function (_super) {
    __extends(ListDatasetGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDatasetGroupsCommand(input) {
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
    ListDatasetGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ForecastClient";
        var commandName = "ListDatasetGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDatasetGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDatasetGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDatasetGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDatasetGroupsCommand(input, context);
    };
    ListDatasetGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDatasetGroupsCommand(output, context);
    };
    return ListDatasetGroupsCommand;
}($Command));
export { ListDatasetGroupsCommand };
//# sourceMappingURL=ListDatasetGroupsCommand.js.map