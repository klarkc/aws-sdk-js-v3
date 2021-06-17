import { __extends } from "tslib";
import { DisassociateMemberRequest, DisassociateMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateMemberCommand, serializeAws_restJson1DisassociateMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates an Amazon Macie administrator account from a member account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisassociateMemberCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisassociateMemberCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DisassociateMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateMemberCommandInput} for command's `input` shape.
 * @see {@link DisassociateMemberCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateMemberCommand = /** @class */ (function (_super) {
    __extends(DisassociateMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateMemberCommand(input) {
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
    DisassociateMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "DisassociateMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateMemberCommand(input, context);
    };
    DisassociateMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateMemberCommand(output, context);
    };
    return DisassociateMemberCommand;
}($Command));
export { DisassociateMemberCommand };
//# sourceMappingURL=DisassociateMemberCommand.js.map