import { __extends } from "tslib";
import { TagResourceRequest } from "../models/models_0";
import {
  deserializeAws_restJson1TagResourceCommand,
  serializeAws_restJson1TagResourceCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Metadata to assign to an AppConfig resource. Tags help organize and categorize your
 *          AppConfig resources. Each tag consists of a key and an optional value, both of which you
 *          define. You can specify a maximum of 50 tags for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppConfigClient, TagResourceCommand } from "@aws-sdk/client-appconfig"; // ES Modules import
 * // const { AppConfigClient, TagResourceCommand } = require("@aws-sdk/client-appconfig"); // CommonJS import
 * const client = new AppConfigClient(config);
 * const command = new TagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TagResourceCommandInput} for command's `input` shape.
 * @see {@link TagResourceCommandOutput} for command's `response` shape.
 * @see {@link AppConfigClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TagResourceCommand = /** @class */ (function (_super) {
  __extends(TagResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function TagResourceCommand(input) {
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
  TagResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppConfigClient";
    var commandName = "TagResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: TagResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TagResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1TagResourceCommand(input, context);
  };
  TagResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1TagResourceCommand(output, context);
  };
  return TagResourceCommand;
})($Command);
export { TagResourceCommand };
//# sourceMappingURL=TagResourceCommand.js.map
