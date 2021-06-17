"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagResourceCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Assigns one or more tags (key-value pairs) to the specified QuickSight resource. </p>
 * 		       <p>Tags can help you organize and categorize your resources. You can also use them to
 * 			scope user permissions, by granting a user permission to access or change only resources
 * 			with certain tag values. You can use the <code>TagResource</code> operation with a
 * 			resource that already has tags. If you specify a new tag key for the resource, this tag
 * 			is appended to the list of tags associated with the resource. If you specify a tag key
 * 			that is already associated with the resource, the new tag value that you specify
 * 			replaces the previous value for that tag.</p>
 * 		       <p>You can associate as many as 50 tags with a resource. QuickSight supports tagging on data
 * 			set, data source, dashboard, and template. </p>
 * 		       <p>Tagging for QuickSight works in a similar way to tagging for other AWS services, except for
 * 			the following:</p>
 * 		       <ul>
 *             <li>
 *                <p>You can't use tags to track AWS costs for QuickSight. This restriction is because QuickSight
 * 					costs are based on users and SPICE capacity, which aren't taggable
 * 					resources.</p>
 *             </li>
 *             <li>
 *                <p>QuickSight doesn't currently support the Tag Editor for AWS Resource Groups.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, TagResourceCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, TagResourceCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for command's `input` shape.
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
        const clientName = "QuickSightClient";
        const commandName = "TagResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.TagResourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.TagResourceResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_restJson1_1.serializeAws_restJson1TagResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_restJson1_1.deserializeAws_restJson1TagResourceCommand(output, context);
    }
}
exports.TagResourceCommand = TagResourceCommand;
//# sourceMappingURL=TagResourceCommand.js.map