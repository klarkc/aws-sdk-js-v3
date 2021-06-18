import { __extends } from "tslib";
import { UntagResourceRequest, UntagResourceResponse } from "../models/models_0";
import {
  deserializeAws_json1_1UntagResourceCommand,
  serializeAws_json1_1UntagResourceCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes tags from an AWS Cloud9 development environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, UntagResourceCommand } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, UntagResourceCommand } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UntagResourceCommand = /** @class */ (function (_super) {
  __extends(UntagResourceCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UntagResourceCommand(input) {
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
  UntagResourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "Cloud9Client";
    var commandName = "UntagResourceCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UntagResourceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UntagResourceResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UntagResourceCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1UntagResourceCommand(input, context);
  };
  UntagResourceCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1UntagResourceCommand(output, context);
  };
  return UntagResourceCommand;
})($Command);
export { UntagResourceCommand };
//# sourceMappingURL=UntagResourceCommand.js.map
