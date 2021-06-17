import { __extends } from "tslib";
import { CreateMembersRequest, CreateMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateMembersCommand, serializeAws_restJson1CreateMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sends a request to invite the specified AWS accounts to be member accounts in the
 *          behavior graph. This operation can only be called by the administrator account for a
 *          behavior graph. </p>
 *          <p>
 *             <code>CreateMembers</code> verifies the accounts and then invites the verified accounts.
 *          The administrator can optionally specify to not send invitation emails to the member
 *          accounts. This would be used when the administrator manages their member accounts
 *          centrally.</p>
 *          <p>The request provides the behavior graph ARN and the list of accounts to invite.</p>
 *          <p>The response separates the requested accounts into two lists:</p>
 *          <ul>
 *             <li>
 *                <p>The accounts that <code>CreateMembers</code> was able to start the verification
 *                for. This list includes member accounts that are being verified, that have passed
 *                verification and are to be invited, and that have failed verification.</p>
 *             </li>
 *             <li>
 *                <p>The accounts that <code>CreateMembers</code> was unable to process. This list
 *                includes accounts that were already invited to be member accounts in the behavior
 *                graph.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, CreateMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, CreateMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * const client = new DetectiveClient(config);
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMembersCommandInput} for command's `input` shape.
 * @see {@link CreateMembersCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMembersCommand = /** @class */ (function (_super) {
    __extends(CreateMembersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMembersCommand(input) {
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
    CreateMembersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DetectiveClient";
        var commandName = "CreateMembersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMembersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMembersCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMembersCommand(input, context);
    };
    CreateMembersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMembersCommand(output, context);
    };
    return CreateMembersCommand;
}($Command));
export { CreateMembersCommand };
//# sourceMappingURL=CreateMembersCommand.js.map