"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestFunctionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class TestFunctionCommand extends smithy_client_1.Command {
  // Start section: command_properties
  // End section: command_properties
  constructor(input) {
    // Start section: command_constructor
    super();
    this.input = input;
    // End section: command_constructor
  }
  /**
   * @internal
   */
  resolveMiddleware(clientStack, configuration, options) {
    this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
    const stack = clientStack.concat(this.middlewareStack);
    const { logger } = configuration;
    const clientName = "CloudFrontClient";
    const commandName = "TestFunctionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_1_1.TestFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_1_1.TestFunctionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restXml_1.serializeAws_restXmlTestFunctionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restXml_1.deserializeAws_restXmlTestFunctionCommand(output, context);
  }
}
exports.TestFunctionCommand = TestFunctionCommand;
//# sourceMappingURL=TestFunctionCommand.js.map
