"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServiceLinkedRoleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an IAM role that is linked to a specific AWS service. The service controls
 *             the attached policies and when the role can be deleted. This helps ensure that the
 *             service is not broken by an unexpectedly changed or deleted role, which could put your
 *             AWS resources into an unknown state. Allowing the service to control the role helps
 *             improve service stability and proper cleanup when a service and its role are no longer
 *             needed. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html">Using service-linked
 *                 roles</a> in the <i>IAM User Guide</i>. </p>
 *         <p>To attach a policy to this service-linked role, you must make the request using the
 *             AWS service that depends on this role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateServiceLinkedRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateServiceLinkedRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new CreateServiceLinkedRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateServiceLinkedRoleCommandInput} for command's `input` shape.
 * @see {@link CreateServiceLinkedRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateServiceLinkedRoleCommand extends smithy_client_1.Command {
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
        const commandName = "CreateServiceLinkedRoleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateServiceLinkedRoleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateServiceLinkedRoleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryCreateServiceLinkedRoleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryCreateServiceLinkedRoleCommand(output, context);
    }
}
exports.CreateServiceLinkedRoleCommand = CreateServiceLinkedRoleCommand;
//# sourceMappingURL=CreateServiceLinkedRoleCommand.js.map