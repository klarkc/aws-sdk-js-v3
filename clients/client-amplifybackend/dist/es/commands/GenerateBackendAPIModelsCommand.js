import { __extends } from "tslib";
import { GenerateBackendAPIModelsRequest, GenerateBackendAPIModelsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GenerateBackendAPIModelsCommand,
  serializeAws_restJson1GenerateBackendAPIModelsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a model schema for an existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GenerateBackendAPIModelsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GenerateBackendAPIModelsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GenerateBackendAPIModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateBackendAPIModelsCommandInput} for command's `input` shape.
 * @see {@link GenerateBackendAPIModelsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GenerateBackendAPIModelsCommand = /** @class */ (function (_super) {
  __extends(GenerateBackendAPIModelsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GenerateBackendAPIModelsCommand(input) {
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
  GenerateBackendAPIModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "GenerateBackendAPIModelsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GenerateBackendAPIModelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GenerateBackendAPIModelsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GenerateBackendAPIModelsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GenerateBackendAPIModelsCommand(input, context);
  };
  GenerateBackendAPIModelsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GenerateBackendAPIModelsCommand(output, context);
  };
  return GenerateBackendAPIModelsCommand;
})($Command);
export { GenerateBackendAPIModelsCommand };
//# sourceMappingURL=GenerateBackendAPIModelsCommand.js.map
