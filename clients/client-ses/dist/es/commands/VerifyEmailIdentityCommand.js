import { __extends } from "tslib";
import { VerifyEmailIdentityRequest, VerifyEmailIdentityResponse } from "../models/models_0";
import { deserializeAws_queryVerifyEmailIdentityCommand, serializeAws_queryVerifyEmailIdentityCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds an email address to the list of identities for your Amazon SES account in the current
 *             AWS region and attempts to verify it. As a result of executing this operation, a
 *             verification email is sent to the specified address.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, VerifyEmailIdentityCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, VerifyEmailIdentityCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const command = new VerifyEmailIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link VerifyEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link VerifyEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for command's `input` shape.
 *
 */
var VerifyEmailIdentityCommand = /** @class */ (function (_super) {
    __extends(VerifyEmailIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function VerifyEmailIdentityCommand(input) {
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
    VerifyEmailIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESClient";
        var commandName = "VerifyEmailIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: VerifyEmailIdentityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: VerifyEmailIdentityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    VerifyEmailIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryVerifyEmailIdentityCommand(input, context);
    };
    VerifyEmailIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryVerifyEmailIdentityCommand(output, context);
    };
    return VerifyEmailIdentityCommand;
}($Command));
export { VerifyEmailIdentityCommand };
//# sourceMappingURL=VerifyEmailIdentityCommand.js.map