import { __extends } from "tslib";
import { GetTypeRequest, GetTypeResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetTypeCommand,
  serializeAws_restJson1GetTypeCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a <code>Type</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, GetTypeCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, GetTypeCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new GetTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetTypeCommandInput} for command's `input` shape.
 * @see {@link GetTypeCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetTypeCommand = /** @class */ (function (_super) {
  __extends(GetTypeCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function GetTypeCommand(input) {
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
  GetTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AppSyncClient";
    var commandName = "GetTypeCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: GetTypeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetTypeResponse.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  GetTypeCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1GetTypeCommand(input, context);
  };
  GetTypeCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1GetTypeCommand(output, context);
  };
  return GetTypeCommand;
})($Command);
export { GetTypeCommand };
//# sourceMappingURL=GetTypeCommand.js.map
