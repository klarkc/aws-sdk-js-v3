import { __extends } from "tslib";
import { DescribeScalingPlanResourcesRequest, DescribeScalingPlanResourcesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingPlanResourcesCommand,
  serializeAws_json1_1DescribeScalingPlanResourcesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the scalable resources in the specified scaling plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingPlansClient, DescribeScalingPlanResourcesCommand } from "@aws-sdk/client-auto-scaling-plans"; // ES Modules import
 * // const { AutoScalingPlansClient, DescribeScalingPlanResourcesCommand } = require("@aws-sdk/client-auto-scaling-plans"); // CommonJS import
 * const client = new AutoScalingPlansClient(config);
 * const command = new DescribeScalingPlanResourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingPlanResourcesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingPlanResourcesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingPlansClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScalingPlanResourcesCommand = /** @class */ (function (_super) {
  __extends(DescribeScalingPlanResourcesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeScalingPlanResourcesCommand(input) {
    var _this =
      // Start section: command_constructor
      _super.call(this) || this;
    _this.input = input;
    return _this;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  DescribeScalingPlanResourcesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AutoScalingPlansClient";
    var commandName = "DescribeScalingPlanResourcesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeScalingPlanResourcesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingPlanResourcesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeScalingPlanResourcesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeScalingPlanResourcesCommand(input, context);
  };
  DescribeScalingPlanResourcesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeScalingPlanResourcesCommand(output, context);
  };
  return DescribeScalingPlanResourcesCommand;
})($Command);
export { DescribeScalingPlanResourcesCommand };
//# sourceMappingURL=DescribeScalingPlanResourcesCommand.js.map
