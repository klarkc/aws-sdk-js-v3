import { __extends } from "tslib";
import { DisassociateFromMasterAccountRequest, DisassociateFromMasterAccountResponse } from "../models/models_0";
import { deserializeAws_restJson1DisassociateFromMasterAccountCommand, serializeAws_restJson1DisassociateFromMasterAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>(Deprecated) Disassociates a member account from its Amazon Macie administrator account. This operation has been replaced by the <link  linkend="DisassociateFromAdministratorAccount">DisassociateFromAdministratorAccount</link> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DisassociateFromMasterAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DisassociateFromMasterAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DisassociateFromMasterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateFromMasterAccountCommandInput} for command's `input` shape.
 * @see {@link DisassociateFromMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateFromMasterAccountCommand = /** @class */ (function (_super) {
    __extends(DisassociateFromMasterAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateFromMasterAccountCommand(input) {
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
    DisassociateFromMasterAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "DisassociateFromMasterAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateFromMasterAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateFromMasterAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateFromMasterAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DisassociateFromMasterAccountCommand(input, context);
    };
    DisassociateFromMasterAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DisassociateFromMasterAccountCommand(output, context);
    };
    return DisassociateFromMasterAccountCommand;
}($Command));
export { DisassociateFromMasterAccountCommand };
//# sourceMappingURL=DisassociateFromMasterAccountCommand.js.map