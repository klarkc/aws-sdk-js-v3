import { __extends } from "tslib";
import { CreateBackendConfigRequest, CreateBackendConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackendConfigCommand,
  serializeAws_restJson1CreateBackendConfigCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a config object for a backend.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendConfigCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendConfigCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new CreateBackendConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackendConfigCommandInput} for command's `input` shape.
 * @see {@link CreateBackendConfigCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBackendConfigCommand = /** @class */ (function (_super) {
  __extends(CreateBackendConfigCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBackendConfigCommand(input) {
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
  CreateBackendConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "CreateBackendConfigCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBackendConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackendConfigResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBackendConfigCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBackendConfigCommand(input, context);
  };
  CreateBackendConfigCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBackendConfigCommand(output, context);
  };
  return CreateBackendConfigCommand;
})($Command);
export { CreateBackendConfigCommand };
//# sourceMappingURL=CreateBackendConfigCommand.js.map
