import { __extends } from "tslib";
import { GetRealtimeLogConfigRequest, GetRealtimeLogConfigResult } from "../models/models_1";
import {
  deserializeAws_restXmlGetRealtimeLogConfigCommand,
  serializeAws_restXmlGetRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a real-time log configuration.</p>
 * 		       <p>To get a real-time log configuration, you can provide the configuration’s name or its Amazon
 * 			Resource Name (ARN). You must provide at least one. If you provide both, CloudFront uses the
 * 			name to identify the real-time log configuration to get.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link GetRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRealtimeLogConfigCommand = /** @class */ (function (_super) {
  __extends(GetRealtimeLogConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetRealtimeLogConfigCommand(input) {
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
  GetRealtimeLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "GetRealtimeLogConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRealtimeLogConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetRealtimeLogConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlGetRealtimeLogConfigCommand(input, context);
  };
  GetRealtimeLogConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlGetRealtimeLogConfigCommand(output, context);
  };
  return GetRealtimeLogConfigCommand;
})($Command);
export { GetRealtimeLogConfigCommand };
//# sourceMappingURL=GetRealtimeLogConfigCommand.js.map
