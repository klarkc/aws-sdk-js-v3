import { __extends } from "tslib";
import { UpdateLogPatternRequest, UpdateLogPatternResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateLogPatternCommand,
  serializeAws_json1_1UpdateLogPatternCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a log pattern to a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new UpdateLogPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLogPatternCommandInput} for command's `input` shape.
 * @see {@link UpdateLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateLogPatternCommand = /** @class */ (function (_super) {
  __extends(UpdateLogPatternCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateLogPatternCommand(input) {
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
  UpdateLogPatternCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "UpdateLogPatternCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateLogPatternRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateLogPatternResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateLogPatternCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateLogPatternCommand(input, context);
  };
  UpdateLogPatternCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateLogPatternCommand(output, context);
  };
  return UpdateLogPatternCommand;
})($Command);
export { UpdateLogPatternCommand };
//# sourceMappingURL=UpdateLogPatternCommand.js.map
