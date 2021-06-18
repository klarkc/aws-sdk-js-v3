import { __extends } from "tslib";
import { DescribeExportConfigurationsRequest, DescribeExportConfigurationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeExportConfigurationsCommand,
  serializeAws_json1_1DescribeExportConfigurationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * @deprecated
 *
 * <p>
 *             <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeImportTasks</a>, instead.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, DescribeExportConfigurationsCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, DescribeExportConfigurationsCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const command = new DescribeExportConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeExportConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DescribeExportConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeExportConfigurationsCommand = /** @class */ (function (_super) {
  __extends(DescribeExportConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DescribeExportConfigurationsCommand(input) {
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
  DescribeExportConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationDiscoveryServiceClient";
    var commandName = "DescribeExportConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DescribeExportConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeExportConfigurationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DescribeExportConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_1DescribeExportConfigurationsCommand(input, context);
  };
  DescribeExportConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_1DescribeExportConfigurationsCommand(output, context);
  };
  return DescribeExportConfigurationsCommand;
})($Command);
export { DescribeExportConfigurationsCommand };
//# sourceMappingURL=DescribeExportConfigurationsCommand.js.map
