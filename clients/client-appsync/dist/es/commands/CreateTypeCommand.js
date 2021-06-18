import { __extends } from "tslib";
import { CreateTypeRequest, CreateTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateTypeCommand,
  serializeAws_restJson1CreateTypeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a <code>Type</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, CreateTypeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, CreateTypeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new CreateTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTypeCommandInput} for command's `input` shape.
 * @see {@link CreateTypeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateTypeCommand = /** @class */ (function (_super) {
  __extends(CreateTypeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function CreateTypeCommand(input) {
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
  CreateTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "CreateTypeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: CreateTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTypeResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  CreateTypeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1CreateTypeCommand(input, context);
  };
  CreateTypeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1CreateTypeCommand(output, context);
  };
  return CreateTypeCommand;
})($Command);
export { CreateTypeCommand };
//# sourceMappingURL=CreateTypeCommand.js.map
