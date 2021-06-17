"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignInstanceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Assign a registered instance to a layer.</p>
 *          <ul>
 *             <li>
 *                <p>You can assign registered on-premises instances to any layer type.</p>
 *             </li>
 *             <li>
 *                <p>You can assign registered Amazon EC2 instances only to custom layers.</p>
 *             </li>
 *             <li>
 *                <p>You cannot use this action with instances that were created with AWS OpsWorks Stacks.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an AWS Identity and Access Management
 *       (IAM) user must have a Manage permissions
 *       level for the stack or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, AssignInstanceCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AssignInstanceCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const command = new AssignInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssignInstanceCommandInput} for command's `input` shape.
 * @see {@link AssignInstanceCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AssignInstanceCommand extends smithy_client_1.Command {
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
        const clientName = "OpsWorksClient";
        const commandName = "AssignInstanceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AssignInstanceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1AssignInstanceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1AssignInstanceCommand(output, context);
    }
}
exports.AssignInstanceCommand = AssignInstanceCommand;
//# sourceMappingURL=AssignInstanceCommand.js.map