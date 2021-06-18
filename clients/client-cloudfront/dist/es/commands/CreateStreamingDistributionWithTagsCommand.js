import { __extends } from "tslib";
import {
  CreateStreamingDistributionWithTagsRequest,
  CreateStreamingDistributionWithTagsResult,
} from "../models/models_0";
import {
  deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand,
  serializeAws_restXmlCreateStreamingDistributionWithTagsCommand,
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
 * import { CloudFrontClient, CreateStreamingDistributionWithTagsCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateStreamingDistributionWithTagsCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateStreamingDistributionWithTagsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateStreamingDistributionWithTagsCommandInput} for command's `input` shape.
 * @see {@link CreateStreamingDistributionWithTagsCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateStreamingDistributionWithTagsCommand = /** @class */ (function (_super) {
  __extends(CreateStreamingDistributionWithTagsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateStreamingDistributionWithTagsCommand(input) {
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
  CreateStreamingDistributionWithTagsCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateStreamingDistributionWithTagsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateStreamingDistributionWithTagsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateStreamingDistributionWithTagsResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateStreamingDistributionWithTagsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateStreamingDistributionWithTagsCommand(input, context);
  };
  CreateStreamingDistributionWithTagsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateStreamingDistributionWithTagsCommand(output, context);
  };
  return CreateStreamingDistributionWithTagsCommand;
})($Command);
export { CreateStreamingDistributionWithTagsCommand };
//# sourceMappingURL=CreateStreamingDistributionWithTagsCommand.js.map
