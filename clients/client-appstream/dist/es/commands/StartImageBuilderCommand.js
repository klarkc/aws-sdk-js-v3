import { __extends } from "tslib";
import { StartImageBuilderRequest, StartImageBuilderResult } from "../models/models_0";
import {
  deserializeAws_json1_1StartImageBuilderCommand,
  serializeAws_json1_1StartImageBuilderCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts the specified image builder.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, StartImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, StartImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new StartImageBuilderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartImageBuilderCommandInput} for command's `input` shape.
 * @see {@link StartImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartImageBuilderCommand = /** @class */ (function (_super) {
  __extends(StartImageBuilderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartImageBuilderCommand(input) {
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
  StartImageBuilderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "StartImageBuilderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartImageBuilderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartImageBuilderResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartImageBuilderCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StartImageBuilderCommand(input, context);
  };
  StartImageBuilderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StartImageBuilderCommand(output, context);
  };
  return StartImageBuilderCommand;
})($Command);
export { StartImageBuilderCommand };
//# sourceMappingURL=StartImageBuilderCommand.js.map
