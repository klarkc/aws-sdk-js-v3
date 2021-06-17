"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssociationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>A State Manager association defines the state that you want to maintain on your instances.
 *    For example, an association can specify that anti-virus software must be installed and running on
 *    your instances, or that certain ports must be closed. For static targets, the association
 *    specifies a schedule for when the configuration is reapplied. For dynamic targets, such as an AWS
 *    Resource Group or an AWS Autoscaling Group, State Manager applies the configuration when new
 *    instances are added to the group. The association also specifies actions to take when applying
 *    the configuration. For example, an association for anti-virus software might run once a day. If
 *    the software is not installed, then State Manager installs it. If the software is installed, but
 *    the service is not running, then the association might instruct State Manager to start the
 *    service. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAssociationCommandInput} for command's `input` shape.
 * @see {@link CreateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class CreateAssociationCommand extends smithy_client_1.Command {
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
        const clientName = "SSMClient";
        const commandName = "CreateAssociationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateAssociationResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateAssociationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateAssociationCommand(output, context);
    }
}
exports.CreateAssociationCommand = CreateAssociationCommand;
//# sourceMappingURL=CreateAssociationCommand.js.map