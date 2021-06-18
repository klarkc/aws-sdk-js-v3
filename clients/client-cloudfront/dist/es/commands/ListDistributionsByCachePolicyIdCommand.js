import { __extends } from "tslib";
import { ListDistributionsByCachePolicyIdRequest, ListDistributionsByCachePolicyIdResult } from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByCachePolicyIdCommand,
  serializeAws_restXmlListDistributionsByCachePolicyIdCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that’s
 * 			associated with the specified cache policy.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByCachePolicyIdCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByCachePolicyIdCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByCachePolicyIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByCachePolicyIdCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByCachePolicyIdCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDistributionsByCachePolicyIdCommand = /** @class */ (function (_super) {
  __extends(ListDistributionsByCachePolicyIdCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDistributionsByCachePolicyIdCommand(input) {
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
  ListDistributionsByCachePolicyIdCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListDistributionsByCachePolicyIdCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDistributionsByCachePolicyIdRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByCachePolicyIdResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDistributionsByCachePolicyIdCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListDistributionsByCachePolicyIdCommand(input, context);
  };
  ListDistributionsByCachePolicyIdCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListDistributionsByCachePolicyIdCommand(output, context);
  };
  return ListDistributionsByCachePolicyIdCommand;
})($Command);
export { ListDistributionsByCachePolicyIdCommand };
//# sourceMappingURL=ListDistributionsByCachePolicyIdCommand.js.map
