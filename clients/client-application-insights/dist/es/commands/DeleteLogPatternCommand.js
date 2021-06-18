import { __extends } from "tslib";
import { DeleteLogPatternRequest, DeleteLogPatternResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteLogPatternCommand,
  serializeAws_json1_1DeleteLogPatternCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified log pattern from a <code>LogPatternSet</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DeleteLogPatternCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DeleteLogPatternCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DeleteLogPatternCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLogPatternCommandInput} for command's `input` shape.
 * @see {@link DeleteLogPatternCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLogPatternCommand = /** @class */ (function (_super) {
  __extends(DeleteLogPatternCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteLogPatternCommand(input) {
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
  DeleteLogPatternCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DeleteLogPatternCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteLogPatternRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLogPatternResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteLogPatternCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteLogPatternCommand(input, context);
  };
  DeleteLogPatternCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteLogPatternCommand(output, context);
  };
  return DeleteLogPatternCommand;
})($Command);
export { DeleteLogPatternCommand };
//# sourceMappingURL=DeleteLogPatternCommand.js.map
