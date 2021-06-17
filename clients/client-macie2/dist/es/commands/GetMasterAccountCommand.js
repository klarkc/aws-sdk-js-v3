import { __extends } from "tslib";
import { GetMasterAccountRequest, GetMasterAccountResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMasterAccountCommand, serializeAws_restJson1GetMasterAccountCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>(Deprecated) Retrieves information about the Amazon Macie administrator account for an account. This operation has been replaced by the <link  linkend="GetAdministratorAccount">GetAdministratorAccount</link> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetMasterAccountCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetMasterAccountCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetMasterAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMasterAccountCommandInput} for command's `input` shape.
 * @see {@link GetMasterAccountCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMasterAccountCommand = /** @class */ (function (_super) {
    __extends(GetMasterAccountCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMasterAccountCommand(input) {
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
    GetMasterAccountCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetMasterAccountCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMasterAccountRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMasterAccountResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMasterAccountCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMasterAccountCommand(input, context);
    };
    GetMasterAccountCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMasterAccountCommand(output, context);
    };
    return GetMasterAccountCommand;
}($Command));
export { GetMasterAccountCommand };
//# sourceMappingURL=GetMasterAccountCommand.js.map