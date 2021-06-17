"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutUserPermissionsBoundaryCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds or updates the policy that is specified as the IAM user's permissions boundary.
 *             You can use an AWS managed policy or a customer managed policy to set the boundary for
 *             a user. Use the boundary to control the maximum permissions that the user can have.
 *             Setting a permissions boundary is an advanced feature that can affect the permissions
 *             for the user.</p>
 *         <important>
 *             <p>Policies that are used as permissions boundaries do not provide permissions. You
 *                 must also attach a permissions policy to the user. To learn how the effective
 *                 permissions for a user are evaluated, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html">IAM JSON policy
 *                     evaluation logic</a> in the IAM User Guide. </p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutUserPermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new PutUserPermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutUserPermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutUserPermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutUserPermissionsBoundaryCommand extends smithy_client_1.Command {
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
        const commandName = "PutUserPermissionsBoundaryCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PutUserPermissionsBoundaryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryPutUserPermissionsBoundaryCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryPutUserPermissionsBoundaryCommand(output, context);
    }
}
exports.PutUserPermissionsBoundaryCommand = PutUserPermissionsBoundaryCommand;
//# sourceMappingURL=PutUserPermissionsBoundaryCommand.js.map