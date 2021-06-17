import { __extends } from "tslib";
import { UpdateMacieSessionRequest, UpdateMacieSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateMacieSessionCommand, serializeAws_restJson1UpdateMacieSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Suspends or re-enables an Amazon Macie account, or updates the configuration settings for a Macie account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateMacieSessionCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateMacieSessionCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateMacieSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMacieSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateMacieSessionCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMacieSessionCommand = /** @class */ (function (_super) {
    __extends(UpdateMacieSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMacieSessionCommand(input) {
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
    UpdateMacieSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "UpdateMacieSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMacieSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMacieSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMacieSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMacieSessionCommand(input, context);
    };
    UpdateMacieSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMacieSessionCommand(output, context);
    };
    return UpdateMacieSessionCommand;
}($Command));
export { UpdateMacieSessionCommand };
//# sourceMappingURL=UpdateMacieSessionCommand.js.map