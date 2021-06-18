import { __extends } from "tslib";
import { DeleteImagePermissionsRequest, DeleteImagePermissionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteImagePermissionsCommand,
  serializeAws_json1_1DeleteImagePermissionsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes permissions for the specified private image. After you delete permissions for an image, AWS accounts to which you previously granted these permissions can no longer use the image.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DeleteImagePermissionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DeleteImagePermissionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new DeleteImagePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link DeleteImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteImagePermissionsCommand = /** @class */ (function (_super) {
  __extends(DeleteImagePermissionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteImagePermissionsCommand(input) {
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
  DeleteImagePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "DeleteImagePermissionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteImagePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteImagePermissionsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteImagePermissionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DeleteImagePermissionsCommand(input, context);
  };
  DeleteImagePermissionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DeleteImagePermissionsCommand(output, context);
  };
  return DeleteImagePermissionsCommand;
})($Command);
export { DeleteImagePermissionsCommand };
//# sourceMappingURL=DeleteImagePermissionsCommand.js.map
