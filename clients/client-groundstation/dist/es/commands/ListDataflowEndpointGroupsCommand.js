import { __extends } from "tslib";
import { ListDataflowEndpointGroupsRequest, ListDataflowEndpointGroupsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDataflowEndpointGroupsCommand, serializeAws_restJson1ListDataflowEndpointGroupsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of <code>DataflowEndpoint</code> groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, ListDataflowEndpointGroupsCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, ListDataflowEndpointGroupsCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new ListDataflowEndpointGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataflowEndpointGroupsCommandInput} for command's `input` shape.
 * @see {@link ListDataflowEndpointGroupsCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDataflowEndpointGroupsCommand = /** @class */ (function (_super) {
    __extends(ListDataflowEndpointGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDataflowEndpointGroupsCommand(input) {
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
    ListDataflowEndpointGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "ListDataflowEndpointGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDataflowEndpointGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDataflowEndpointGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDataflowEndpointGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDataflowEndpointGroupsCommand(input, context);
    };
    ListDataflowEndpointGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDataflowEndpointGroupsCommand(output, context);
    };
    return ListDataflowEndpointGroupsCommand;
}($Command));
export { ListDataflowEndpointGroupsCommand };
//# sourceMappingURL=ListDataflowEndpointGroupsCommand.js.map