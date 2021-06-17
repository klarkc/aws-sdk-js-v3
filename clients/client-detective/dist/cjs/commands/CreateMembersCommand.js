"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMembersCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
        const clientName = "DetectiveClient";
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