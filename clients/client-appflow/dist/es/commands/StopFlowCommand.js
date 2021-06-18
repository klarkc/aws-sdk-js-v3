import { __extends } from "tslib";
import { StopFlowRequest, StopFlowResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StopFlowCommand,
  serializeAws_restJson1StopFlowCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 * Deactivates the existing flow. For on-demand flows, this operation returns an <code>unsupportedOperationException</code> error message. For schedule and event-triggered flows, this operation deactivates the flow.
 * </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppflowClient, StopFlowCommand } from "@aws-sdk/client-appflow"; // ES Modules import
 * // const { AppflowClient, StopFlowCommand } = require("@aws-sdk/client-appflow"); // CommonJS import
 * const client = new AppflowClient(config);
 * const command = new StopFlowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopFlowCommandInput} for command's `input` shape.
 * @see {@link StopFlowCommandOutput} for command's `response` shape.
 * @see {@link AppflowClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopFlowCommand = /** @class */ (function (_super) {
  __extends(StopFlowCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopFlowCommand(input) {
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
  StopFlowCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppflowClient";
    var commandName = "StopFlowCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopFlowRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopFlowResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopFlowCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1StopFlowCommand(input, context);
  };
  StopFlowCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1StopFlowCommand(output, context);
  };
  return StopFlowCommand;
})($Command);
export { StopFlowCommand };
//# sourceMappingURL=StopFlowCommand.js.map
