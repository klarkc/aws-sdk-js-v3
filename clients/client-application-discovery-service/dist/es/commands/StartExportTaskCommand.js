import { __extends } from "tslib";
import { StartExportTaskRequest, StartExportTaskResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartExportTaskCommand,
  serializeAws_json1_1StartExportTaskCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Begins the export of discovered data to an S3 bucket.</p>
 *          <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of
 *       detailed data collected by the identified Application Discovery Agent, including network,
 *       process, and performance details. A time range for exported agent data may be set by using
 *         <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to
 *       five concurrently running exports. </p>
 *          <p> If you do not include an <code>agentIds</code> filter, summary data is exported that
 *       includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery
 *       Agents. Export of summary data is limited to two exports per day. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, StartExportTaskCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, StartExportTaskCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartExportTaskCommand = /** @class */ (function (_super) {
  __extends(StartExportTaskCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function StartExportTaskCommand(input) {
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
  StartExportTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "StartExportTaskCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: StartExportTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartExportTaskResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  StartExportTaskCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1StartExportTaskCommand(input, context);
  };
  StartExportTaskCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1StartExportTaskCommand(output, context);
  };
  return StartExportTaskCommand;
})($Command);
export { StartExportTaskCommand };
//# sourceMappingURL=StartExportTaskCommand.js.map
