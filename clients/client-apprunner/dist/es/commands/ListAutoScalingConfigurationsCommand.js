import { __extends } from "tslib";
import { ListAutoScalingConfigurationsRequest, ListAutoScalingConfigurationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ListAutoScalingConfigurationsCommand,
  serializeAws_json1_0ListAutoScalingConfigurationsCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of AWS App Runner automatic scaling configurations in your AWS account. You can query the revisions for a specific configuration name or
 *       the revisions for all configurations in your account. You can optionally query only the latest revision of each requested name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListAutoScalingConfigurationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListAutoScalingConfigurationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListAutoScalingConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAutoScalingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAutoScalingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAutoScalingConfigurationsCommand = /** @class */ (function (_super) {
  __extends(ListAutoScalingConfigurationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListAutoScalingConfigurationsCommand(input) {
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
  ListAutoScalingConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "ListAutoScalingConfigurationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListAutoScalingConfigurationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAutoScalingConfigurationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListAutoScalingConfigurationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0ListAutoScalingConfigurationsCommand(input, context);
  };
  ListAutoScalingConfigurationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0ListAutoScalingConfigurationsCommand(output, context);
  };
  return ListAutoScalingConfigurationsCommand;
})($Command);
export { ListAutoScalingConfigurationsCommand };
//# sourceMappingURL=ListAutoScalingConfigurationsCommand.js.map
