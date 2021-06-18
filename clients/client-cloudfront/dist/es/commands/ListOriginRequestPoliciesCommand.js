import { __extends } from "tslib";
import { ListOriginRequestPoliciesRequest, ListOriginRequestPoliciesResult } from "../models/models_1";
import {
  deserializeAws_restXmlListOriginRequestPoliciesCommand,
  serializeAws_restXmlListOriginRequestPoliciesCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of origin request policies.</p>
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
 * import { CloudFrontClient, ListOriginRequestPoliciesCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, ListOriginRequestPoliciesCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const command = new ListOriginRequestPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOriginRequestPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListOriginRequestPoliciesCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOriginRequestPoliciesCommand = /** @class */ (function (_super) {
  __extends(ListOriginRequestPoliciesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListOriginRequestPoliciesCommand(input) {
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
  ListOriginRequestPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListOriginRequestPoliciesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListOriginRequestPoliciesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOriginRequestPoliciesResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListOriginRequestPoliciesCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListOriginRequestPoliciesCommand(input, context);
  };
  ListOriginRequestPoliciesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListOriginRequestPoliciesCommand(output, context);
  };
  return ListOriginRequestPoliciesCommand;
})($Command);
export { ListOriginRequestPoliciesCommand };
//# sourceMappingURL=ListOriginRequestPoliciesCommand.js.map
