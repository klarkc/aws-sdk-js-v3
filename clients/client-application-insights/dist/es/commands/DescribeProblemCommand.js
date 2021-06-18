import { __extends } from "tslib";
import { DescribeProblemRequest, DescribeProblemResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProblemCommand,
  serializeAws_json1_1DescribeProblemCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an application problem.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeProblemCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeProblemCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeProblemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProblemCommandInput} for command's `input` shape.
 * @see {@link DescribeProblemCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProblemCommand = /** @class */ (function (_super) {
  __extends(DescribeProblemCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeProblemCommand(input) {
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
  DescribeProblemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DescribeProblemCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeProblemRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProblemResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeProblemCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeProblemCommand(input, context);
  };
  DescribeProblemCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeProblemCommand(output, context);
  };
  return DescribeProblemCommand;
})($Command);
export { DescribeProblemCommand };
//# sourceMappingURL=DescribeProblemCommand.js.map
