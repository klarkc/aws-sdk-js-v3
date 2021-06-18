import { __extends } from "tslib";
import { TestFunctionRequest, TestFunctionResult } from "../models/models_1";
import {
  deserializeAws_restXmlTestFunctionCommand,
  serializeAws_restXmlTestFunctionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tests a CloudFront function.</p>
 * 		       <p>To test a function, you provide an <i>event object</i> that represents an HTTP
 * 			request or response that your CloudFront distribution could receive in production. CloudFront runs
 * 			the function, passing it the event object that you provided, and returns the function’s
 * 			result (the modified event object) in the response. The response also contains function
 * 			logs and error messages, if any exist. For more information about testing functions, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/managing-functions.html#test-function">Testing functions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 * 		       <p>To test a function, you provide the function’s name and version (<code>ETag</code> value)
 * 			along with the event object. To get the function’s name and version, you can use
 * 			<code>ListFunctions</code> and <code>DescribeFunction</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, TestFunctionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, TestFunctionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new TestFunctionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestFunctionCommandInput} for command's `input` shape.
 * @see {@link TestFunctionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestFunctionCommand = /** @class */ (function (_super) {
  __extends(TestFunctionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function TestFunctionCommand(input) {
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
  TestFunctionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "TestFunctionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: TestFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: TestFunctionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  TestFunctionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlTestFunctionCommand(input, context);
  };
  TestFunctionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlTestFunctionCommand(output, context);
  };
  return TestFunctionCommand;
})($Command);
export { TestFunctionCommand };
//# sourceMappingURL=TestFunctionCommand.js.map
