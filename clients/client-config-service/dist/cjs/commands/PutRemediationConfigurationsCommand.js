"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutRemediationConfigurationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds or updates the remediation configuration with a specific AWS Config rule with the
 * 			selected target or action.
 * 			The API creates the <code>RemediationConfiguration</code> object for the AWS Config rule.
 * 		The AWS Config rule must already exist for you to add a remediation configuration.
 * 		The target (SSM document) must exist and have permissions to use the target. </p>
 * 		       <note>
 *             <p>If you make backward incompatible changes to the SSM document,
 * 			you must call this again to ensure the remediations can run.</p>
 * 			         <p>This API does not support adding remediation configurations for service-linked AWS Config Rules such as Organization Config rules,
 * 				the rules deployed by conformance packs, and rules deployed by AWS Security Hub.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, PutRemediationConfigurationsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, PutRemediationConfigurationsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new PutRemediationConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRemediationConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutRemediationConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutRemediationConfigurationsCommand extends smithy_client_1.Command {
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
        const commandName = "PutRemediationConfigurationsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutRemediationConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutRemediationConfigurationsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutRemediationConfigurationsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutRemediationConfigurationsCommand(output, context);
    }
}
exports.PutRemediationConfigurationsCommand = PutRemediationConfigurationsCommand;
//# sourceMappingURL=PutRemediationConfigurationsCommand.js.map