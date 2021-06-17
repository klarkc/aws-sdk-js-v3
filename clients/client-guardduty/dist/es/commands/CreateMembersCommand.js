import { __extends } from "tslib";
import { CreateMembersRequest, CreateMembersResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateMembersCommand, serializeAws_restJson1CreateMembersCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates member accounts of the current AWS account by specifying a list of AWS account
 *       IDs. This step is a prerequisite for managing the associated member accounts either by
 *       invitation or through an organization.</p>
 *          <p>When using <code>Create Members</code> as an organizations delegated administrator this
 *       action will enable GuardDuty in the added member accounts, with the exception of the
 *       organization delegated administrator account, which must enable GuardDuty prior to being added as a
 *       member.</p>
 *          <p>If you are adding accounts by invitation use this action after GuardDuty has been enabled
 *       in potential member accounts and before using <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_InviteMembers.html">
 *                <code>Invite
 *         Members</code>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, CreateMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, CreateMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * const client = new GuardDutyClient(config);
 * const command = new CreateMembersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMembersCommandInput} for command's `input` shape.
 * @see {@link CreateMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for command's `input` shape.
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
        var clientName = "GuardDutyClient";
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