import { __extends } from "tslib";
import { CreateRealtimeLogConfigRequest, CreateRealtimeLogConfigResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateRealtimeLogConfigCommand,
  serializeAws_restXmlCreateRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a real-time log configuration.</p>
 * 		       <p>After you create a real-time log configuration, you can attach it to one or more cache
 * 			behaviors to send real-time log data to the specified Amazon Kinesis data stream.</p>
 * 		       <p>For more information about real-time log configurations, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html">Real-time logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link CreateRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRealtimeLogConfigCommand = /** @class */ (function (_super) {
  __extends(CreateRealtimeLogConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateRealtimeLogConfigCommand(input) {
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
  CreateRealtimeLogConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateRealtimeLogConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRealtimeLogConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateRealtimeLogConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateRealtimeLogConfigCommand(input, context);
  };
  CreateRealtimeLogConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateRealtimeLogConfigCommand(output, context);
  };
  return CreateRealtimeLogConfigCommand;
})($Command);
export { CreateRealtimeLogConfigCommand };
//# sourceMappingURL=CreateRealtimeLogConfigCommand.js.map
