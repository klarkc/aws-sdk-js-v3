import { __extends } from "tslib";
import { CreateStreamingDistributionRequest, CreateStreamingDistributionResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateStreamingDistributionCommand,
  serializeAws_restXmlCreateStreamingDistributionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This API is deprecated.
 *             Amazon CloudFront is deprecating real-time messaging protocol (RTMP) distributions on December 31, 2020.
 *             For more information, <a href="http://forums.aws.amazon.com/ann.jspa?annID=7356">read the announcement</a> on the Amazon CloudFront discussion forum.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStreamingDistributionCommand = /** @class */ (function (_super) {
  __extends(CreateStreamingDistributionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateStreamingDistributionCommand(input) {
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
  CreateStreamingDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateStreamingDistributionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateStreamingDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingDistributionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateStreamingDistributionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateStreamingDistributionCommand(input, context);
  };
  CreateStreamingDistributionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateStreamingDistributionCommand(output, context);
  };
  return CreateStreamingDistributionCommand;
})($Command);
export { CreateStreamingDistributionCommand };
//# sourceMappingURL=CreateStreamingDistributionCommand.js.map
