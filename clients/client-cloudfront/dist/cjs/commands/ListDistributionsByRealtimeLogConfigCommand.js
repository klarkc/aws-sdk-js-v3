"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDistributionsByRealtimeLogConfigCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_restXml_1 = require("../protocols/Aws_restXml");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Gets a list of distributions that have a cache behavior that’s associated with the specified
 * 			real-time log configuration.</p>
 * 		       <p>You can specify the real-time log configuration by its name or its Amazon Resource Name
 * 			(ARN). You must provide at least one. If you provide both, CloudFront uses the name to
 * 			identify the real-time log configuration to list distributions for.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByRealtimeLogConfigCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByRealtimeLogConfigCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByRealtimeLogConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByRealtimeLogConfigCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByRealtimeLogConfigCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
class ListDistributionsByRealtimeLogConfigCommand extends smithy_client_1.Command {
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
    const commandName = "ListDistributionsByRealtimeLogConfigCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_1_1.ListDistributionsByRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_1_1.ListDistributionsByRealtimeLogConfigResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_restXml_1.serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_restXml_1.deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand(output, context);
  }
}
exports.ListDistributionsByRealtimeLogConfigCommand = ListDistributionsByRealtimeLogConfigCommand;
//# sourceMappingURL=ListDistributionsByRealtimeLogConfigCommand.js.map
