"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitJobCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restJson1_1 = require("../protocols/Aws_restJson1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Submits an AWS Batch job from a job definition. Parameters that are specified during <a>SubmitJob</a>
 *    override parameters defined in the job definition. vCPU and memory requirements that are specified in the
 *     <code>ResourceRequirements</code> objects in the job definition are the exception. They can't be overridden this way
 *    using the <code>memory</code> and <code>vcpus</code> parameters. Rather, you must specify updates to job definition
 *    parameters in a <code>ResourceRequirements</code> object that's included in the <code>containerOverrides</code>
 *    parameter.</p>
 *          <important>
 *             <p>Jobs that run on Fargate resources can't be guaranteed to run for more than 14 days. This is because, after 14
 *     days, Fargate resources might become unavailable and job might be terminated.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, SubmitJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, SubmitJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const command = new SubmitJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubmitJobCommandInput} for command's `input` shape.
 * @see {@link SubmitJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
class SubmitJobCommand extends smithy_client_1.Command {
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
    const commandName = "SubmitJobCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.SubmitJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.SubmitJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restJson1_1.serializeAws_restJson1SubmitJobCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restJson1_1.deserializeAws_restJson1SubmitJobCommand(output, context);
  }
}
exports.SubmitJobCommand = SubmitJobCommand;
//# sourceMappingURL=SubmitJobCommand.js.map
