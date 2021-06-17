"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountAssignmentCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Assigns access to a principal for a specified AWS account using a specified permission
 *       set.</p>
 *          <note>
 *             <p>The term <i>principal</i> here refers to a user or group that is defined in AWS SSO.</p>
 *          </note>
 *          <note>
 *             <p>As part of a successful <code>CreateAccountAssignment</code> call, the specified permission set will automatically be provisioned to the account in the form of an IAM policy attached to the SSO-created IAM role. If the permission set is subsequently updated, the corresponding IAM policies attached to roles in your accounts will not be updated automatically. In this case, you will need to call <code>
 *                   <a>ProvisionPermissionSet</a>
 *                </code> to make these updates.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, CreateAccountAssignmentCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, CreateAccountAssignmentCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new CreateAccountAssignmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccountAssignmentCommandInput} for command's `input` shape.
 * @see {@link CreateAccountAssignmentCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateAccountAssignmentCommand extends smithy_client_1.Command {
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
        const clientName = "SSOAdminClient";
        const commandName = "CreateAccountAssignmentCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAccountAssignmentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateAccountAssignmentResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateAccountAssignmentCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateAccountAssignmentCommand(output, context);
    }
}
exports.CreateAccountAssignmentCommand = CreateAccountAssignmentCommand;
//# sourceMappingURL=CreateAccountAssignmentCommand.js.map