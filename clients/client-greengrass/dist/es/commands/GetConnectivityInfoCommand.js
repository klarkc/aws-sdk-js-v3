import { __extends } from "tslib";
import { GetConnectivityInfoRequest, GetConnectivityInfoResponse } from "../models/models_0";
import { deserializeAws_restJson1GetConnectivityInfoCommand, serializeAws_restJson1GetConnectivityInfoCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Retrieves the connectivity information for a core.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetConnectivityInfoCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetConnectivityInfoCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new GetConnectivityInfoCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetConnectivityInfoCommandInput} for command's `input` shape.
 * @see {@link GetConnectivityInfoCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetConnectivityInfoCommand = /** @class */ (function (_super) {
    __extends(GetConnectivityInfoCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetConnectivityInfoCommand(input) {
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
    GetConnectivityInfoCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "GetConnectivityInfoCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetConnectivityInfoRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetConnectivityInfoResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetConnectivityInfoCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetConnectivityInfoCommand(input, context);
    };
    GetConnectivityInfoCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetConnectivityInfoCommand(output, context);
    };
    return GetConnectivityInfoCommand;
}($Command));
export { GetConnectivityInfoCommand };
//# sourceMappingURL=GetConnectivityInfoCommand.js.map