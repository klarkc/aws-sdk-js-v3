import { __extends } from "tslib";
import { CancelSigningProfileRequest } from "../models/models_0";
import { deserializeAws_restJson1CancelSigningProfileCommand, serializeAws_restJson1CancelSigningProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>.
 * 			A canceled profile is still viewable with the <code>ListSigningProfiles</code>
 * 			operation, but it cannot perform new signing jobs, and is deleted two years after
 * 			cancelation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, CancelSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, CancelSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new CancelSigningProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSigningProfileCommandInput} for command's `input` shape.
 * @see {@link CancelSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelSigningProfileCommand = /** @class */ (function (_super) {
    __extends(CancelSigningProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelSigningProfileCommand(input) {
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
    CancelSigningProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "CancelSigningProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelSigningProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelSigningProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelSigningProfileCommand(input, context);
    };
    CancelSigningProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelSigningProfileCommand(output, context);
    };
    return CancelSigningProfileCommand;
}($Command));
export { CancelSigningProfileCommand };
//# sourceMappingURL=CancelSigningProfileCommand.js.map