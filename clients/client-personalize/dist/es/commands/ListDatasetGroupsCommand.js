import { __extends } from "tslib";
import { ListDatasetGroupsRequest, ListDatasetGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDatasetGroupsCommand, serializeAws_json1_1ListDatasetGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of dataset groups. The response provides the properties for each dataset
 *       group, including the Amazon Resource Name (ARN). For more information on dataset groups, see
 *         <a>CreateDatasetGroup</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, ListDatasetGroupsCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, ListDatasetGroupsCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * const client = new PersonalizeClient(config);
 * const command = new ListDatasetGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDatasetGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetGroupsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "PersonalizeClient";
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