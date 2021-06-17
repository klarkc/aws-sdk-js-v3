import { __extends } from "tslib";
import { GetLinksRequest, GetLinksResponse } from "../models/models_0";
import { deserializeAws_restJson1GetLinksCommand, serializeAws_restJson1GetLinksCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about one or more links in a specified global network.</p>
 *         <p>If you specify the site ID, you cannot specify the type or provider in the same request. You can specify the type and provider in the same request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkManagerClient, GetLinksCommand } from "@aws-sdk/client-networkmanager"; // ES Modules import
 * // const { NetworkManagerClient, GetLinksCommand } = require("@aws-sdk/client-networkmanager"); // CommonJS import
 * const client = new NetworkManagerClient(config);
 * const command = new GetLinksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLinksCommandInput} for command's `input` shape.
 * @see {@link GetLinksCommandOutput} for command's `response` shape.
 * @see {@link NetworkManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetLinksCommand = /** @class */ (function (_super) {
    __extends(GetLinksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetLinksCommand(input) {
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
    GetLinksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NetworkManagerClient";
        var commandName = "GetLinksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetLinksRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetLinksResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetLinksCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetLinksCommand(input, context);
    };
    GetLinksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetLinksCommand(output, context);
    };
    return GetLinksCommand;
}($Command));
export { GetLinksCommand };
//# sourceMappingURL=GetLinksCommand.js.map