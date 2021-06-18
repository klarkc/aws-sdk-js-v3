import { __extends } from "tslib";
import { GetDiscoverySummaryRequest, GetDiscoverySummaryResponse } from "../models/models_0";
import {
  deserializeAws_json1_1GetDiscoverySummaryCommand,
  serializeAws_json1_1GetDiscoverySummaryCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a short summary of discovered assets.</p>
 *          <p>This API operation takes no request parameters and is called as is at the command
 *       prompt as shown in the example.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, GetDiscoverySummaryCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, GetDiscoverySummaryCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new GetDiscoverySummaryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDiscoverySummaryCommandInput} for command's `input` shape.
 * @see {@link GetDiscoverySummaryCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetDiscoverySummaryCommand = /** @class */ (function (_super) {
  __extends(GetDiscoverySummaryCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetDiscoverySummaryCommand(input) {
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
  GetDiscoverySummaryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "GetDiscoverySummaryCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetDiscoverySummaryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDiscoverySummaryResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetDiscoverySummaryCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1GetDiscoverySummaryCommand(input, context);
  };
  GetDiscoverySummaryCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1GetDiscoverySummaryCommand(output, context);
  };
  return GetDiscoverySummaryCommand;
})($Command);
export { GetDiscoverySummaryCommand };
//# sourceMappingURL=GetDiscoverySummaryCommand.js.map
