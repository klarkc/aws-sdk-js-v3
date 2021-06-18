import { __extends } from "tslib";
import { DescribeLogPatternRequest, DescribeLogPatternResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeLogPatternCommand,
  serializeAws_json1_1DescribeLogPatternCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describe a specific log pattern from a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeLogPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLogPatternCommandInput} for command's `input` shape.
 * @see {@link DescribeLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLogPatternCommand = /** @class */ (function (_super) {
  __extends(DescribeLogPatternCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeLogPatternCommand(input) {
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
  DescribeLogPatternCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DescribeLogPatternCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeLogPatternRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeLogPatternResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeLogPatternCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeLogPatternCommand(input, context);
  };
  DescribeLogPatternCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeLogPatternCommand(output, context);
  };
  return DescribeLogPatternCommand;
})($Command);
export { DescribeLogPatternCommand };
//# sourceMappingURL=DescribeLogPatternCommand.js.map
