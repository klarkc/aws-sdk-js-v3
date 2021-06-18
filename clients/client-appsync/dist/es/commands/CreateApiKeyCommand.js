import { __extends } from "tslib";
import { CreateApiKeyRequest, CreateApiKeyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateApiKeyCommand,
  serializeAws_restJson1CreateApiKeyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a unique key that you can distribute to clients who are executing your
 *          API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateApiKeyCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateApiKeyCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new CreateApiKeyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApiKeyCommandInput} for command's `input` shape.
 * @see {@link CreateApiKeyCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateApiKeyCommand = /** @class */ (function (_super) {
  __extends(CreateApiKeyCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateApiKeyCommand(input) {
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
  CreateApiKeyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "CreateApiKeyCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateApiKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateApiKeyResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateApiKeyCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateApiKeyCommand(input, context);
  };
  CreateApiKeyCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateApiKeyCommand(output, context);
  };
  return CreateApiKeyCommand;
})($Command);
export { CreateApiKeyCommand };
//# sourceMappingURL=CreateApiKeyCommand.js.map
