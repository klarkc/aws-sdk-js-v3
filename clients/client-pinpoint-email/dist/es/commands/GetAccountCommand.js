import { __extends } from "tslib";
import { GetAccountRequest, GetAccountResponse } from "../models/models_0";
import { deserializeAws_restJson1GetAccountCommand, serializeAws_restJson1GetAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Obtain information about the email-sending status and capabilities of your Amazon Pinpoint
 *             account in the current AWS Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetAccountCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetAccountCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const command = new GetAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccountCommandInput} for command's `input` shape.
 * @see {@link GetAccountCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccountCommand = /** @class */ (function (_super) {
    __extends(GetAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccountCommand(input) {
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
    GetAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointEmailClient";
        var commandName = "GetAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetAccountCommand(input, context);
    };
    GetAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetAccountCommand(output, context);
    };
    return GetAccountCommand;
}($Command));
export { GetAccountCommand };
//# sourceMappingURL=GetAccountCommand.js.map