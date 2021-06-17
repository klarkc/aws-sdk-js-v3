"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePermissionPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Permanently deletes an IAM policy from the specified rule group.</p>
 *         <p>You must be the owner of the rule group to perform this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFV2Client, DeletePermissionPolicyCommand } from "@aws-sdk/client-wafv2"; // ES Modules import
 * // const { WAFV2Client, DeletePermissionPolicyCommand } = require("@aws-sdk/client-wafv2"); // CommonJS import
 * const client = new WAFV2Client(config);
 * const command = new DeletePermissionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePermissionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeletePermissionPolicyCommandOutput} for command's `response` shape.
 * @see {@link WAFV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeletePermissionPolicyCommand extends smithy_client_1.Command {
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
        const clientName = "WAFV2Client";
        const commandName = "DeletePermissionPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.DeletePermissionPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.DeletePermissionPolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1DeletePermissionPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1DeletePermissionPolicyCommand(output, context);
    }
}
exports.DeletePermissionPolicyCommand = DeletePermissionPolicyCommand;
//# sourceMappingURL=DeletePermissionPolicyCommand.js.map