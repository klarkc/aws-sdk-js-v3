import { __extends } from "tslib";
import { StartFleetRequest, StartFleetResult } from "../models/models_0";
import {
  deserializeAws_json1_1StartFleetCommand,
  serializeAws_json1_1StartFleetCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the specified fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StartFleetCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StartFleetCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new StartFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFleetCommandInput} for command's `input` shape.
 * @see {@link StartFleetCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartFleetCommand = /** @class */ (function (_super) {
  __extends(StartFleetCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartFleetCommand(input) {
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
  StartFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "StartFleetCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartFleetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartFleetResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartFleetCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StartFleetCommand(input, context);
  };
  StartFleetCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StartFleetCommand(output, context);
  };
  return StartFleetCommand;
})($Command);
export { StartFleetCommand };
//# sourceMappingURL=StartFleetCommand.js.map
