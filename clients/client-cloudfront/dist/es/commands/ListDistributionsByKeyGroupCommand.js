import { __extends } from "tslib";
import { ListDistributionsByKeyGroupRequest, ListDistributionsByKeyGroupResult } from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByKeyGroupCommand,
  serializeAws_restXmlListDistributionsByKeyGroupCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of distribution IDs for distributions that have a cache behavior that references
 * 			the specified key group.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListDistributionsByKeyGroupCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListDistributionsByKeyGroupCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListDistributionsByKeyGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDistributionsByKeyGroupCommandInput} for command's `input` shape.
 * @see {@link ListDistributionsByKeyGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDistributionsByKeyGroupCommand = /** @class */ (function (_super) {
  __extends(ListDistributionsByKeyGroupCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDistributionsByKeyGroupCommand(input) {
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
  ListDistributionsByKeyGroupCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListDistributionsByKeyGroupCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDistributionsByKeyGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByKeyGroupResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDistributionsByKeyGroupCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListDistributionsByKeyGroupCommand(input, context);
  };
  ListDistributionsByKeyGroupCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListDistributionsByKeyGroupCommand(output, context);
  };
  return ListDistributionsByKeyGroupCommand;
})($Command);
export { ListDistributionsByKeyGroupCommand };
//# sourceMappingURL=ListDistributionsByKeyGroupCommand.js.map
