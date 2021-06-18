import { __extends } from "tslib";
import { DescribeScalingActivitiesRequest, DescribeScalingActivitiesResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeScalingActivitiesCommand,
  serializeAws_json1_1DescribeScalingActivitiesCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides descriptive information about the scaling activities in the specified namespace
 *          from the previous six weeks.</p>
 *          <p>You can filter the results using <code>ResourceId</code> and
 *             <code>ScalableDimension</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationAutoScalingClient, DescribeScalingActivitiesCommand } from "@aws-sdk/client-application-auto-scaling"; // ES Modules import
 * // const { ApplicationAutoScalingClient, DescribeScalingActivitiesCommand } = require("@aws-sdk/client-application-auto-scaling"); // CommonJS import
 * const client = new ApplicationAutoScalingClient(config);
 * const command = new DescribeScalingActivitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeScalingActivitiesCommandInput} for command's `input` shape.
 * @see {@link DescribeScalingActivitiesCommandOutput} for command's `response` shape.
 * @see {@link ApplicationAutoScalingClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeScalingActivitiesCommand = /** @class */ (function (_super) {
  __extends(DescribeScalingActivitiesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeScalingActivitiesCommand(input) {
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
  DescribeScalingActivitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationAutoScalingClient";
    var commandName = "DescribeScalingActivitiesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeScalingActivitiesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeScalingActivitiesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeScalingActivitiesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeScalingActivitiesCommand(input, context);
  };
  DescribeScalingActivitiesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeScalingActivitiesCommand(output, context);
  };
  return DescribeScalingActivitiesCommand;
})($Command);
export { DescribeScalingActivitiesCommand };
//# sourceMappingURL=DescribeScalingActivitiesCommand.js.map
