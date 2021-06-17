"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListGroupPoliciesCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the names of the inline policies that are embedded in the specified IAM
 *             group.</p>
 *         <p>An IAM group can also have managed policies attached to it. To list the managed
 *             policies that are attached to a group, use <a>ListAttachedGroupPolicies</a>.
 *             For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters. If there are no inline policies embedded with the specified group, the
 *             operation returns an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupPoliciesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupPoliciesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListGroupPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGroupPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListGroupPoliciesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListGroupPoliciesCommand extends smithy_client_1.Command {
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
        const commandName = "ListGroupPoliciesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListGroupPoliciesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListGroupPoliciesResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryListGroupPoliciesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryListGroupPoliciesCommand(output, context);
    }
}
exports.ListGroupPoliciesCommand = ListGroupPoliciesCommand;
//# sourceMappingURL=ListGroupPoliciesCommand.js.map