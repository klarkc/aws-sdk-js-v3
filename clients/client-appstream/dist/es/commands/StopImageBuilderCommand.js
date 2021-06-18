import { __extends } from "tslib";
import { StopImageBuilderRequest, StopImageBuilderResult } from "../models/models_0";
import {
  deserializeAws_json1_1StopImageBuilderCommand,
  serializeAws_json1_1StopImageBuilderCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the specified image builder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StopImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StopImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new StopImageBuilderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopImageBuilderCommandInput} for command's `input` shape.
 * @see {@link StopImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopImageBuilderCommand = /** @class */ (function (_super) {
  __extends(StopImageBuilderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopImageBuilderCommand(input) {
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
  StopImageBuilderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "StopImageBuilderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopImageBuilderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopImageBuilderResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopImageBuilderCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StopImageBuilderCommand(input, context);
  };
  StopImageBuilderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StopImageBuilderCommand(output, context);
  };
  return StopImageBuilderCommand;
})($Command);
export { StopImageBuilderCommand };
//# sourceMappingURL=StopImageBuilderCommand.js.map
