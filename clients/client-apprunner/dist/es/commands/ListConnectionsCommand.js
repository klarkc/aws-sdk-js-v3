import { __extends } from "tslib";
import { ListConnectionsRequest, ListConnectionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_0ListConnectionsCommand,
  serializeAws_json1_0ListConnectionsCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of AWS App Runner connections that are associated with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, ListConnectionsCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, ListConnectionsCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionsCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListConnectionsCommand = /** @class */ (function (_super) {
  __extends(ListConnectionsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function ListConnectionsCommand(input) {
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
  ListConnectionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "ListConnectionsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: ListConnectionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListConnectionsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  ListConnectionsCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0ListConnectionsCommand(input, context);
  };
  ListConnectionsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0ListConnectionsCommand(output, context);
  };
  return ListConnectionsCommand;
})($Command);
export { ListConnectionsCommand };
//# sourceMappingURL=ListConnectionsCommand.js.map
