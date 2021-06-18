import { __extends } from "tslib";
import { CreateBackendRequest, CreateBackendResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackendCommand,
  serializeAws_restJson1CreateBackendCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new CreateBackendCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackendCommandInput} for command's `input` shape.
 * @see {@link CreateBackendCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBackendCommand = /** @class */ (function (_super) {
  __extends(CreateBackendCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBackendCommand(input) {
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
  CreateBackendCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "CreateBackendCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBackendRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackendResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBackendCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBackendCommand(input, context);
  };
  CreateBackendCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBackendCommand(output, context);
  };
  return CreateBackendCommand;
})($Command);
export { CreateBackendCommand };
//# sourceMappingURL=CreateBackendCommand.js.map
