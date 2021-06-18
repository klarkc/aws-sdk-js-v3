"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListJobsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Returns a list of AWS Batch jobs.</p>
 *          <p>You must specify only one of the following items:</p>
 *          <ul>
 *             <li>
 *                <p>A job queue ID to return a list of jobs in that job queue</p>
 *             </li>
 *             <li>
 *                <p>A multi-node parallel job ID to return a list of nodes for that job</p>
 *             </li>
 *             <li>
 *                <p>An array job ID to return a list of the children for that job</p>
 *             </li>
 *          </ul>
 *          <p>You can filter the results by job status with the <code>jobStatus</code> parameter. If you don't specify a
 *    status, only <code>RUNNING</code> jobs are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, ListJobsCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, ListJobsCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new ListJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListJobsCommandInput} for command's `input` shape.
 * @see {@link ListJobsCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListJobsCommand extends smithy_client_1.Command {
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
    const commandName = "ListJobsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.ListJobsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.ListJobsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1ListJobsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1ListJobsCommand(output, context);
  }
}
exports.ListJobsCommand = ListJobsCommand;
//# sourceMappingURL=ListJobsCommand.js.map
