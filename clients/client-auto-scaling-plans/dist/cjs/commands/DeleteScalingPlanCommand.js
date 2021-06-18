"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteScalingPlanCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes the specified scaling plan.</p>
 *          <p>Deleting a scaling plan deletes the underlying <a>ScalingInstruction</a> for
 *          all of the scalable resources that are covered by the plan.</p>
 *          <p>If the plan has launched resources or has scaling activities in progress, you must
 *          delete those resources separately.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DeleteScalingPlanCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DeleteScalingPlanCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new DeleteScalingPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteScalingPlanCommandInput} for command's `input` shape.
 * @see {@link DeleteScalingPlanCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteScalingPlanCommand extends smithy_client_1.Command {
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
    const clientName = "AutoScalingPlansClient";
    const commandName = "DeleteScalingPlanCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeleteScalingPlanRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DeleteScalingPlanResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1DeleteScalingPlanCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1DeleteScalingPlanCommand(output, context);
  }
}
exports.DeleteScalingPlanCommand = DeleteScalingPlanCommand;
//# sourceMappingURL=DeleteScalingPlanCommand.js.map
