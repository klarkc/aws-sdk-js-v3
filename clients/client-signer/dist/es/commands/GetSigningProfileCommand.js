import { __extends } from "tslib";
import { GetSigningProfileRequest, GetSigningProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1GetSigningProfileCommand, serializeAws_restJson1GetSigningProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information on a specific signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new GetSigningProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSigningProfileCommandInput} for command's `input` shape.
 * @see {@link GetSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSigningProfileCommand = /** @class */ (function (_super) {
    __extends(GetSigningProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSigningProfileCommand(input) {
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
    GetSigningProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "GetSigningProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSigningProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSigningProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSigningProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetSigningProfileCommand(input, context);
    };
    GetSigningProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetSigningProfileCommand(output, context);
    };
    return GetSigningProfileCommand;
}($Command));
export { GetSigningProfileCommand };
//# sourceMappingURL=GetSigningProfileCommand.js.map