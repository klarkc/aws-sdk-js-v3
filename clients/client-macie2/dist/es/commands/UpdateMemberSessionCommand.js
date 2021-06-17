import { __extends } from "tslib";
import { UpdateMemberSessionRequest, UpdateMemberSessionResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateMemberSessionCommand, serializeAws_restJson1UpdateMemberSessionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables an Amazon Macie administrator to suspend or re-enable a member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, UpdateMemberSessionCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, UpdateMemberSessionCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new UpdateMemberSessionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMemberSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateMemberSessionCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMemberSessionCommand = /** @class */ (function (_super) {
    __extends(UpdateMemberSessionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMemberSessionCommand(input) {
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
    UpdateMemberSessionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "UpdateMemberSessionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMemberSessionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateMemberSessionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMemberSessionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMemberSessionCommand(input, context);
    };
    UpdateMemberSessionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMemberSessionCommand(output, context);
    };
    return UpdateMemberSessionCommand;
}($Command));
export { UpdateMemberSessionCommand };
//# sourceMappingURL=UpdateMemberSessionCommand.js.map