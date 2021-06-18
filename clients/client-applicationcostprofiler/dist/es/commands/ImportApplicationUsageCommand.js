import { __extends } from "tslib";
import { ImportApplicationUsageRequest, ImportApplicationUsageResult } from "../models/models_0";
import {
  deserializeAws_restJson1ImportApplicationUsageCommand,
  serializeAws_restJson1ImportApplicationUsageCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Ingests application usage data from Amazon Simple Storage Service (Amazon S3).</p>
 *          <p>The data must already exist in the S3 location. As part of the action, AWS Application Cost Profiler
 *       copies the object from your S3 bucket to an S3 bucket owned by Amazon for processing
 *       asynchronously.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationCostProfilerClient, ImportApplicationUsageCommand } from "@aws-sdk/client-applicationcostprofiler"; // ES Modules import
 * // const { ApplicationCostProfilerClient, ImportApplicationUsageCommand } = require("@aws-sdk/client-applicationcostprofiler"); // CommonJS import
 * const client = new ApplicationCostProfilerClient(config);
 * const command = new ImportApplicationUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportApplicationUsageCommandInput} for command's `input` shape.
 * @see {@link ImportApplicationUsageCommandOutput} for command's `response` shape.
 * @see {@link ApplicationCostProfilerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ImportApplicationUsageCommand = /** @class */ (function (_super) {
  __extends(ImportApplicationUsageCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ImportApplicationUsageCommand(input) {
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
  ImportApplicationUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "ApplicationCostProfilerClient";
    var commandName = "ImportApplicationUsageCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ImportApplicationUsageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ImportApplicationUsageResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ImportApplicationUsageCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1ImportApplicationUsageCommand(input, context);
  };
  ImportApplicationUsageCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1ImportApplicationUsageCommand(output, context);
  };
  return ImportApplicationUsageCommand;
})($Command);
export { ImportApplicationUsageCommand };
//# sourceMappingURL=ImportApplicationUsageCommand.js.map
