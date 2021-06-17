import { __extends } from "tslib";
import { DeleteMemberRequest, DeleteMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteMemberCommand, serializeAws_restJson1DeleteMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the association between an Amazon Macie administrator account and an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteMemberCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeleteMemberCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * const client = new Macie2Client(config);
 * const command = new DeleteMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMemberCommandInput} for command's `input` shape.
 * @see {@link DeleteMemberCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMemberCommand = /** @class */ (function (_super) {
    __extends(DeleteMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMemberCommand(input) {
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
    DeleteMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "Macie2Client";
        var commandName = "DeleteMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteMemberCommand(input, context);
    };
    DeleteMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteMemberCommand(output, context);
    };
    return DeleteMemberCommand;
}($Command));
export { DeleteMemberCommand };
//# sourceMappingURL=DeleteMemberCommand.js.map