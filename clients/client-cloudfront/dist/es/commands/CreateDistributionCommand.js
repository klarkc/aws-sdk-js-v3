import { __extends } from "tslib";
import { CreateDistributionRequest, CreateDistributionResult } from "../models/models_0";
import {
  deserializeAws_restXmlCreateDistributionCommand,
  serializeAws_restXmlCreateDistributionCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you
 * 			want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the
 * 			<code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p>
 * 		       <important>
 *             <p>When you update a distribution, there are more required fields than when you create a distribution.
 * 			When you update your distribution by using
 * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>,
 * 			follow the steps included
 * 			in the documentation to get the current configuration
 * 			and then make your updates. This helps to make sure that you include all of the required fields. To view a summary,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required
 * 				Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateDistributionCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateDistributionCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new CreateDistributionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDistributionCommandInput} for command's `input` shape.
 * @see {@link CreateDistributionCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDistributionCommand = /** @class */ (function (_super) {
  __extends(CreateDistributionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateDistributionCommand(input) {
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
  CreateDistributionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "CreateDistributionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateDistributionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDistributionResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateDistributionCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlCreateDistributionCommand(input, context);
  };
  CreateDistributionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlCreateDistributionCommand(output, context);
  };
  return CreateDistributionCommand;
})($Command);
export { CreateDistributionCommand };
//# sourceMappingURL=CreateDistributionCommand.js.map
