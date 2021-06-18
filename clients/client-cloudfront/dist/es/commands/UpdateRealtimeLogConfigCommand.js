import { __extends } from "tslib";
import { UpdateRealtimeLogConfigRequest, UpdateRealtimeLogConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlUpdateRealtimeLogConfigCommand,
  serializeAws_restXmlUpdateRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a real-time log configuration.</p>
 * 		       <p>When you update a real-time log configuration, all the parameters are updated with the
 * 			values provided in the request. You cannot update some parameters independent of others.
 * 			To update a real-time log configuration:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Call <code>GetRealtimeLogConfig</code> to get the current real-time log
 * 					configuration.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Locally modify the parameters in the real-time log configuration that you want
 * 					to update.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Call this API (<code>UpdateRealtimeLogConfig</code>) by providing the entire
 * 					real-time log configuration, including the parameters that you modified and
 * 					those that you didn’t.</p>
 * 			         </li>
 *          </ol>
 * 		       <p>You cannot update a real-time log configuration’s <code>Name</code> or
 * 			<code>ARN</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new UpdateRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRealtimeLogConfigCommand = /** @class */ (function (_super) {
  __extends(UpdateRealtimeLogConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateRealtimeLogConfigCommand(input) {
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
  UpdateRealtimeLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "UpdateRealtimeLogConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateRealtimeLogConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateRealtimeLogConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlUpdateRealtimeLogConfigCommand(input, context);
  };
  UpdateRealtimeLogConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlUpdateRealtimeLogConfigCommand(output, context);
  };
  return UpdateRealtimeLogConfigCommand;
})($Command);
export { UpdateRealtimeLogConfigCommand };
//# sourceMappingURL=UpdateRealtimeLogConfigCommand.js.map
