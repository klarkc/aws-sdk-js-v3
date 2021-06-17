import { __extends } from "tslib";
import { ListCustomRoutingEndpointGroupsRequest, ListCustomRoutingEndpointGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand, serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the endpoint groups that are associated with a listener for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListCustomRoutingEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListCustomRoutingEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListCustomRoutingEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCustomRoutingEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListCustomRoutingEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCustomRoutingEndpointGroupsCommand = /** @class */ (function (_super) {
    __extends(ListCustomRoutingEndpointGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCustomRoutingEndpointGroupsCommand(input) {
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
    ListCustomRoutingEndpointGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ListCustomRoutingEndpointGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCustomRoutingEndpointGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListCustomRoutingEndpointGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCustomRoutingEndpointGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCustomRoutingEndpointGroupsCommand(input, context);
    };
    ListCustomRoutingEndpointGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCustomRoutingEndpointGroupsCommand(output, context);
    };
    return ListCustomRoutingEndpointGroupsCommand;
}($Command));
export { ListCustomRoutingEndpointGroupsCommand };
//# sourceMappingURL=ListCustomRoutingEndpointGroupsCommand.js.map