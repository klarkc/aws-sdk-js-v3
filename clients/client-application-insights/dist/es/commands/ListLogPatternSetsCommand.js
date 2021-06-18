import { __extends } from "tslib";
import { ListLogPatternSetsRequest, ListLogPatternSetsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListLogPatternSetsCommand,
  serializeAws_json1_1ListLogPatternSetsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the log pattern sets in the specific application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListLogPatternSetsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListLogPatternSetsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new ListLogPatternSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLogPatternSetsCommandInput} for command's `input` shape.
 * @see {@link ListLogPatternSetsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListLogPatternSetsCommand = /** @class */ (function (_super) {
  __extends(ListLogPatternSetsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListLogPatternSetsCommand(input) {
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
  ListLogPatternSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "ListLogPatternSetsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListLogPatternSetsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListLogPatternSetsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListLogPatternSetsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListLogPatternSetsCommand(input, context);
  };
  ListLogPatternSetsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListLogPatternSetsCommand(output, context);
  };
  return ListLogPatternSetsCommand;
})($Command);
export { ListLogPatternSetsCommand };
//# sourceMappingURL=ListLogPatternSetsCommand.js.map
