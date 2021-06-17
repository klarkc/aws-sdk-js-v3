import { __extends } from "tslib";
import { DeleteStudioMemberRequest, DeleteStudioMemberResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteStudioMemberCommand, serializeAws_restJson1DeleteStudioMemberCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete a user from studio membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NimbleClient, DeleteStudioMemberCommand } from "@aws-sdk/client-nimble"; // ES Modules import
 * // const { NimbleClient, DeleteStudioMemberCommand } = require("@aws-sdk/client-nimble"); // CommonJS import
 * const client = new NimbleClient(config);
 * const command = new DeleteStudioMemberCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStudioMemberCommandInput} for command's `input` shape.
 * @see {@link DeleteStudioMemberCommandOutput} for command's `response` shape.
 * @see {@link NimbleClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteStudioMemberCommand = /** @class */ (function (_super) {
    __extends(DeleteStudioMemberCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteStudioMemberCommand(input) {
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
    DeleteStudioMemberCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "NimbleClient";
        var commandName = "DeleteStudioMemberCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteStudioMemberRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteStudioMemberResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteStudioMemberCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteStudioMemberCommand(input, context);
    };
    DeleteStudioMemberCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteStudioMemberCommand(output, context);
    };
    return DeleteStudioMemberCommand;
}($Command));
export { DeleteStudioMemberCommand };
//# sourceMappingURL=DeleteStudioMemberCommand.js.map