import { __extends } from "tslib";
import { GetEmailIdentityRequest, GetEmailIdentityResponse } from "../models/models_0";
import { deserializeAws_restJson1GetEmailIdentityCommand, serializeAws_restJson1GetEmailIdentityCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information about a specific identity associated with your Amazon Pinpoint account,
 *             including the identity's verification status, its DKIM authentication status, and its
 *             custom Mail-From settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetEmailIdentityCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetEmailIdentityCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetEmailIdentityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEmailIdentityCommandInput} for command's `input` shape.
 * @see {@link GetEmailIdentityCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetEmailIdentityCommand = /** @class */ (function (_super) {
    __extends(GetEmailIdentityCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetEmailIdentityCommand(input) {
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
    GetEmailIdentityCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "GetEmailIdentityCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetEmailIdentityRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetEmailIdentityResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetEmailIdentityCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetEmailIdentityCommand(input, context);
    };
    GetEmailIdentityCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetEmailIdentityCommand(output, context);
    };
    return GetEmailIdentityCommand;
}($Command));
export { GetEmailIdentityCommand };
//# sourceMappingURL=GetEmailIdentityCommand.js.map