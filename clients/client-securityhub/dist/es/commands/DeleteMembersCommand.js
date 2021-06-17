import { __extends } from "tslib";
import { DeleteMembersRequest, DeleteMembersResponse } from "../models/models_1";
import { deserializeAws_restJson1DeleteMembersCommand, serializeAws_restJson1DeleteMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified member accounts from Security Hub.</p>
 *          <p>Can be used to delete member accounts that belong to an organization as well as member
 *          accounts that were invited manually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, DeleteMembersCommand } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, DeleteMembersCommand } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * const client = new SecurityHubClient(config);
 * const command = new DeleteMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMembersCommandInput} for command's `input` shape.
 * @see {@link DeleteMembersCommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMembersCommand = /** @class */ (function (_super) {
    __extends(DeleteMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMembersCommand(input) {
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
    DeleteMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SecurityHubClient";
        var commandName = "DeleteMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteMembersCommand(input, context);
    };
    DeleteMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteMembersCommand(output, context);
    };
    return DeleteMembersCommand;
}($Command));
export { DeleteMembersCommand };
//# sourceMappingURL=DeleteMembersCommand.js.map