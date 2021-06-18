import { __extends } from "tslib";
import { DescribeFunctionRequest, DescribeFunctionResult } from "../models/models_0";
import {
  deserializeAws_restXmlDescribeFunctionCommand,
  serializeAws_restXmlDescribeFunctionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets configuration information and metadata about a CloudFront function, but not the function’s
 * 			code. To get a function’s code, use <code>GetFunction</code>.</p>
 * 		       <p>To get configuration information and metadata about a function, you must provide the
 * 			function’s name and stage. To get these values, you can use
 * 			<code>ListFunctions</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DescribeFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DescribeFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DescribeFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFunctionCommandInput} for command's `input` shape.
 * @see {@link DescribeFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFunctionCommand = /** @class */ (function (_super) {
  __extends(DescribeFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeFunctionCommand(input) {
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
  DescribeFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "DescribeFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeFunctionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlDescribeFunctionCommand(input, context);
  };
  DescribeFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlDescribeFunctionCommand(output, context);
  };
  return DescribeFunctionCommand;
})($Command);
export { DescribeFunctionCommand };
//# sourceMappingURL=DescribeFunctionCommand.js.map
