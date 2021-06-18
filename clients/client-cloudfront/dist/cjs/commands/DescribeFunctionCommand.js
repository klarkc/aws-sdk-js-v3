"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeFunctionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class DescribeFunctionCommand extends smithy_client_1.Command {
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
    const commandName = "DescribeFunctionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeFunctionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeFunctionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restXml_1.serializeAws_restXmlDescribeFunctionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restXml_1.deserializeAws_restXmlDescribeFunctionCommand(output, context);
  }
}
exports.DescribeFunctionCommand = DescribeFunctionCommand;
//# sourceMappingURL=DescribeFunctionCommand.js.map
