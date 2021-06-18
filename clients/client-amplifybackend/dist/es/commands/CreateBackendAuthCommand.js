import { __extends } from "tslib";
import { CreateBackendAuthRequest, CreateBackendAuthResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackendAuthCommand,
  serializeAws_restJson1CreateBackendAuthCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new CreateBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackendAuthCommandInput} for command's `input` shape.
 * @see {@link CreateBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBackendAuthCommand = /** @class */ (function (_super) {
  __extends(CreateBackendAuthCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBackendAuthCommand(input) {
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
  CreateBackendAuthCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "CreateBackendAuthCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBackendAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackendAuthResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBackendAuthCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBackendAuthCommand(input, context);
  };
  CreateBackendAuthCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBackendAuthCommand(output, context);
  };
  return CreateBackendAuthCommand;
})($Command);
export { CreateBackendAuthCommand };
//# sourceMappingURL=CreateBackendAuthCommand.js.map
