import { __extends } from "tslib";
import { PublishFunctionRequest, PublishFunctionResult } from "../models/models_1";
import {
  deserializeAws_restXmlPublishFunctionCommand,
  serializeAws_restXmlPublishFunctionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Publishes a CloudFront function by copying the function code from the <code>DEVELOPMENT</code>
 * 			stage to <code>LIVE</code>. This automatically updates all cache behaviors that are
 * 			using this function to use the newly published copy in the <code>LIVE</code>
 * 			stage.</p>
 * 		       <p>When a function is published to the <code>LIVE</code> stage, you can attach the function to
 * 			a distribution’s cache behavior, using the function’s Amazon Resource Name (ARN).</p>
 * 		       <p>To publish a function, you must provide the function’s name and version (<code>ETag</code>
 * 			value). To get these values, you can use <code>ListFunctions</code> and
 * 			<code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, PublishFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, PublishFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new PublishFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PublishFunctionCommandInput} for command's `input` shape.
 * @see {@link PublishFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PublishFunctionCommand = /** @class */ (function (_super) {
  __extends(PublishFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function PublishFunctionCommand(input) {
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
  PublishFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "PublishFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: PublishFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PublishFunctionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  PublishFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlPublishFunctionCommand(input, context);
  };
  PublishFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlPublishFunctionCommand(output, context);
  };
  return PublishFunctionCommand;
})($Command);
export { PublishFunctionCommand };
//# sourceMappingURL=PublishFunctionCommand.js.map
