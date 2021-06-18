"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishFunctionCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class PublishFunctionCommand extends smithy_client_1.Command {
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
    const commandName = "PublishFunctionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_1_1.PublishFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_1_1.PublishFunctionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restXml_1.serializeAws_restXmlPublishFunctionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restXml_1.deserializeAws_restXmlPublishFunctionCommand(output, context);
  }
}
exports.PublishFunctionCommand = PublishFunctionCommand;
//# sourceMappingURL=PublishFunctionCommand.js.map
