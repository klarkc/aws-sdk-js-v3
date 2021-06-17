"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMembersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateMembersCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GuardDutyClient";
        const commandName = "CreateMembersCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateMembersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateMembersResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1CreateMembersCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1CreateMembersCommand(output, context);
    }
}
exports.CreateMembersCommand = CreateMembersCommand;
//# sourceMappingURL=CreateMembersCommand.js.map