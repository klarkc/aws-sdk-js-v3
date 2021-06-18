import { __extends } from "tslib";
import {
  ListDistributionsByRealtimeLogConfigRequest,
  ListDistributionsByRealtimeLogConfigResult,
} from "../models/models_1";
import {
  deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand,
  serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand,
} from "../protocols/Aws_restXml";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var ListDistributionsByRealtimeLogConfigCommand = /** @class */ (function (_super) {
  __extends(ListDistributionsByRealtimeLogConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListDistributionsByRealtimeLogConfigCommand(input) {
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
  ListDistributionsByRealtimeLogConfigCommand.prototype.resolveMiddleware = function (
    clientStack,
    configuration,
    options
  ) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFrontClient";
    var commandName = "ListDistributionsByRealtimeLogConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListDistributionsByRealtimeLogConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListDistributionsByRealtimeLogConfigResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListDistributionsByRealtimeLogConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restXmlListDistributionsByRealtimeLogConfigCommand(input, context);
  };
  ListDistributionsByRealtimeLogConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restXmlListDistributionsByRealtimeLogConfigCommand(output, context);
  };
  return ListDistributionsByRealtimeLogConfigCommand;
})($Command);
export { ListDistributionsByRealtimeLogConfigCommand };
//# sourceMappingURL=ListDistributionsByRealtimeLogConfigCommand.js.map
