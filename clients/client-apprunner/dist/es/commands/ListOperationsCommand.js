import { __extends } from "tslib";
import { ListOperationsRequest, ListOperationsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ListOperationsCommand,
  serializeAws_json1_0ListOperationsCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Return a list of operations that occurred on an AWS App Runner service.</p>
 *          <p>The resulting list of <a>OperationSummary</a> objects is sorted in reverse chronological order. The first object on the list represents the
 *       last started operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListOperationsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListOperationsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOperationsCommandInput} for command's `input` shape.
 * @see {@link ListOperationsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOperationsCommand = /** @class */ (function (_super) {
  __extends(ListOperationsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListOperationsCommand(input) {
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
  ListOperationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "ListOperationsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListOperationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListOperationsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListOperationsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0ListOperationsCommand(input, context);
  };
  ListOperationsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0ListOperationsCommand(output, context);
  };
  return ListOperationsCommand;
})($Command);
export { ListOperationsCommand };
//# sourceMappingURL=ListOperationsCommand.js.map
