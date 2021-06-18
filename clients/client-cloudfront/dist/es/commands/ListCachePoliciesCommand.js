import { __extends } from "tslib";
import { ListCachePoliciesRequest, ListCachePoliciesResult } from "../models/models_1";
import {
  deserializeAws_restXmlListCachePoliciesCommand,
  serializeAws_restXmlListCachePoliciesCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of cache policies.</p>
 * 		       <p>You can optionally apply a filter to return only the managed policies created by AWS, or
 * 			only the custom policies created in your AWS account.</p>
 * 		       <p>You can optionally specify the maximum number of items to receive in the response. If
 * 			the total number of items in the list exceeds the maximum that you specify, or the
 * 			default maximum, the response is paginated. To get the next page of items, send a
 * 			subsequent request that specifies the <code>NextMarker</code> value from the current
 * 			response as the <code>Marker</code> value in the subsequent request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, ListCachePoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListCachePoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListCachePoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCachePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListCachePoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCachePoliciesCommand = /** @class */ (function (_super) {
  __extends(ListCachePoliciesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListCachePoliciesCommand(input) {
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
  ListCachePoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListCachePoliciesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListCachePoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCachePoliciesResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListCachePoliciesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListCachePoliciesCommand(input, context);
  };
  ListCachePoliciesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListCachePoliciesCommand(output, context);
  };
  return ListCachePoliciesCommand;
})($Command);
export { ListCachePoliciesCommand };
//# sourceMappingURL=ListCachePoliciesCommand.js.map
