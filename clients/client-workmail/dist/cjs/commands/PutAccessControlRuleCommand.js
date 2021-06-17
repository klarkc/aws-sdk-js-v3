"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutAccessControlRuleCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds a new access control rule for the specified organization. The rule allows or
 *          denies access to the organization for the specified IPv4 addresses, access protocol
 *          actions, and user IDs. Adding a new rule with the same name as an existing rule replaces
 *          the older rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, PutAccessControlRuleCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, PutAccessControlRuleCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * const client = new WorkMailClient(config);
 * const command = new PutAccessControlRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccessControlRuleCommandInput} for command's `input` shape.
 * @see {@link PutAccessControlRuleCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutAccessControlRuleCommand extends smithy_client_1.Command {
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
        const clientName = "WorkMailClient";
        const commandName = "PutAccessControlRuleCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutAccessControlRuleRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PutAccessControlRuleResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1PutAccessControlRuleCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1PutAccessControlRuleCommand(output, context);
    }
}
exports.PutAccessControlRuleCommand = PutAccessControlRuleCommand;
//# sourceMappingURL=PutAccessControlRuleCommand.js.map