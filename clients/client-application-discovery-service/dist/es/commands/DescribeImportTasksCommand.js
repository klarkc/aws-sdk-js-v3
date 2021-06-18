import { __extends } from "tslib";
import { DescribeImportTasksRequest, DescribeImportTasksResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeImportTasksCommand,
  serializeAws_json1_1DescribeImportTasksCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns an array of import tasks for your account, including status information, times,
 *       IDs, the Amazon S3 Object URL for the import file, and more.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeImportTasksCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeImportTasksCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeImportTasksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeImportTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeImportTasksCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeImportTasksCommand = /** @class */ (function (_super) {
  __extends(DescribeImportTasksCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeImportTasksCommand(input) {
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
  DescribeImportTasksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "DescribeImportTasksCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeImportTasksRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeImportTasksResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeImportTasksCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeImportTasksCommand(input, context);
  };
  DescribeImportTasksCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeImportTasksCommand(output, context);
  };
  return DescribeImportTasksCommand;
})($Command);
export { DescribeImportTasksCommand };
//# sourceMappingURL=DescribeImportTasksCommand.js.map
