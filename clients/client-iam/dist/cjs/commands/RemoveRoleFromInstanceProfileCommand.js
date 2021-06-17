"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveRoleFromInstanceProfileCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes the specified IAM role from the specified EC2 instance profile.</p>
 *         <important>
 *             <p>Make sure that you do not have any Amazon EC2 instances running with the role you
 *                 are about to remove from the instance profile. Removing a role from an instance
 *                 profile that is associated with a running instance might break any applications
 *                 running on the instance.</p>
 *         </important>
 *         <p> For more information about IAM roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/WorkingWithRoles.html">Working with roles</a>. For more
 *             information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About instance
 *             profiles</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, RemoveRoleFromInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, RemoveRoleFromInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new RemoveRoleFromInstanceProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveRoleFromInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link RemoveRoleFromInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RemoveRoleFromInstanceProfileCommand extends smithy_client_1.Command {
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
        const commandName = "RemoveRoleFromInstanceProfileCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RemoveRoleFromInstanceProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryRemoveRoleFromInstanceProfileCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryRemoveRoleFromInstanceProfileCommand(output, context);
    }
}
exports.RemoveRoleFromInstanceProfileCommand = RemoveRoleFromInstanceProfileCommand;
//# sourceMappingURL=RemoveRoleFromInstanceProfileCommand.js.map