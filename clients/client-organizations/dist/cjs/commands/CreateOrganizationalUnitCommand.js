"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrganizationalUnitCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Creates an organizational unit (OU) within a root or parent OU. An OU is a container
 *             for accounts that enables you to organize your accounts to apply policies according to
 *             your business requirements. The number of levels deep that you can nest OUs is dependent
 *             upon the policy types enabled for that root. For service control policies, the limit is
 *             five.</p>
 *         <p>For more information about OUs, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_ous.html">Managing Organizational Units</a> in the
 *                 <i>AWS Organizations User Guide.</i>
 *          </p>
 *         <p>If the request includes tags, then the requester must have the
 *                 <code>organizations:TagResource</code> permission.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, CreateOrganizationalUnitCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, CreateOrganizationalUnitCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new CreateOrganizationalUnitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOrganizationalUnitCommandInput} for command's `input` shape.
 * @see {@link CreateOrganizationalUnitCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateOrganizationalUnitCommand extends smithy_client_1.Command {
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
        const commandName = "CreateOrganizationalUnitCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateOrganizationalUnitRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateOrganizationalUnitResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateOrganizationalUnitCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateOrganizationalUnitCommand(output, context);
    }
}
exports.CreateOrganizationalUnitCommand = CreateOrganizationalUnitCommand;
//# sourceMappingURL=CreateOrganizationalUnitCommand.js.map