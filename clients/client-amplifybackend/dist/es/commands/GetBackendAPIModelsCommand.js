import { __extends } from "tslib";
import { GetBackendAPIModelsRequest, GetBackendAPIModelsResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetBackendAPIModelsCommand,
  serializeAws_restJson1GetBackendAPIModelsCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Generates a model schema for existing backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, GetBackendAPIModelsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, GetBackendAPIModelsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new GetBackendAPIModelsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetBackendAPIModelsCommandInput} for command's `input` shape.
 * @see {@link GetBackendAPIModelsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetBackendAPIModelsCommand = /** @class */ (function (_super) {
  __extends(GetBackendAPIModelsCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetBackendAPIModelsCommand(input) {
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
  GetBackendAPIModelsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "GetBackendAPIModelsCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetBackendAPIModelsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBackendAPIModelsResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetBackendAPIModelsCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetBackendAPIModelsCommand(input, context);
  };
  GetBackendAPIModelsCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetBackendAPIModelsCommand(output, context);
  };
  return GetBackendAPIModelsCommand;
})($Command);
export { GetBackendAPIModelsCommand };
//# sourceMappingURL=GetBackendAPIModelsCommand.js.map
