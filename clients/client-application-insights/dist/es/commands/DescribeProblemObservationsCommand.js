import { __extends } from "tslib";
import { DescribeProblemObservationsRequest, DescribeProblemObservationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeProblemObservationsCommand,
  serializeAws_json1_1DescribeProblemObservationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the anomalies or errors associated with the problem.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DescribeProblemObservationsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DescribeProblemObservationsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DescribeProblemObservationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeProblemObservationsCommandInput} for command's `input` shape.
 * @see {@link DescribeProblemObservationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeProblemObservationsCommand = /** @class */ (function (_super) {
  __extends(DescribeProblemObservationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeProblemObservationsCommand(input) {
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
  DescribeProblemObservationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DescribeProblemObservationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeProblemObservationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeProblemObservationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeProblemObservationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeProblemObservationsCommand(input, context);
  };
  DescribeProblemObservationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeProblemObservationsCommand(output, context);
  };
  return DescribeProblemObservationsCommand;
})($Command);
export { DescribeProblemObservationsCommand };
//# sourceMappingURL=DescribeProblemObservationsCommand.js.map
