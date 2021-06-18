import { __extends } from "tslib";
import { DescribeExportTasksRequest, DescribeExportTasksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeExportTasksCommand,
  serializeAws_json1_1DescribeExportTasksCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieve status of one or more export tasks. You can retrieve the status of up to 100
 *       export tasks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeExportTasksCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeExportTasksCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeExportTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeExportTasksCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExportTasksCommand = /** @class */ (function (_super) {
  __extends(DescribeExportTasksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeExportTasksCommand(input) {
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
  DescribeExportTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "DescribeExportTasksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeExportTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExportTasksResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeExportTasksCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeExportTasksCommand(input, context);
  };
  DescribeExportTasksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeExportTasksCommand(output, context);
  };
  return DescribeExportTasksCommand;
})($Command);
export { DescribeExportTasksCommand };
//# sourceMappingURL=DescribeExportTasksCommand.js.map
