import { __extends } from "tslib";
import { EstimateTemplateCostInput, EstimateTemplateCostOutput } from "../models/models_0";
import {
  deserializeAws_queryEstimateTemplateCostCommand,
  serializeAws_queryEstimateTemplateCostCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the estimated monthly cost of a template. The return value is an AWS Simple
 *          Monthly Calculator URL with a query string that describes the resources required to run the
 *          template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, EstimateTemplateCostCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, EstimateTemplateCostCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new EstimateTemplateCostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EstimateTemplateCostCommandInput} for command's `input` shape.
 * @see {@link EstimateTemplateCostCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EstimateTemplateCostCommand = /** @class */ (function (_super) {
  __extends(EstimateTemplateCostCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function EstimateTemplateCostCommand(input) {
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
  EstimateTemplateCostCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "CloudFormationClient";
    var commandName = "EstimateTemplateCostCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: EstimateTemplateCostInput.filterSensitiveLog,
      outputFilterSensitiveLog: EstimateTemplateCostOutput.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  EstimateTemplateCostCommand.prototype.serialize = function (input, context) {
    return serializeAws_queryEstimateTemplateCostCommand(input, context);
  };
  EstimateTemplateCostCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_queryEstimateTemplateCostCommand(output, context);
  };
  return EstimateTemplateCostCommand;
})($Command);
export { EstimateTemplateCostCommand };
//# sourceMappingURL=EstimateTemplateCostCommand.js.map
