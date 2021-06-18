import { __extends } from "tslib";
import { UpdateWorkspaceAliasRequest } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateWorkspaceAliasCommand,
  serializeAws_restJson1UpdateWorkspaceAliasCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Updates an AMP workspace alias.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, UpdateWorkspaceAliasCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, UpdateWorkspaceAliasCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * const client = new AmpClient(config);
 * const command = new UpdateWorkspaceAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateWorkspaceAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkspaceAliasCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateWorkspaceAliasCommand = /** @class */ (function (_super) {
  __extends(UpdateWorkspaceAliasCommand, _super);
  // Start section: command_properties
  // End section: command_properties
  function UpdateWorkspaceAliasCommand(input) {
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
  UpdateWorkspaceAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    var stack = clientStack.concat(this.middlewareStack);
    var logger = configuration.logger;
    var clientName = "AmpClient";
    var commandName = "UpdateWorkspaceAliasCommand";
    var handlerExecutionContext = {
      logger: logger,
      clientName: clientName,
      commandName: commandName,
      inputFilterSensitiveLog: UpdateWorkspaceAliasRequest.filterSensitiveLog,
      outputFilterSensitiveLog: function (output) {
        return output;
      },
    };
    var requestHandler = configuration.requestHandler;
    return stack.resolve(function (request) {
      return requestHandler.handle(request.request, options || {});
    }, handlerExecutionContext);
  };
  UpdateWorkspaceAliasCommand.prototype.serialize = function (input, context) {
    return serializeAws_restJson1UpdateWorkspaceAliasCommand(input, context);
  };
  UpdateWorkspaceAliasCommand.prototype.deserialize = function (output, context) {
    return deserializeAws_restJson1UpdateWorkspaceAliasCommand(output, context);
  };
  return UpdateWorkspaceAliasCommand;
})($Command);
export { UpdateWorkspaceAliasCommand };
//# sourceMappingURL=UpdateWorkspaceAliasCommand.js.map
