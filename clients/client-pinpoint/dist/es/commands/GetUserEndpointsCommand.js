import { __extends } from "tslib";
import { GetUserEndpointsRequest, GetUserEndpointsResponse } from "../models/models_1";
import { deserializeAws_restJson1GetUserEndpointsCommand, serializeAws_restJson1GetUserEndpointsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about all the endpoints that are associated with a specific user ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetUserEndpointsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetUserEndpointsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetUserEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetUserEndpointsCommandInput} for command's `input` shape.
 * @see {@link GetUserEndpointsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetUserEndpointsCommand = /** @class */ (function (_super) {
    __extends(GetUserEndpointsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetUserEndpointsCommand(input) {
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
    GetUserEndpointsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetUserEndpointsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetUserEndpointsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetUserEndpointsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetUserEndpointsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetUserEndpointsCommand(input, context);
    };
    GetUserEndpointsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetUserEndpointsCommand(output, context);
    };
    return GetUserEndpointsCommand;
}($Command));
export { GetUserEndpointsCommand };
//# sourceMappingURL=GetUserEndpointsCommand.js.map