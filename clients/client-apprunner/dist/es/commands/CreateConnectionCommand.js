import { __extends } from "tslib";
import { CreateConnectionRequest, CreateConnectionResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CreateConnectionCommand,
  serializeAws_json1_0CreateConnectionCommand,
} from "../protocols/Aws_json1_0";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Create an AWS App Runner connection resource. App Runner requires a connection resource when you create App Runner services that access private repositories from
 *       certain third-party providers. You can share a connection across multiple services.</p>
 *          <p>A connection resource is needed to access GitHub repositories. GitHub requires a user interface approval process through the App Runner console before you
 *       can use the connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const command = new CreateConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateConnectionCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateConnectionCommand = /** @class */ (function (_super) {
  __extends(CreateConnectionCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateConnectionCommand(input) {
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
  CreateConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppRunnerClient";
    var commandName = "CreateConnectionCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateConnectionResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateConnectionCommand.prototype.serialize = function (input, context) {
    return serializeAws_json1_0CreateConnectionCommand(input, context);
  };
  CreateConnectionCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_json1_0CreateConnectionCommand(output, context);
  };
  return CreateConnectionCommand;
})($Command);
export { CreateConnectionCommand };
//# sourceMappingURL=CreateConnectionCommand.js.map
