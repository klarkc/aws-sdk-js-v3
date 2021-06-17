import { __extends } from "tslib";
import { GetDedicatedIpsRequest, GetDedicatedIpsResponse } from "../models/models_0";
import { deserializeAws_restJson1GetDedicatedIpsCommand, serializeAws_restJson1GetDedicatedIpsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List the dedicated IP addresses that are associated with your Amazon Pinpoint
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDedicatedIpsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDedicatedIpsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetDedicatedIpsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDedicatedIpsCommandInput} for command's `input` shape.
 * @see {@link GetDedicatedIpsCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDedicatedIpsCommand = /** @class */ (function (_super) {
    __extends(GetDedicatedIpsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetDedicatedIpsCommand(input) {
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
    GetDedicatedIpsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "GetDedicatedIpsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetDedicatedIpsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetDedicatedIpsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetDedicatedIpsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetDedicatedIpsCommand(input, context);
    };
    GetDedicatedIpsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetDedicatedIpsCommand(output, context);
    };
    return GetDedicatedIpsCommand;
}($Command));
export { GetDedicatedIpsCommand };
//# sourceMappingURL=GetDedicatedIpsCommand.js.map