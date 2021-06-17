"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterDelegatedAdministratorCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Enables the specified member account to administer the Organizations features of the specified
 *             AWS service. It grants read-only access to AWS Organizations service data. The account still
 *             requires IAM permissions to access and administer the AWS service.</p>
 *         <p>You can run this action only for AWS services that support this
 *     feature. For a current list of services that support it, see the column <i>Supports
 *     Delegated Administrator</i> in the table at <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_integrate_services_list.html">AWS Services that you can use with
 *     AWS Organizations</a> in the <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, RegisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, RegisterDelegatedAdministratorCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new RegisterDelegatedAdministratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterDelegatedAdministratorCommandInput} for command's `input` shape.
 * @see {@link RegisterDelegatedAdministratorCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RegisterDelegatedAdministratorCommand extends smithy_client_1.Command {
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
        const clientName = "OrganizationsClient";
        const commandName = "RegisterDelegatedAdministratorCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RegisterDelegatedAdministratorRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RegisterDelegatedAdministratorCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RegisterDelegatedAdministratorCommand(output, context);
    }
}
exports.RegisterDelegatedAdministratorCommand = RegisterDelegatedAdministratorCommand;
//# sourceMappingURL=RegisterDelegatedAdministratorCommand.js.map