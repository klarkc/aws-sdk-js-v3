import { __extends } from "tslib";
import { CreateBackendAPIRequest, CreateBackendAPIResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateBackendAPICommand,
  serializeAws_restJson1CreateBackendAPICommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new backend API resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, CreateBackendAPICommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, CreateBackendAPICommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new CreateBackendAPICommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBackendAPICommandInput} for command's `input` shape.
 * @see {@link CreateBackendAPICommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBackendAPICommand = /** @class */ (function (_super) {
  __extends(CreateBackendAPICommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateBackendAPICommand(input) {
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
  CreateBackendAPICommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyBackendClient";
    var commandName = "CreateBackendAPICommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateBackendAPIRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateBackendAPIResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateBackendAPICommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateBackendAPICommand(input, context);
  };
  CreateBackendAPICommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateBackendAPICommand(output, context);
  };
  return CreateBackendAPICommand;
})($Command);
export { CreateBackendAPICommand };
//# sourceMappingURL=CreateBackendAPICommand.js.map
