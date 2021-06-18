"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCachePolicyConfigCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets a cache policy configuration.</p>
 * 		       <p>To get a cache policy configuration, you must provide the policy’s identifier. If the cache
 * 			policy is attached to a distribution’s cache behavior, you can get the policy’s
 * 			identifier using <code>ListDistributions</code> or <code>GetDistribution</code>. If the
 * 			cache policy is not attached to a cache behavior, you can get the identifier using
 * 			<code>ListCachePolicies</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetCachePolicyConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetCachePolicyConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new GetCachePolicyConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCachePolicyConfigCommandInput} for command's `input` shape.
 * @see {@link GetCachePolicyConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetCachePolicyConfigCommand extends smithy_client_1.Command {
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
    const commandName = "GetCachePolicyConfigCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.GetCachePolicyConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.GetCachePolicyConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restXml_1.serializeAws_restXmlGetCachePolicyConfigCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restXml_1.deserializeAws_restXmlGetCachePolicyConfigCommand(output, context);
  }
}
exports.GetCachePolicyConfigCommand = GetCachePolicyConfigCommand;
//# sourceMappingURL=GetCachePolicyConfigCommand.js.map
