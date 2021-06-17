import { __extends } from "tslib";
import { GetSigningPlatformRequest, GetSigningPlatformResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSigningPlatformCommand, serializeAws_restJson1GetSigningPlatformCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information on a specific signing platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningPlatformCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningPlatformCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new GetSigningPlatformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSigningPlatformCommandInput} for command's `input` shape.
 * @see {@link GetSigningPlatformCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSigningPlatformCommand = /** @class */ (function (_super) {
    __extends(GetSigningPlatformCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSigningPlatformCommand(input) {
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
    GetSigningPlatformCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "GetSigningPlatformCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSigningPlatformRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSigningPlatformResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSigningPlatformCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSigningPlatformCommand(input, context);
    };
    GetSigningPlatformCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSigningPlatformCommand(output, context);
    };
    return GetSigningPlatformCommand;
}($Command));
export { GetSigningPlatformCommand };
//# sourceMappingURL=GetSigningPlatformCommand.js.map