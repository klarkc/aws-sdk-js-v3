import { __extends } from "tslib";
import { UpdateComponentRequest, UpdateComponentResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateComponentCommand,
  serializeAws_json1_1UpdateComponentCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the custom component name and/or the list of resources that make up the
 *          component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationInsightsClient, UpdateComponentCommand } from "@aws-sdk/client-application-insights"; // ES Modules import
 * // const { ApplicationInsightsClient, UpdateComponentCommand } = require("@aws-sdk/client-application-insights"); // CommonJS import
 * const client = new ApplicationInsightsClient(config);
 * const command = new UpdateComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateComponentCommandOutput} for command's `response` shape.
 * @see {@link ApplicationInsightsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateComponentCommand = /** @class */ (function (_super) {
  __extends(UpdateComponentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateComponentCommand(input) {
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
  UpdateComponentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationInsightsClient";
    var commandName = "UpdateComponentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateComponentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateComponentResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateComponentCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateComponentCommand(input, context);
  };
  UpdateComponentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateComponentCommand(output, context);
  };
  return UpdateComponentCommand;
})($Command);
export { UpdateComponentCommand };
//# sourceMappingURL=UpdateComponentCommand.js.map
