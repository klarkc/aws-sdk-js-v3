"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCachePolicyCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Deletes a cache policy.</p>
 * 		       <p>You cannot delete a cache policy if it’s attached to a cache behavior. First update your
 * 			distributions to remove the cache policy from all cache behaviors, then delete the cache
 * 			policy.</p>
 * 		       <p>To delete a cache policy, you must provide the policy’s identifier and version. To get these
 * 			values, you can use <code>ListCachePolicies</code> or
 * 			<code>GetCachePolicy</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteCachePolicyCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteCachePolicyCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteCachePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCachePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteCachePolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteCachePolicyCommand extends smithy_client_1.Command {
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
    const commandName = "DeleteCachePolicyCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeleteCachePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restXml_1.serializeAws_restXmlDeleteCachePolicyCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restXml_1.deserializeAws_restXmlDeleteCachePolicyCommand(output, context);
  }
}
exports.DeleteCachePolicyCommand = DeleteCachePolicyCommand;
//# sourceMappingURL=DeleteCachePolicyCommand.js.map
