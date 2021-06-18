import { __extends } from "tslib";
import { StartDataCollectionByAgentIdsRequest, StartDataCollectionByAgentIdsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartDataCollectionByAgentIdsCommand,
  serializeAws_json1_1StartDataCollectionByAgentIdsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Instructs the specified agents or connectors to start collecting data.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartDataCollectionByAgentIdsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartDataCollectionByAgentIdsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StartDataCollectionByAgentIdsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDataCollectionByAgentIdsCommandInput} for command's `input` shape.
 * @see {@link StartDataCollectionByAgentIdsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartDataCollectionByAgentIdsCommand = /** @class */ (function (_super) {
  __extends(StartDataCollectionByAgentIdsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartDataCollectionByAgentIdsCommand(input) {
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
  StartDataCollectionByAgentIdsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "StartDataCollectionByAgentIdsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartDataCollectionByAgentIdsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDataCollectionByAgentIdsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartDataCollectionByAgentIdsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StartDataCollectionByAgentIdsCommand(input, context);
  };
  StartDataCollectionByAgentIdsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StartDataCollectionByAgentIdsCommand(output, context);
  };
  return StartDataCollectionByAgentIdsCommand;
})($Command);
export { StartDataCollectionByAgentIdsCommand };
//# sourceMappingURL=StartDataCollectionByAgentIdsCommand.js.map
