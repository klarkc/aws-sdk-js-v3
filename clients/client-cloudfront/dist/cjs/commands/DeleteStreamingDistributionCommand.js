"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStreamingDistributionCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API,
 * 			perform the following steps.</p>
 *
 * 		       <p>
 *             <b>To delete an RTMP distribution using the CloudFront
 * 			API</b>:</p>
 * 		       <ol>
 *             <li>
 * 				           <p>Disable the RTMP distribution.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current
 * 					configuration and the <code>Etag</code> header for the distribution. </p>
 * 			         </li>
 *             <li>
 * 				           <p>Update the XML document that was returned in the response to your <code>GET
 * 						Streaming Distribution Config</code> request to change the value of <code>Enabled</code>
 * 					to <code>false</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the
 * 					configuration for your distribution. In the request body, include the XML document that
 * 					you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the
 * 					value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET
 * 						Streaming Distribution Config</code> request in Step 2.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Review the response to the <code>PUT Streaming Distribution Config</code> request
 * 					to confirm that the distribution was successfully disabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that
 * 					your changes have propagated. When propagation is complete, the value of
 * 						<code>Status</code> is <code>Deployed</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the
 * 					HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront
 * 					returned when you submitted the <code>GET Streaming Distribution Config</code> request in
 * 					Step 2.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Review the response to your <code>DELETE Streaming Distribution</code> request to
 * 					confirm that the distribution was successfully deleted.</p>
 * 			         </li>
 *          </ol>
 * 		       <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, DeleteStreamingDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, DeleteStreamingDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new DeleteStreamingDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteStreamingDistributionCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamingDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DeleteStreamingDistributionCommand extends smithy_client_1.Command {
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
    const commandName = "DeleteStreamingDistributionCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DeleteStreamingDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restXml_1.serializeAws_restXmlDeleteStreamingDistributionCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restXml_1.deserializeAws_restXmlDeleteStreamingDistributionCommand(output, context);
  }
}
exports.DeleteStreamingDistributionCommand = DeleteStreamingDistributionCommand;
//# sourceMappingURL=DeleteStreamingDistributionCommand.js.map
