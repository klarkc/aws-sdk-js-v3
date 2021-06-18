import { __extends } from "tslib";
import {
  ListDistributionsByOriginRequestPolicyIdRequest,
  ListDistributionsByOriginRequestPolicyIdResult,
} from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand,
  serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that’s
 * 			associated with the specified origin request policy.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByOriginRequestPolicyIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByOriginRequestPolicyIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByOriginRequestPolicyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByOriginRequestPolicyIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByOriginRequestPolicyIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDistributionsByOriginRequestPolicyIdCommand = /** @class */ (function (_super) {
  __extends(ListDistributionsByOriginRequestPolicyIdCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDistributionsByOriginRequestPolicyIdCommand(input) {
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
  ListDistributionsByOriginRequestPolicyIdCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListDistributionsByOriginRequestPolicyIdCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDistributionsByOriginRequestPolicyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByOriginRequestPolicyIdResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDistributionsByOriginRequestPolicyIdCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand(input, context);
  };
  ListDistributionsByOriginRequestPolicyIdCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListDistributionsByOriginRequestPolicyIdCommand(output, context);
  };
  return ListDistributionsByOriginRequestPolicyIdCommand;
})($Command);
export { ListDistributionsByOriginRequestPolicyIdCommand };
//# sourceMappingURL=ListDistributionsByOriginRequestPolicyIdCommand.js.map
