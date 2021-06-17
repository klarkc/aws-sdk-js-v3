import { __extends } from "tslib";
import { GetMemberRequest, GetMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1GetMemberCommand, serializeAws_restJson1GetMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about an account that's associated with an Amazon Macie administrator account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, GetMemberCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, GetMemberCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new GetMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMemberCommandInput} for command's `input` shape.
 * @see {@link GetMemberCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetMemberCommand = /** @class */ (function (_super) {
    __extends(GetMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetMemberCommand(input) {
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
    GetMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "GetMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetMemberCommand(input, context);
    };
    GetMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetMemberCommand(output, context);
    };
    return GetMemberCommand;
}($Command));
export { GetMemberCommand };
//# sourceMappingURL=GetMemberCommand.js.map