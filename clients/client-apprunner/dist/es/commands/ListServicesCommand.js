import { __extends } from "tslib";
import { ListServicesRequest, ListServicesResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ListServicesCommand,
  serializeAws_json1_0ListServicesCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of running AWS App Runner services in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListServicesCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListServicesCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListServicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListServicesCommandInput} for command's `input` shape.
 * @see {@link ListServicesCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListServicesCommand = /** @class */ (function (_super) {
  __extends(ListServicesCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListServicesCommand(input) {
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
  ListServicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "ListServicesCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListServicesRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListServicesResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListServicesCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0ListServicesCommand(input, context);
  };
  ListServicesCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0ListServicesCommand(output, context);
  };
  return ListServicesCommand;
})($Command);
export { ListServicesCommand };
//# sourceMappingURL=ListServicesCommand.js.map
