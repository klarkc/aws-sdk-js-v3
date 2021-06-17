"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Attaches one or more tags, each consisting of a key name and a value, to the specified
 *       secret. Tags are part of the secret's overall metadata, and are not associated with any
 *       specific version of the secret. This operation only appends tags to the existing list of tags.
 *       To remove tags, you must use <a>UntagResource</a>.</p>
 *          <p>The following basic restrictions apply to tags:</p>
 *         <ul>
 *             <li>
 *                <p>Maximum number of tags per secret—50</p>
 *             </li>
 *             <li>
 *                <p>Maximum key length—127 Unicode characters in UTF-8</p>
 *             </li>
 *             <li>
 *                <p>Maximum value length—255 Unicode characters in UTF-8</p>
 *             </li>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>Do not use the <code>aws:</code> prefix in your tag names or values because AWS reserves it
 *             for AWS use. You can't edit or delete tag names or values with this
 *               prefix. Tags with this prefix do not count against your tags per secret limit.</p>
 *             </li>
 *             <li>
 *                <p>If you use your tagging schema across multiple services and resources,
 *               remember other services might have restrictions on allowed characters. Generally
 *               allowed characters: letters, spaces, and numbers representable in UTF-8, plus the
 *               following special characters: + - = . _ : / @.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>If you use tags as part of your security strategy, then adding or removing a tag can
 *         change permissions. If successfully completing this operation would result in you losing
 *         your permissions for this secret, then the operation is blocked and returns an Access Denied
 *         error.</p>
 *          </important>
 *          <p>
 *             <b>Minimum permissions</b>
 *          </p>
 *          <p>To run this command, you must have the following permissions:</p>
 *          <ul>
 *             <li>
 *                <p>secretsmanager:TagResource</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Related operations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>To remove one or more tags from the collection attached to a secret, use <a>UntagResource</a>.</p>
 *             </li>
 *             <li>
 *                <p>To view the list of tags attached to a secret, use <a>DescribeSecret</a>.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, TagResourceCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, TagResourceCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
class TagResourceCommand extends smithy_client_1.Command {
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
        const clientName = "SecretsManagerClient";
        const commandName = "TagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.TagResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1TagResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1TagResourceCommand(output, context);
    }
}
exports.TagResourceCommand = TagResourceCommand;
//# sourceMappingURL=TagResourceCommand.js.map