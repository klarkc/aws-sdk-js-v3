import { __extends } from "tslib";
import { DescribeConfigurationsRequest, DescribeConfigurationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeConfigurationsCommand,
  serializeAws_json1_1DescribeConfigurationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeConfigurationsCommand = /** @class */ (function (_super) {
  __extends(DescribeConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeConfigurationsCommand(input) {
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
  DescribeConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "DescribeConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeConfigurationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeConfigurationsCommand(input, context);
  };
  DescribeConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeConfigurationsCommand(output, context);
  };
  return DescribeConfigurationsCommand;
})($Command);
export { DescribeConfigurationsCommand };
//# sourceMappingURL=DescribeConfigurationsCommand.js.map
