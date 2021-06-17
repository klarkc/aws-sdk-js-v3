"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisassociateApprovalRuleTemplateFromRepositoryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Removes the association between a template and a repository so that approval rules
 *             based on the template are not automatically created when pull requests are created in
 *             the specified repository. This does not delete any approval rules previously created for
 *             pull requests through the template association.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DisassociateApprovalRuleTemplateFromRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DisassociateApprovalRuleTemplateFromRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DisassociateApprovalRuleTemplateFromRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommandInput} for command's `input` shape.
 * @see {@link DisassociateApprovalRuleTemplateFromRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DisassociateApprovalRuleTemplateFromRepositoryCommand extends smithy_client_1.Command {
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
        const clientName = "CodeCommitClient";
        const commandName = "DisassociateApprovalRuleTemplateFromRepositoryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DisassociateApprovalRuleTemplateFromRepositoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand(output, context);
    }
}
exports.DisassociateApprovalRuleTemplateFromRepositoryCommand = DisassociateApprovalRuleTemplateFromRepositoryCommand;
//# sourceMappingURL=DisassociateApprovalRuleTemplateFromRepositoryCommand.js.map