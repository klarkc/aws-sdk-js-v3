import { __extends } from "tslib";
import { ListAggregateDiscoveredResourcesRequest, ListAggregateDiscoveredResourcesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand, serializeAws_json1_1ListAggregateDiscoveredResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a resource type and returns a list of resource identifiers that are aggregated for a specific resource type across accounts and regions.
 * 			A resource identifier includes the resource type, ID, (if available) the custom resource name, source account, and source region.
 * 			You can narrow the results to include only resources that have specific resource IDs, or a resource name, or source account ID, or source region.</p>
 * 			      <p>For example, if the input consists of accountID 12345678910 and the region is us-east-1 for resource type <code>AWS::EC2::Instance</code> then the API returns all the EC2 instance identifiers of accountID 12345678910 and region us-east-1.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListAggregateDiscoveredResourcesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListAggregateDiscoveredResourcesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListAggregateDiscoveredResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAggregateDiscoveredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAggregateDiscoveredResourcesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAggregateDiscoveredResourcesCommand = /** @class */ (function (_super) {
    __extends(ListAggregateDiscoveredResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAggregateDiscoveredResourcesCommand(input) {
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
    ListAggregateDiscoveredResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "ListAggregateDiscoveredResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAggregateDiscoveredResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAggregateDiscoveredResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAggregateDiscoveredResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAggregateDiscoveredResourcesCommand(input, context);
    };
    ListAggregateDiscoveredResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAggregateDiscoveredResourcesCommand(output, context);
    };
    return ListAggregateDiscoveredResourcesCommand;
}($Command));
export { ListAggregateDiscoveredResourcesCommand };
//# sourceMappingURL=ListAggregateDiscoveredResourcesCommand.js.map