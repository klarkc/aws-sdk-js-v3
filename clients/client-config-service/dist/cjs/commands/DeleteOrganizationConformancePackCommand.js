"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrganizationConformancePackCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified organization conformance pack and all of the config rules and remediation actions from
 * 			all member accounts in that organization. </p>
 *          <p> Only a master account or a delegated administrator account can delete an organization conformance pack.
 * 	When calling this API with a delegated administrator, you must ensure AWS Organizations
 * 		<code>ListDelegatedAdministrator</code> permissions are added.</p>
 * 			      <p>AWS Config sets the state of a conformance pack to DELETE_IN_PROGRESS until the deletion is complete.
 * 				You cannot update a conformance pack while it is in this state. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteOrganizationConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteOrganizationConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteOrganizationConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOrganizationConformancePackCommandInput} for command's `input` shape.
 * @see {@link DeleteOrganizationConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteOrganizationConformancePackCommand extends smithy_client_1.Command {
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
        const clientName = "ConfigServiceClient";
        const commandName = "DeleteOrganizationConformancePackCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeleteOrganizationConformancePackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeleteOrganizationConformancePackCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeleteOrganizationConformancePackCommand(output, context);
    }
}
exports.DeleteOrganizationConformancePackCommand = DeleteOrganizationConformancePackCommand;
//# sourceMappingURL=DeleteOrganizationConformancePackCommand.js.map