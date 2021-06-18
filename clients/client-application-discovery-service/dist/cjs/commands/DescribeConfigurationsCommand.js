"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeConfigurationsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves attributes for a list of configuration item IDs.</p>
 *
 *          <note>
 *             <p>All of the supplied IDs must be for the same asset type from one of the
 *         following:</p>
 *             <ul>
 *                <li>
 *                   <p>server</p>
 *                </li>
 *                <li>
 *                   <p>application</p>
 *                </li>
 *                <li>
 *                   <p>process</p>
 *                </li>
 *                <li>
 *                   <p>connection</p>
 *                </li>
 *             </ul>
 *
 *             <p>Output fields are specific to the asset type specified. For example, the output for a
 *           <i>server</i> configuration item includes a list of attributes about the
 *         server, such as host name, operating system, number of network cards, etc.</p>
 *             <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>AWS Application
 *           Discovery Service User Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeConfigurationsCommand extends smithy_client_1.Command {
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
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "DescribeConfigurationsCommand";
    const handlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: models_0_1.DescribeConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: models_0_1.DescribeConfigurationsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
  }
  serialize(input, context) {
    return Aws_json1_1_1.serializeAws_json1_1DescribeConfigurationsCommand(input, context);
  }
  deserialize(output, context) {
    return Aws_json1_1_1.deserializeAws_json1_1DescribeConfigurationsCommand(output, context);
  }
}
exports.DescribeConfigurationsCommand = DescribeConfigurationsCommand;
//# sourceMappingURL=DescribeConfigurationsCommand.js.map
