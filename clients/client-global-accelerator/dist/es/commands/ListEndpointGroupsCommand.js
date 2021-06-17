import { __extends } from "tslib";
import { ListEndpointGroupsRequest, ListEndpointGroupsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListEndpointGroupsCommand, serializeAws_json1_1ListEndpointGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the endpoint groups that are associated with a listener. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, ListEndpointGroupsCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, ListEndpointGroupsCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const command = new ListEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEndpointGroupsCommand = /** @class */ (function (_super) {
    __extends(ListEndpointGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEndpointGroupsCommand(input) {
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
    ListEndpointGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GlobalAcceleratorClient";
        var commandName = "ListEndpointGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEndpointGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEndpointGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEndpointGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListEndpointGroupsCommand(input, context);
    };
    ListEndpointGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListEndpointGroupsCommand(output, context);
    };
    return ListEndpointGroupsCommand;
}($Command));
export { ListEndpointGroupsCommand };
//# sourceMappingURL=ListEndpointGroupsCommand.js.map