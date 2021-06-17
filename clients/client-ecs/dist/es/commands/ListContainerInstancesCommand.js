import { __extends } from "tslib";
import { ListContainerInstancesRequest, ListContainerInstancesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListContainerInstancesCommand, serializeAws_json1_1ListContainerInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of container instances in a specified cluster. You can filter the
 * 			results of a <code>ListContainerInstances</code> operation with cluster query language
 * 			statements inside the <code>filter</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the
 * 				<i>Amazon Elastic Container Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECSClient, ListContainerInstancesCommand } from "@aws-sdk/client-ecs"; // ES Modules import
 * // const { ECSClient, ListContainerInstancesCommand } = require("@aws-sdk/client-ecs"); // CommonJS import
 * const client = new ECSClient(config);
 * const command = new ListContainerInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListContainerInstancesCommandInput} for command's `input` shape.
 * @see {@link ListContainerInstancesCommandOutput} for command's `response` shape.
 * @see {@link ECSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListContainerInstancesCommand = /** @class */ (function (_super) {
    __extends(ListContainerInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListContainerInstancesCommand(input) {
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
    ListContainerInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECSClient";
        var commandName = "ListContainerInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListContainerInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListContainerInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListContainerInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListContainerInstancesCommand(input, context);
    };
    ListContainerInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListContainerInstancesCommand(output, context);
    };
    return ListContainerInstancesCommand;
}($Command));
export { ListContainerInstancesCommand };
//# sourceMappingURL=ListContainerInstancesCommand.js.map