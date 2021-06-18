"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteJobQueueCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified job queue. You must first disable submissions for a queue with the <a>UpdateJobQueue</a> operation. All jobs in the queue are eventually terminated when you delete a job queue.
 *    The jobs are terminated at a rate of about 16 jobs each second.</p>
 *          <p>It's not necessary to disassociate compute environments from a queue before submitting a
 *     <code>DeleteJobQueue</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, DeleteJobQueueCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, DeleteJobQueueCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new DeleteJobQueueCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteJobQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteJobQueueCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteJobQueueCommand extends smithy_client_1.Command {
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
    const clientName = "BatchClient";
    const commandName = "DeleteJobQueueCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeleteJobQueueRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DeleteJobQueueResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1DeleteJobQueueCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1DeleteJobQueueCommand(output, context);
  }
}
exports.DeleteJobQueueCommand = DeleteJobQueueCommand;
//# sourceMappingURL=DeleteJobQueueCommand.js.map
