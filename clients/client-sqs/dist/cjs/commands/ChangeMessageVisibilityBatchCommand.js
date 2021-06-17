"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeMessageVisibilityBatchCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Changes the visibility timeout of multiple messages. This is a batch version of <code>
 *                <a>ChangeMessageVisibility</a>.</code> The result of the action on each message is reported individually in the response.
 *           You can send up to 10 <code>
 *                <a>ChangeMessageVisibility</a>
 *             </code> requests with each <code>ChangeMessageVisibilityBatch</code> action.</p>
 *          <important>
 *             <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
 *          </important>
 *          <p>Some actions take lists of parameters. These lists are specified using the <code>param.n</code> notation. Values of <code>n</code> are integers starting from 1. For example, a parameter list with two elements looks like this:</p>
 *          <p>
 *             <code>&AttributeName.1=first</code>
 *          </p>
 *          <p>
 *             <code>&AttributeName.2=second</code>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ChangeMessageVisibilityBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ChangeMessageVisibilityBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const command = new ChangeMessageVisibilityBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ChangeMessageVisibilityBatchCommandInput} for command's `input` shape.
 * @see {@link ChangeMessageVisibilityBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ChangeMessageVisibilityBatchCommand extends smithy_client_1.Command {
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
        const clientName = "SQSClient";
        const commandName = "ChangeMessageVisibilityBatchCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.ChangeMessageVisibilityBatchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.ChangeMessageVisibilityBatchResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryChangeMessageVisibilityBatchCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryChangeMessageVisibilityBatchCommand(output, context);
    }
}
exports.ChangeMessageVisibilityBatchCommand = ChangeMessageVisibilityBatchCommand;
//# sourceMappingURL=ChangeMessageVisibilityBatchCommand.js.map