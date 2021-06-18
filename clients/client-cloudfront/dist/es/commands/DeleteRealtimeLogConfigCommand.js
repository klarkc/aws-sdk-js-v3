import { __extends } from "tslib";
import { DeleteRealtimeLogConfigRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteRealtimeLogConfigCommand,
  serializeAws_restXmlDeleteRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a real-time log configuration.</p>
 * 		       <p>You cannot delete a real-time log configuration if it’s attached to a cache behavior.
 * 			First update your distributions to remove the real-time log configuration from all cache
 * 			behaviors, then delete the real-time log configuration.</p>
 * 		       <p>To delete a real-time log configuration, you can provide the configuration’s name or its
 * 			Amazon Resource Name (ARN). You must provide at least one. If you provide both, CloudFront
 * 			uses the name to identify the real-time log configuration to delete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRealtimeLogConfigCommand = /** @class */ (function (_super) {
  __extends(DeleteRealtimeLogConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteRealtimeLogConfigCommand(input) {
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
  DeleteRealtimeLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DeleteRealtimeLogConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteRealtimeLogConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDeleteRealtimeLogConfigCommand(input, context);
  };
  DeleteRealtimeLogConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDeleteRealtimeLogConfigCommand(output, context);
  };
  return DeleteRealtimeLogConfigCommand;
})($Command);
export { DeleteRealtimeLogConfigCommand };
//# sourceMappingURL=DeleteRealtimeLogConfigCommand.js.map
