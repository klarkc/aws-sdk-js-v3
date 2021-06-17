"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisablePolicyTypeCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Disables an organizational policy type in a root. A policy of a certain type can be
 *             attached to entities in a root only if that type is enabled in the root. After you
 *             perform this operation, you no longer can attach policies of the specified type to that
 *             root or to any organizational unit (OU) or account in that root. You can undo this by
 *             using the <a>EnablePolicyType</a> operation.</p>
 *         <p>This is an asynchronous request that AWS performs in the background. If you disable
 *             a policy type for a root, it still appears enabled for the organization if <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_org_support-all-features.html">all features</a> are enabled for the organization. AWS recommends that you
 *             first use <a>ListRoots</a> to see the status of policy types for a specified
 *             root, and then use this operation.</p>
 *         <p>This operation can be called only from the organization's management account.</p>
 *         <p> To view the status of available policy types in the organization, use <a>DescribeOrganization</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OrganizationsClient, DisablePolicyTypeCommand } from "@aws-sdk/client-organizations"; // ES Modules import
 * // const { OrganizationsClient, DisablePolicyTypeCommand } = require("@aws-sdk/client-organizations"); // CommonJS import
 * const client = new OrganizationsClient(config);
 * const command = new DisablePolicyTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisablePolicyTypeCommandInput} for command's `input` shape.
 * @see {@link DisablePolicyTypeCommandOutput} for command's `response` shape.
 * @see {@link OrganizationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisablePolicyTypeCommand extends smithy_client_1.Command {
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
        const commandName = "DisablePolicyTypeCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisablePolicyTypeRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DisablePolicyTypeResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DisablePolicyTypeCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DisablePolicyTypeCommand(output, context);
    }
}
exports.DisablePolicyTypeCommand = DisablePolicyTypeCommand;
//# sourceMappingURL=DisablePolicyTypeCommand.js.map