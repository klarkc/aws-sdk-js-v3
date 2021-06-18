import { __extends } from "tslib";
import { DescribeObservationRequest, DescribeObservationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeObservationCommand,
  serializeAws_json1_1DescribeObservationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an anomaly or error with the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeObservationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeObservationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeObservationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeObservationCommandInput} for command's `input` shape.
 * @see {@link DescribeObservationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeObservationCommand = /** @class */ (function (_super) {
  __extends(DescribeObservationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeObservationCommand(input) {
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
  DescribeObservationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DescribeObservationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeObservationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeObservationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeObservationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeObservationCommand(input, context);
  };
  DescribeObservationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeObservationCommand(output, context);
  };
  return DescribeObservationCommand;
})($Command);
export { DescribeObservationCommand };
//# sourceMappingURL=DescribeObservationCommand.js.map
