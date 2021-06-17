"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRetirableGrantsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns all grants in which the specified principal is the <code>RetiringPrincipal</code>
 *       in the grant. </p>
 *          <p>You can specify any principal in your AWS account. The grants that are returned include
 *       grants for CMKs in your AWS account and other AWS accounts.</p>
 *          <p>You might use this operation to determine which grants you may retire. To retire a grant,
 *       use the <a>RetireGrant</a> operation.</p>
 *          <p>
 *             <b>Cross-account use</b>: You must specify a principal in your
 *       AWS account. However, this operation can return grants in any AWS account. You do not need
 *         <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any
 *       AWS account other than your own.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your AWS
 *       account.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RetireGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RevokeGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListRetirableGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListRetirableGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListRetirableGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRetirableGrantsCommandInput} for command's `input` shape.
 * @see {@link ListRetirableGrantsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListRetirableGrantsCommand extends smithy_client_1.Command {
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
        const clientName = "KMSClient";
        const commandName = "ListRetirableGrantsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListRetirableGrantsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListGrantsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListRetirableGrantsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListRetirableGrantsCommand(output, context);
    }
}
exports.ListRetirableGrantsCommand = ListRetirableGrantsCommand;
//# sourceMappingURL=ListRetirableGrantsCommand.js.map