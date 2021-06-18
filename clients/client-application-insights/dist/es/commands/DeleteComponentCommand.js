import { __extends } from "tslib";
import { DeleteComponentRequest, DeleteComponentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteComponentCommand,
  serializeAws_json1_1DeleteComponentCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Ungroups a custom component. When you ungroup custom components, all applicable
 *          monitors that are set up for the component are removed and the instances revert to their standalone status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, DeleteComponentCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, DeleteComponentCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new DeleteComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteComponentCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteComponentCommand = /** @class */ (function (_super) {
  __extends(DeleteComponentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteComponentCommand(input) {
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
  DeleteComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "DeleteComponentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteComponentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteComponentCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteComponentCommand(input, context);
  };
  DeleteComponentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteComponentCommand(output, context);
  };
  return DeleteComponentCommand;
})($Command);
export { DeleteComponentCommand };
//# sourceMappingURL=DeleteComponentCommand.js.map
