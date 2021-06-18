import { __extends } from "tslib";
import { StopDataCollectionByAgentIdsRequest, StopDataCollectionByAgentIdsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StopDataCollectionByAgentIdsCommand,
  serializeAws_json1_1StopDataCollectionByAgentIdsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Instructs the specified agents or connectors to stop collecting data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StopDataCollectionByAgentIdsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StopDataCollectionByAgentIdsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StopDataCollectionByAgentIdsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopDataCollectionByAgentIdsCommandInput} for command's `input` shape.
 * @see {@link StopDataCollectionByAgentIdsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopDataCollectionByAgentIdsCommand = /** @class */ (function (_super) {
  __extends(StopDataCollectionByAgentIdsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StopDataCollectionByAgentIdsCommand(input) {
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
  StopDataCollectionByAgentIdsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "StopDataCollectionByAgentIdsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StopDataCollectionByAgentIdsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopDataCollectionByAgentIdsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StopDataCollectionByAgentIdsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StopDataCollectionByAgentIdsCommand(input, context);
  };
  StopDataCollectionByAgentIdsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StopDataCollectionByAgentIdsCommand(output, context);
  };
  return StopDataCollectionByAgentIdsCommand;
})($Command);
export { StopDataCollectionByAgentIdsCommand };
//# sourceMappingURL=StopDataCollectionByAgentIdsCommand.js.map
