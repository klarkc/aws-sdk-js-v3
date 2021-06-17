import { __extends } from "tslib";
import { GetDataflowEndpointGroupRequest, GetDataflowEndpointGroupResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDataflowEndpointGroupCommand, serializeAws_restJson1GetDataflowEndpointGroupCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the dataflow endpoint group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, GetDataflowEndpointGroupCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, GetDataflowEndpointGroupCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new GetDataflowEndpointGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDataflowEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link GetDataflowEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDataflowEndpointGroupCommand = /** @class */ (function (_super) {
    __extends(GetDataflowEndpointGroupCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDataflowEndpointGroupCommand(input) {
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
    GetDataflowEndpointGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "GetDataflowEndpointGroupCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDataflowEndpointGroupRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDataflowEndpointGroupResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDataflowEndpointGroupCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDataflowEndpointGroupCommand(input, context);
    };
    GetDataflowEndpointGroupCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDataflowEndpointGroupCommand(output, context);
    };
    return GetDataflowEndpointGroupCommand;
}($Command));
export { GetDataflowEndpointGroupCommand };
//# sourceMappingURL=GetDataflowEndpointGroupCommand.js.map