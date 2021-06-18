import { __extends } from "tslib";
import { StopFleetRequest, StopFleetResult } from "../models/models_0";
import { deserializeAws_json1_1StopFleetCommand, serializeAws_json1_1StopFleetCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StopFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StopFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new StopFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopFleetCommandInput} for command's `input` shape.
 * @see {@link StopFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopFleetCommand = /** @class */ (function (_super) {
  __extends(StopFleetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopFleetCommand(input) {
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
  StopFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "StopFleetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopFleetResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopFleetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StopFleetCommand(input, context);
  };
  StopFleetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StopFleetCommand(output, context);
  };
  return StopFleetCommand;
})($Command);
export { StopFleetCommand };
//# sourceMappingURL=StopFleetCommand.js.map
