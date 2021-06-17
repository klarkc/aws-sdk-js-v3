"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTagsForResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for
 *             Windows File Server.</p>
 *
 *         <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code>
 *             parameter to limit the number of tags in a response. If more tags remain, Amazon FSx
 *             returns a <code>NextToken</code> value in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *                 <code>NextToken</code> from the last response.</p>
 *
 *         <p>This action is used in an iterative process to retrieve a list of your tags.
 *                 <code>ListTagsForResource</code> is called first without a
 *             <code>NextToken</code>value. Then the action continues to be called with the
 *                 <code>NextToken</code> parameter set to the value of the last <code>NextToken</code>
 *             value until a response has no <code>NextToken</code>.</p>
 *
 *         <p>When using this action, keep the following in mind:</p>
 *         <ul>
 *             <li>
 *                 <p>The implementation might return fewer than <code>MaxResults</code> file
 *                     system descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *
 *             </li>
 *             <li>
 *                 <p>The order of tags returned in the response of one
 *                         <code>ListTagsForResource</code> call and the order of tags returned across
 *                     the responses of a multi-call iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, ListTagsForResourceCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, ListTagsForResourceCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListTagsForResourceCommand extends smithy_client_1.Command {
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
        const clientName = "FSxClient";
        const commandName = "ListTagsForResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListTagsForResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListTagsForResourceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1ListTagsForResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1ListTagsForResourceCommand(output, context);
    }
}
exports.ListTagsForResourceCommand = ListTagsForResourceCommand;
//# sourceMappingURL=ListTagsForResourceCommand.js.map