import { __extends } from "tslib";
import { CreateBackendEnvironmentRequest, CreateBackendEnvironmentResult } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackendEnvironmentCommand,
  serializeAws_restJson1CreateBackendEnvironmentCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Creates a new backend environment for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, CreateBackendEnvironmentCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, CreateBackendEnvironmentCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new CreateBackendEnvironmentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackendEnvironmentCommandInput} for command's `input` shape.
 * @see {@link CreateBackendEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBackendEnvironmentCommand = /** @class */ (function (_super) {
  __extends(CreateBackendEnvironmentCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBackendEnvironmentCommand(input) {
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
  CreateBackendEnvironmentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "CreateBackendEnvironmentCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBackendEnvironmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackendEnvironmentResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBackendEnvironmentCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBackendEnvironmentCommand(input, context);
  };
  CreateBackendEnvironmentCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBackendEnvironmentCommand(output, context);
  };
  return CreateBackendEnvironmentCommand;
})($Command);
export { CreateBackendEnvironmentCommand };
//# sourceMappingURL=CreateBackendEnvironmentCommand.js.map
