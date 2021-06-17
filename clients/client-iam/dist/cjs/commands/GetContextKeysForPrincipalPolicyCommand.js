"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetContextKeysForPrincipalPolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets a list of all of the context keys referenced in all the IAM policies that are
 *             attached to the specified IAM entity. The entity can be an IAM user, group, or role.
 *             If you specify a user, then the request also includes all of the policies attached to
 *             groups that the user is a member of.</p>
 *         <p>You can optionally include a list of one or more additional policies, specified as
 *             strings. If you want to include <i>only</i> a list of policies by string,
 *             use <a>GetContextKeysForCustomPolicy</a> instead.</p>
 *         <p>
 *             <b>Note:</b> This operation discloses information about the
 *             permissions granted to other users. If you do not want users to see other user's
 *             permissions, then consider allowing them to use <a>GetContextKeysForCustomPolicy</a> instead.</p>
 *         <p>Context keys are variables maintained by AWS and its services that provide details
 *             about the context of an API query request. Context keys can be evaluated by testing
 *             against a value in an IAM policy. Use <a>GetContextKeysForPrincipalPolicy</a> to understand what key names and values you must supply when you call <a>SimulatePrincipalPolicy</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetContextKeysForPrincipalPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetContextKeysForPrincipalPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new GetContextKeysForPrincipalPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContextKeysForPrincipalPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContextKeysForPrincipalPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetContextKeysForPrincipalPolicyCommand extends smithy_client_1.Command {
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
        const commandName = "GetContextKeysForPrincipalPolicyCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.GetContextKeysForPrincipalPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.GetContextKeysForPolicyResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryGetContextKeysForPrincipalPolicyCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryGetContextKeysForPrincipalPolicyCommand(output, context);
    }
}
exports.GetContextKeysForPrincipalPolicyCommand = GetContextKeysForPrincipalPolicyCommand;
//# sourceMappingURL=GetContextKeysForPrincipalPolicyCommand.js.map