import { __extends } from "tslib";
import { DeleteBranchRequest, DeleteBranchResult } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBranchCommand,
  serializeAws_restJson1DeleteBranchCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Deletes a branch for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, DeleteBranchCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, DeleteBranchCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new DeleteBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBranchCommandInput} for command's `input` shape.
 * @see {@link DeleteBranchCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBranchCommand = /** @class */ (function (_super) {
  __extends(DeleteBranchCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function DeleteBranchCommand(input) {
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
  DeleteBranchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "DeleteBranchCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: DeleteBranchRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBranchResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  DeleteBranchCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1DeleteBranchCommand(input, context);
  };
  DeleteBranchCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1DeleteBranchCommand(output, context);
  };
  return DeleteBranchCommand;
})($Command);
export { DeleteBranchCommand };
//# sourceMappingURL=DeleteBranchCommand.js.map
