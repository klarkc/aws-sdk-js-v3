import { __extends } from "tslib";
import { PutSigningProfileRequest, PutSigningProfileResponse } from "../models/models_0";
import { deserializeAws_restJson1PutSigningProfileCommand, serializeAws_restJson1PutSigningProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a signing profile. A signing profile is a code signing template that can be used to
 * 			carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, PutSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, PutSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new PutSigningProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSigningProfileCommandInput} for command's `input` shape.
 * @see {@link PutSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutSigningProfileCommand = /** @class */ (function (_super) {
    __extends(PutSigningProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutSigningProfileCommand(input) {
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
    PutSigningProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "PutSigningProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutSigningProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutSigningProfileResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutSigningProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1PutSigningProfileCommand(input, context);
    };
    PutSigningProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1PutSigningProfileCommand(output, context);
    };
    return PutSigningProfileCommand;
}($Command));
export { PutSigningProfileCommand };
//# sourceMappingURL=PutSigningProfileCommand.js.map