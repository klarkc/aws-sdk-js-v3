"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterScalableTargetCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Registers or updates a scalable target. </p>
 *          <p>A scalable target is a resource that Application Auto Scaling can scale out and scale in. Scalable
 *          targets are uniquely identified by the combination of resource ID, scalable dimension, and
 *          namespace. </p>
 *          <p>When you register a new scalable target, you must specify values for minimum and maximum
 *          capacity. Current capacity will be adjusted within the specified range when scaling starts.
 *          Application Auto Scaling scaling policies will not scale capacity to values that are outside of this
 *          range.</p>
 *          <p>After you register a scalable target, you do not need to register it again to use other
 *          Application Auto Scaling operations. To see which resources have been registered, use <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. You can also view the scaling policies for a service
 *          namespace by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DescribeScalableTargets.html">DescribeScalableTargets</a>. If you no longer need a scalable target, you can
 *          deregister it by using <a href="https://docs.aws.amazon.com/autoscaling/application/APIReference/API_DeregisterScalableTarget.html">DeregisterScalableTarget</a>.</p>
 *          <p>To update a scalable target, specify the parameters that you want to change. Include the
 *          parameters that identify the scalable target: resource ID, scalable dimension, and
 *          namespace. Any parameters that you don't specify are not changed by this update request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, RegisterScalableTargetCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, RegisterScalableTargetCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new RegisterScalableTargetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterScalableTargetCommandInput} for command's `input` shape.
 * @see {@link RegisterScalableTargetCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
class RegisterScalableTargetCommand extends smithy_client_1.Command {
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
    const clientName = "ApplicationAutoScalingClient";
    const commandName = "RegisterScalableTargetCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.RegisterScalableTargetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.RegisterScalableTargetResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1RegisterScalableTargetCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1RegisterScalableTargetCommand(output, context);
  }
}
exports.RegisterScalableTargetCommand = RegisterScalableTargetCommand;
//# sourceMappingURL=RegisterScalableTargetCommand.js.map
