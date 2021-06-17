"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRoleTagsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Lists the tags that are attached to the specified role. The returned list of tags is
 *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRoleTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRoleTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListRoleTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRoleTagsCommandInput} for command's `input` shape.
 * @see {@link ListRoleTagsCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListRoleTagsCommand extends smithy_client_1.Command {
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
        const commandName = "ListRoleTagsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ListRoleTagsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ListRoleTagsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryListRoleTagsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryListRoleTagsCommand(output, context);
    }
}
exports.ListRoleTagsCommand = ListRoleTagsCommand;
//# sourceMappingURL=ListRoleTagsCommand.js.map