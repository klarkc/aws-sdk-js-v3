"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagsToResourceCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Adds metadata tags to an Amazon Neptune resource. These tags can also be used with cost
 *       allocation reporting to track cost associated with Amazon Neptune resources, or used in a
 *       Condition statement in an IAM policy for Amazon Neptune.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, AddTagsToResourceCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, AddTagsToResourceCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const command = new AddTagsToResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddTagsToResourceCommandInput} for command's `input` shape.
 * @see {@link AddTagsToResourceCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for command's `input` shape.
 *
 */
class AddTagsToResourceCommand extends smithy_client_1.Command {
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
        const clientName = "NeptuneClient";
        const commandName = "AddTagsToResourceCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.AddTagsToResourceMessage.filterSensitiveLog,
            outputFilterSensitiveLog: (output) => output,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryAddTagsToResourceCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryAddTagsToResourceCommand(output, context);
    }
}
exports.AddTagsToResourceCommand = AddTagsToResourceCommand;
//# sourceMappingURL=AddTagsToResourceCommand.js.map