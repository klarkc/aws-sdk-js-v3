"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetireGrantCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retires a grant. To clean up, you can retire a grant when you're done using it. You should
 *       revoke a grant when you intend to actively deny operations that depend on it. The following
 *       are permitted to call this API:</p>
 *          <ul>
 *             <li>
 *                <p>The AWS account (root user) under which the grant was created</p>
 *             </li>
 *             <li>
 *                <p>The <code>RetiringPrincipal</code>, if present in the grant</p>
 *             </li>
 *             <li>
 *                <p>The <code>GranteePrincipal</code>, if <code>RetireGrant</code> is an operation
 *           specified in the grant</p>
 *             </li>
 *          </ul>
 *          <p>You must identify the grant to retire by its grant token or by a combination of the grant
 *       ID and the Amazon Resource Name (ARN) of the customer master key (CMK). A grant token is a
 *       unique variable-length base64-encoded string. A grant ID is a 64 character unique identifier
 *       of a grant. The <a>CreateGrant</a> operation returns both.</p>
 *
 *          <p>
 *             <b>Cross-account use</b>: Yes. You can retire a grant on a CMK
 *       in a different AWS account.</p>
 *          <p>
 *             <b>Required permissions:</b>: Permission to retire a grant is
 *       specified in the grant. You cannot control access to this operation in a policy. For more
 *       information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/grants.html">Using
 *         grants</a> in the <i>AWS Key Management Service Developer Guide</i>.</p>
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
 *                   <a>ListRetirableGrants</a>
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
 * import { KMSClient, RetireGrantCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, RetireGrantCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new RetireGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetireGrantCommandInput} for command's `input` shape.
 * @see {@link RetireGrantCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RetireGrantCommand extends smithy_client_1.Command {
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
        const commandName = "RetireGrantCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.RetireGrantRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1RetireGrantCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1RetireGrantCommand(output, context);
    }
}
exports.RetireGrantCommand = RetireGrantCommand;
//# sourceMappingURL=RetireGrantCommand.js.map