import { __extends } from "tslib";
import { DeleteApplicationRequest, DeleteApplicationResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteApplicationCommand,
  serializeAws_json1_1DeleteApplicationCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes the specified application from monitoring. Does not delete the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DeleteApplicationCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DeleteApplicationCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DeleteApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteApplicationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteApplicationCommand = /** @class */ (function (_super) {
  __extends(DeleteApplicationCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteApplicationCommand(input) {
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
  DeleteApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DeleteApplicationCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteApplicationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApplicationResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteApplicationCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteApplicationCommand(input, context);
  };
  DeleteApplicationCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteApplicationCommand(output, context);
  };
  return DeleteApplicationCommand;
})($Command);
export { DeleteApplicationCommand };
//# sourceMappingURL=DeleteApplicationCommand.js.map
