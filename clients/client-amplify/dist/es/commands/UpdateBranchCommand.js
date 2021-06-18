import { __extends } from "tslib";
import { UpdateBranchRequest, UpdateBranchResult } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBranchCommand,
  serializeAws_restJson1UpdateBranchCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p> Updates a branch for an Amplify app. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, UpdateBranchCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, UpdateBranchCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const command = new UpdateBranchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBranchCommandInput} for command's `input` shape.
 * @see {@link UpdateBranchCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBranchCommand = /** @class */ (function (_super) {
  __extends(UpdateBranchCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateBranchCommand(input) {
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
  UpdateBranchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmplifyClient";
    var commandName = "UpdateBranchCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateBranchRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBranchResult.filterSensitiveLog,
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateBranchCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateBranchCommand(input, context);
  };
  UpdateBranchCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateBranchCommand(output, context);
  };
  return UpdateBranchCommand;
})($Command);
export { UpdateBranchCommand };
//# sourceMappingURL=UpdateBranchCommand.js.map
