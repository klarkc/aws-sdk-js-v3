import { __extends } from "tslib";
import { ListProblemsRequest, ListProblemsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListProblemsCommand,
  serializeAws_json1_1ListProblemsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the problems with your application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, ListProblemsCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, ListProblemsCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new ListProblemsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProblemsCommandInput} for command's `input` shape.
 * @see {@link ListProblemsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProblemsCommand = /** @class */ (function (_super) {
  __extends(ListProblemsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListProblemsCommand(input) {
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
  ListProblemsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "ListProblemsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListProblemsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListProblemsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListProblemsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1ListProblemsCommand(input, context);
  };
  ListProblemsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1ListProblemsCommand(output, context);
  };
  return ListProblemsCommand;
})($Command);
export { ListProblemsCommand };
//# sourceMappingURL=ListProblemsCommand.js.map
