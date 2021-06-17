import { __extends } from "tslib";
import { GetAppsRequest, GetAppsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAppsCommand, serializeAws_restJson1GetAppsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about all the applications that are associated with your Amazon Pinpoint account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetAppsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetAppsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetAppsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAppsCommandInput} for command's `input` shape.
 * @see {@link GetAppsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAppsCommand = /** @class */ (function (_super) {
    __extends(GetAppsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAppsCommand(input) {
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
    GetAppsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetAppsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAppsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAppsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAppsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAppsCommand(input, context);
    };
    GetAppsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAppsCommand(output, context);
    };
    return GetAppsCommand;
}($Command));
export { GetAppsCommand };
//# sourceMappingURL=GetAppsCommand.js.map