import { __extends } from "tslib";
import { ListDiscoveredResourcesRequest, ListDiscoveredResourcesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDiscoveredResourcesCommand, serializeAws_json1_1ListDiscoveredResourcesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Accepts a resource type and returns a list of resource
 * 			identifiers for the resources of that type. A resource identifier
 * 			includes the resource type, ID, and (if available) the custom
 * 			resource name. The results consist of resources that AWS Config has
 * 			discovered, including those that AWS Config is not currently
 * 			recording. You can narrow the results to include only resources that
 * 			have specific resource IDs or a resource name.</p>
 * 		       <note>
 * 			         <p>You can specify either resource IDs or a resource name, but
 * 				not both, in the same request.</p>
 * 		       </note>
 * 		       <p>The response is paginated. By default, AWS Config lists 100
 * 			resource identifiers on each page. You can customize this number
 * 			with the <code>limit</code> parameter. The response includes a
 * 				<code>nextToken</code> string. To get the next page of results,
 * 			run the request again and specify the string for the
 * 				<code>nextToken</code> parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, ListDiscoveredResourcesCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, ListDiscoveredResourcesCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new ListDiscoveredResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDiscoveredResourcesCommandInput} for command's `input` shape.
 * @see {@link ListDiscoveredResourcesCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDiscoveredResourcesCommand = /** @class */ (function (_super) {
    __extends(ListDiscoveredResourcesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDiscoveredResourcesCommand(input) {
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
    ListDiscoveredResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "ListDiscoveredResourcesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDiscoveredResourcesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDiscoveredResourcesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDiscoveredResourcesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDiscoveredResourcesCommand(input, context);
    };
    ListDiscoveredResourcesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDiscoveredResourcesCommand(output, context);
    };
    return ListDiscoveredResourcesCommand;
}($Command));
export { ListDiscoveredResourcesCommand };
//# sourceMappingURL=ListDiscoveredResourcesCommand.js.map