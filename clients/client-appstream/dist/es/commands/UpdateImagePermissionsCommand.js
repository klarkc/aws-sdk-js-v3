import { __extends } from "tslib";
import { UpdateImagePermissionsRequest, UpdateImagePermissionsResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateImagePermissionsCommand,
  serializeAws_json1_1UpdateImagePermissionsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds or updates permissions for the specified private image. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, UpdateImagePermissionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, UpdateImagePermissionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new UpdateImagePermissionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateImagePermissionsCommandInput} for command's `input` shape.
 * @see {@link UpdateImagePermissionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateImagePermissionsCommand = /** @class */ (function (_super) {
  __extends(UpdateImagePermissionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateImagePermissionsCommand(input) {
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
  UpdateImagePermissionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "UpdateImagePermissionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateImagePermissionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateImagePermissionsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateImagePermissionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UpdateImagePermissionsCommand(input, context);
  };
  UpdateImagePermissionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UpdateImagePermissionsCommand(output, context);
  };
  return UpdateImagePermissionsCommand;
})($Command);
export { UpdateImagePermissionsCommand };
//# sourceMappingURL=UpdateImagePermissionsCommand.js.map
