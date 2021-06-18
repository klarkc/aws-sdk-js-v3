import { __extends } from "tslib";
import { CopyImageRequest, CopyImageResponse } from "../models/models_0";
import { deserializeAws_json1_1CopyImageCommand, serializeAws_json1_1CopyImageCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Copies the image within the same region or to a new region within the same AWS account. Note that any tags you added to the image will not be copied.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, CopyImageCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, CopyImageCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * const client = new AppStreamClient(config);
 * const command = new CopyImageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CopyImageCommandInput} for command's `input` shape.
 * @see {@link CopyImageCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CopyImageCommand = /** @class */ (function (_super) {
  __extends(CopyImageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CopyImageCommand(input) {
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
  CopyImageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppStreamClient";
    var commandName = "CopyImageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CopyImageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CopyImageResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CopyImageCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1CopyImageCommand(input, context);
  };
  CopyImageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1CopyImageCommand(output, context);
  };
  return CopyImageCommand;
})($Command);
export { CopyImageCommand };
//# sourceMappingURL=CopyImageCommand.js.map
