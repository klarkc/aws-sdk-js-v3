import { __extends } from "tslib";
import { DeleteImageBuilderRequest, DeleteImageBuilderResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteImageBuilderCommand,
  serializeAws_json1_1DeleteImageBuilderCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified image builder and releases the capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteImageBuilderCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteImageBuilderCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DeleteImageBuilderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImageBuilderCommandInput} for command's `input` shape.
 * @see {@link DeleteImageBuilderCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteImageBuilderCommand = /** @class */ (function (_super) {
  __extends(DeleteImageBuilderCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteImageBuilderCommand(input) {
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
  DeleteImageBuilderCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DeleteImageBuilderCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteImageBuilderRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteImageBuilderResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteImageBuilderCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteImageBuilderCommand(input, context);
  };
  DeleteImageBuilderCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteImageBuilderCommand(output, context);
  };
  return DeleteImageBuilderCommand;
})($Command);
export { DeleteImageBuilderCommand };
//# sourceMappingURL=DeleteImageBuilderCommand.js.map
