"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeTagsCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of tags. You can return tags from a specific resource by specifying
 *             an ARN, or you can return all tags for a given type of resource, such as clusters,
 *             snapshots, and so on.</p>
 *         <p>The following are limitations for <code>DescribeTags</code>: </p>
 *         <ul>
 *             <li>
 *                 <p>You cannot specify an ARN and a resource-type value together in the same
 *                     request.</p>
 *             </li>
 *             <li>
 *                 <p>You cannot use the <code>MaxRecords</code> and <code>Marker</code>
 *                     parameters together with the ARN parameter.</p>
 *             </li>
 *             <li>
 *                 <p>The <code>MaxRecords</code> parameter can be a range from 10 to 50 results
 *                     to return in a request.</p>
 *             </li>
 *          </ul>
 *         <p>If you specify both tag keys and tag values in the same request, Amazon Redshift returns
 *             all resources that match any combination of the specified keys and values. For example,
 *             if you have <code>owner</code> and <code>environment</code> for tag keys, and
 *                 <code>admin</code> and <code>test</code> for tag values, all resources that have any
 *             combination of those values are returned.</p>
 *         <p>If both tag keys and values are omitted from the request, resources are returned
 *             regardless of whether they have tag keys or values associated with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeTagsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeTagsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeTagsCommand extends smithy_client_1.Command {
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
        const clientName = "RedshiftClient";
        const commandName = "DescribeTagsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.DescribeTagsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.TaggedResourceListMessage.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryDescribeTagsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryDescribeTagsCommand(output, context);
    }
}
exports.DescribeTagsCommand = DescribeTagsCommand;
//# sourceMappingURL=DescribeTagsCommand.js.map