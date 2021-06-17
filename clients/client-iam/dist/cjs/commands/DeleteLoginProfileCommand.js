"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteLoginProfileCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the password for the specified IAM user, which terminates the user's ability
 *             to access AWS services through the AWS Management Console.</p>
 *         <p>You can use the AWS CLI, the AWS API, or the <b>Users</b> page in the IAM console to delete a password for any IAM user.
 *             You can use <a>ChangePassword</a> to update, but not delete, your own
 *             password in the <b>My Security Credentials</b> page in the
 *             AWS Management Console.</p>
 *         <important>
 *             <p> Deleting a user's password does not prevent a user from accessing AWS through
 *                 the command line interface or the API. To prevent all user access, you must also
 *                 either make any access keys inactive or delete them. For more information about
 *                 making keys inactive or deleting them, see <a>UpdateAccessKey</a> and
 *                     <a>DeleteAccessKey</a>. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteLoginProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteLoginProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new DeleteLoginProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLoginProfileCommandInput} for command's `input` shape.
 * @see {@link DeleteLoginProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteLoginProfileCommand extends smithy_client_1.Command {
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
        const clientName = "IAMClient";
        const commandName = "DeleteLoginProfileCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteLoginProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDeleteLoginProfileCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDeleteLoginProfileCommand(output, context);
    }
}
exports.DeleteLoginProfileCommand = DeleteLoginProfileCommand;
//# sourceMappingURL=DeleteLoginProfileCommand.js.map