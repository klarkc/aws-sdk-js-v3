import { __extends } from "tslib";
import { DeleteAppRequest, DeleteAppResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteAppCommand,
  serializeAws_restJson1DeleteAppCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes an existing Amplify app specified by an app ID. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteAppCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteAppCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new DeleteAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAppCommandInput} for command's `input` shape.
 * @see {@link DeleteAppCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAppCommand = /** @class */ (function (_super) {
  __extends(DeleteAppCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteAppCommand(input) {
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
  DeleteAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "DeleteAppCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteAppRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteAppResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteAppCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteAppCommand(input, context);
  };
  DeleteAppCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteAppCommand(output, context);
  };
  return DeleteAppCommand;
})($Command);
export { DeleteAppCommand };
//# sourceMappingURL=DeleteAppCommand.js.map
